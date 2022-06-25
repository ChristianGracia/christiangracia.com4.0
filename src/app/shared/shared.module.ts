import { NgModule } from "@angular/core";
import { PageHeaderComponent } from "./page-header/page-header.component";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatTableModule } from "@angular/material/table";
import { MatDialogModule } from "@angular/material/dialog";
import { MatCardModule } from "@angular/material/card";
import { CommonModule } from "@angular/common";
@NgModule({
  declarations: [PageHeaderComponent],
  imports: [
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule,
    MatCardModule,
    CommonModule,
  ],
  exports: [
    PageHeaderComponent,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule,
    MatCardModule,
    CommonModule,
  ],
})
export class SharedModule {}
