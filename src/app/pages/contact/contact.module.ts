import { NgModule } from "@angular/core";

import { ContactRoutingModule } from "./contact-routing.module";
import { ContactComponent } from "./contact.component";
import { ContactFormComponent } from "./contact-form/contact-form.component";
import { FormsModule } from "@angular/forms";
import { MaterialModule } from "../../material/material.module";

import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";

import { SharedModule } from "src/app/shared/shared.module";
@NgModule({
  declarations: [ContactComponent, ContactFormComponent],
  imports: [
    MaterialModule,
    ContactRoutingModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    SharedModule,
  ],
})
export class ContactModule {}
