import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderComponent } from './page-header/page-header.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
@NgModule({
  declarations: [PageHeaderComponent],
  imports: [CommonModule, MatTableModule, MatPaginatorModule],
  exports: [PageHeaderComponent, MatTableModule, MatPaginatorModule],
})
export class SharedComponentsModule {}
