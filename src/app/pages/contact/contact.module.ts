import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../../material/material.module';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { SharedComponentsModule } from 'src/app/shared-components/shared-components.module';
@NgModule({
  declarations: [ContactComponent, ContactFormComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ContactRoutingModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    SharedComponentsModule,
  ],
})
export class ContactModule {}
