import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [],
  imports: [MatToolbarModule, MatSidenavModule, MatIconModule, MatButtonModule, MatListModule, MatCardModule],
  exports: [MatToolbarModule, MatSidenavModule, MatIconModule, MatButtonModule, MatListModule, MatCardModule],
})
export class SharedModule {}
