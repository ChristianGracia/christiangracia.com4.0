import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { MaterialModule } from "../material/material.module";

const modules = [MaterialModule, CommonModule, RouterModule];
@NgModule({
  imports: modules,
  exports: modules,
})
export class SharedModule {}
