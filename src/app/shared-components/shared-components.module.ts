import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderComponent } from './page-header/page-header.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
@NgModule({
  declarations: [PageHeaderComponent],
  imports: [CommonModule, MatTableModule, MatPaginatorModule, MatDialogModule],
  exports: [PageHeaderComponent, MatTableModule, MatPaginatorModule, MatDialogModule, CommonModule],
})
export class SharedComponentsModule {}
