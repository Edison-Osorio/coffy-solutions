import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { SharedModule } from '@shared/shared.module';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, RouterLink, SharedModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
