import { NgModule } from '@angular/core';
import { PageHeaderComponent } from './page-header/page-header.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
@NgModule({
  declarations: [PageHeaderComponent],
  imports: [MatTableModule, MatPaginatorModule, MatDialogModule, CommonModule],
  exports: [PageHeaderComponent, MatTableModule, MatPaginatorModule, MatDialogModule, CommonModule],
})
export class SharedComponentsModule {}
