import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { SharedComponentsModule } from 'src/app/shared-components/shared-components.module';
import { MaterialModule } from '../../material/material.module';
import { SkillsComponent } from './components/skills/skills.component';
import { JobHistoryComponent } from './components/job-history/job-history.component';
import { SideProjectsComponent } from './components/side-projects/side-projects.component';
@NgModule({
  declarations: [
    AboutComponent,
    SkillsComponent,
    JobHistoryComponent,
    SideProjectsComponent,
  ],
  imports: [
    CommonModule,
    AboutRoutingModule,
    SharedComponentsModule,
    MaterialModule,
  ],
})
export class AboutModule {}
