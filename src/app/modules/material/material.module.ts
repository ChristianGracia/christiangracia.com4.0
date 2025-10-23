import { NgModule } from "@angular/core";
import { MatLegacyButtonModule as MatButtonModule } from "@angular/material/legacy-button";
import { MatLegacyProgressSpinnerModule as MatProgressSpinnerModule } from "@angular/material/legacy-progress-spinner";
import { MatLegacyProgressBarModule as MatProgressBarModule } from "@angular/material/legacy-progress-bar";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatLegacyMenuModule as MatMenuModule } from "@angular/material/legacy-menu";
import { MatLegacyListModule as MatListModule } from "@angular/material/legacy-list";

const modules = [
  MatButtonModule,
  MatProgressSpinnerModule,
  MatProgressBarModule,
  MatSidenavModule,
  MatMenuModule,
  MatListModule,
];

@NgModule({
  imports: modules,
  exports: modules,
})
export class MaterialModule {}
