import { NgModule } from "@angular/core";
import { PageHeaderComponent } from "./page-header/page-header.component";
import { MatLegacyPaginatorModule as MatPaginatorModule } from "@angular/material/legacy-paginator";
import { MatLegacyTableModule as MatTableModule } from "@angular/material/legacy-table";
import { MatLegacyDialogModule as MatDialogModule } from "@angular/material/legacy-dialog";
import { MatLegacyCardModule as MatCardModule } from "@angular/material/legacy-card";
import { SharedModule } from "../shared/shared.module";
import { CloseButtonComponent } from "./common/close-button/close-button.component";

// const modules = [
//   SharedModule,
//   MatTableModule,
//   MatPaginatorModule,
//   MatDialogModule,
//   MatCardModule,
// ];
@NgModule({
  declarations: [PageHeaderComponent, CloseButtonComponent],
  // imports: modules,
  // exports: [...modules, PageHeaderComponent, CloseButtonComponent],
    imports: [],
  exports: [ PageHeaderComponent, CloseButtonComponent],
})
export class LazySharedModule {}
