import { NgModule } from "@angular/core";
import { PageHeaderComponent } from "./page-header/page-header.component";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatTableModule } from "@angular/material/table";
import { MatDialogModule } from "@angular/material/dialog";
import { MatCardModule } from "@angular/material/card";
import { SharedModule } from "../shared/shared.module";

const modules = [
  SharedModule,
  MatTableModule,
  MatPaginatorModule,
  MatDialogModule,
  MatCardModule,
];
@NgModule({
  declarations: [PageHeaderComponent],
  imports: modules,
  exports: [...modules, PageHeaderComponent],
})
export class LazySharedModule {}
