import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../../material/material.module';

@NgModule({
  declarations: [ContactComponent, ContactFormComponent],
  imports: [CommonModule, MaterialModule, ContactRoutingModule, FormsModule],
})
export class ContactModule {}
