import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '@shared/shared.module';
import { EmployeeService } from 'src/app/services/employee.service';
import { MatTableDataSource } from '@angular/material/table';
import { CollectionCoffe } from './models/collectionCoffe.model';
import { MatDialog } from '@angular/material/dialog';
import { AddRecolectorDialogComponent } from './dialogs/add-recolector-dialog.component';
import { CreateEmployee } from './models/create-employee.dto';

@Component({
  selector: 'app-recolectors',
  standalone: true,
  imports: [SharedModule, FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './recolectors.component.html',
  styleUrl: './recolectors.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecolectorsComponent implements OnInit {
  listRecolectors: CollectionCoffe[] = [];
  dataSource = new MatTableDataSource<CollectionCoffe>([]);
  editingCell: { row: number; field: string } | null = null;
  displayedColumns1: string[] = ['id', 'employeeId', 'name', 'lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado', 'total'];

  constructor(
    private readonly employeeService: EmployeeService,
    private readonly cdf: ChangeDetectorRef,
    private dialog: MatDialog,
  ) {}

  ngOnInit() {
    this.initializeDateRange();
    this.getRecolectors();
  }

  private getRecolectors() {
    this.employeeService.getEmployees(this.startDate.value).subscribe({
      next: (res) => {
        const sortedRecolectors = res.sort((a, b) => a.employeeId - b.employeeId);
        this.listRecolectors = sortedRecolectors;
        this.dataSource = new MatTableDataSource(this.listRecolectors);
        this.cdf.detectChanges();
      },
    });
  }

  private initializeDateRange() {
    const today = new Date();
    const currentDay = today.getDay();

    const monday = new Date(today);
    const daysToMonday = currentDay === 0 ? -6 : 1 - currentDay;
    monday.setDate(today.getDate() + daysToMonday);
    monday.setHours(0, 0, 0, 0);

    const saturday = new Date(monday);
    saturday.setDate(monday.getDate() + 5);
    saturday.setHours(23, 59, 59, 999);

    this.range.patchValue({
      start: monday,
      end: saturday,
    });
  }

  readonly range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });

  get startDate(): FormControl {
    return this.range.get('start') as FormControl;
  }

  get endDate(): FormControl {
    return this.range.get('end') as FormControl;
  }

  /** Inicia la edición de un campo específico */
  startEdit(row: number, field: string) {
    this.editingCell = { row, field };
  }

  /** Guarda los cambios y cierra la edición */
  saveEdit() {
    this.editingCell = null;
    console.log('saveEdit');
  }
  onKeydown(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.saveEdit();
    }
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  addRecolector(): void {
    const dialogRef = this.dialog.open(AddRecolectorDialogComponent, {
      width: '500px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        // Aquí puedes manejar la creación del empleado
        const newEmployee: CreateEmployee = {
          createEmployeeDto: result,
          createHarvestedDto: {
            employeeId: result.employeeId,
            week: {
              start: this.range.get('start')?.value ?? new Date(),
              end: this.range.get('end')?.value ?? new Date(),
            },
            days: [
              { day: 'Monday', date: this.startDate.value || new Date(), coffeeAmount: 0 },
              { day: 'Tuesday', date: new Date((this.startDate.value || new Date()).getTime() + 86400000), coffeeAmount: 0 },
              { day: 'Wednesday', date: new Date((this.startDate.value || new Date()).getTime() + 86400000 * 2), coffeeAmount: 0 },
              { day: 'Thursday', date: new Date((this.startDate.value || new Date()).getTime() + 86400000 * 3), coffeeAmount: 0 },
              { day: 'Friday', date: new Date((this.startDate.value || new Date()).getTime() + 86400000 * 4), coffeeAmount: 0 },
              { day: 'Saturday', date: new Date((this.startDate.value || new Date()).getTime() + 86400000 * 5), coffeeAmount: 0 },
            ],
          },
        };

        // Aquí llamarías a tu servicio para crear el empleado
        this.employeeService.createEmployee(newEmployee).subscribe({
          next: (res) => {
            console.log(res);
            this.getRecolectors();
          },
        });
      }
    });
  }
}
