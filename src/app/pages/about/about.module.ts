import { NgModule } from "@angular/core";
import { AboutRoutingModule } from "./about-routing.module";
import { AboutComponent } from "./about.component";
import { SkillsComponent } from "./components/skills/skills.component";
import { JobHistoryComponent } from "./components/job-history/job-history.component";
import { SideProjectsComponent } from "./components/side-projects/side-projects.component";
import { RecentlyPlayedSongsComponent } from "./components/recently-played-songs/recently-played-songs.component";
import { SiteComponent } from "./components/site/site.component";
import { JobComponent } from "./components/job-history/job/job.component";
import { LazySharedModule } from "src/app/modules/lazy-shared/lazy-shared.module";
import { SharedModule } from "src/app/modules/shared/shared.module";

@NgModule({
  declarations: [
    AboutComponent,
    SkillsComponent,
    JobHistoryComponent,
    SideProjectsComponent,
    RecentlyPlayedSongsComponent,
    SiteComponent,
    JobComponent,
  ],
  imports: [AboutRoutingModule, LazySharedModule, SharedModule],
})
export class AboutModule {}
