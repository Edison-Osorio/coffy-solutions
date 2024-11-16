import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { SharedModule } from '@shared/shared.module';

@Component({
  selector: 'app-caffe-total',
  standalone: true,
  imports: [SharedModule, FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './caffe-total.component.html',
  styleUrl: './caffe-total.component.scss',
})
export class CaffeTotalComponent {
  readonly range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });
  editingCell: { row: number; field: string } | null = null;

  /** TODO: Inicia la edición de un campo específico */
  startEdit(row: number, field: string) {
    this.editingCell = { row, field };
  }

  /** TODO: Guarda los cambios y cierra la edición */
  saveEdit() {
    this.editingCell = null;
    console.log('saveEdit');
  }
  onKeydown(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.saveEdit();
    }
  }
  displayedColumns1: string[] = ['id', 'firstName', 'lastName', 'cellPhone', 'email', 'total'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  addRecolector() {
    alert('add recolector');
  }
}

const ELEMENT_DATA = [
  {
    id: '',
    firstName: 'Edison',
    lastName: 'Osorio',
    cellPhone: '3101231',
    email: 'eosorio@test.com',
    idCard: '1234',
    date: new Date(),
    monday: 0,
    tuesday: 0,
    wednesday: 0,
    thursday: 0,
    friday: 0,
    saturday: 0,
    total: 0,
  },
  {
    id: '',
    firstName: 'Juan',
    lastName: 'Osorio',
    cellPhone: '312311',
    email: '',
    idCard: '987',
    date: new Date(),
    monday: 0,
    tuesday: 0,
    wednesday: 0,
    thursday: 35,
    friday: 0,
    saturday: 0,
    total: 0,
  },
];
