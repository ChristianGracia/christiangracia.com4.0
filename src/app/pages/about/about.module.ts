import { NgModule } from '@angular/core';
import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { SharedComponentsModule } from 'src/app/shared-components/shared-components.module';
import { MaterialModule } from '../../material/material.module';
import { SkillsComponent } from './components/skills/skills.component';
import { JobHistoryComponent } from './components/job-history/job-history.component';
import { SideProjectsComponent } from './components/side-projects/side-projects.component';
import { RecentlyPlayedSongsComponent } from './components/recently-played-songs/recently-played-songs.component';
@NgModule({
  declarations: [
    AboutComponent,
    SkillsComponent,
    JobHistoryComponent,
    SideProjectsComponent,
    RecentlyPlayedSongsComponent,
  ],
  imports: [
    AboutRoutingModule,
    SharedComponentsModule,
    MaterialModule,
  ],
})
export class AboutModule {}
