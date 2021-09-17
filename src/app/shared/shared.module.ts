import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './side-bar/side-bar.component';
import { HeaderComponent } from './header/header.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [SideBarComponent, HeaderComponent],
  imports: [CommonModule, MaterialModule],
  exports: [SideBarComponent, HeaderComponent],
})
export class SharedModule {}
