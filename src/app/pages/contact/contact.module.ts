import { NgModule } from "@angular/core";

import { ContactRoutingModule } from "./contact-routing.module";
import { ContactComponent } from "./contact.component";
import { ContactFormComponent } from "./contact-form/contact-form.component";
import { FormsModule } from "@angular/forms";
import { MaterialModule } from "../../modules/material/material.module";

import { MatLegacyFormFieldModule as MatFormFieldModule } from "@angular/material/legacy-form-field";
import { MatLegacyInputModule as MatInputModule } from "@angular/material/legacy-input";

import { LazySharedModule } from "src/app/modules/lazy-shared/lazy-shared.module";
@NgModule({
  declarations: [ContactComponent, ContactFormComponent],
  imports: [
    MaterialModule,
    ContactRoutingModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    LazySharedModule,
  ],
})
export class ContactModule {}
