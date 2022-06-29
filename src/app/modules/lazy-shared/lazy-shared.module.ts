import { NgModule } from "@angular/core";
import { PageHeaderComponent } from "./page-header/page-header.component";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatTableModule } from "@angular/material/table";
import { MatDialogModule } from "@angular/material/dialog";
import { MatCardModule } from "@angular/material/card";
import { SharedModule } from "../shared/shared.module";
import { CloseButtonComponent } from "./common/close-button/close-button.component";

const modules = [
  SharedModule,
  MatTableModule,
  MatPaginatorModule,
  MatDialogModule,
  MatCardModule,
];
@NgModule({
  declarations: [PageHeaderComponent, CloseButtonComponent],
  imports: modules,
  exports: [...modules, PageHeaderComponent, CloseButtonComponent],
})
export class LazySharedModule {}
