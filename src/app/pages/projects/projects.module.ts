import { NgModule } from "@angular/core";
import { ProjectsRoutingModule } from "./projects-routing.module";
import { ProjectsComponent } from "./projects.component";
import { GithubReposComponent } from "./components/github-repos/github-repos.component";
import { SiteComponent } from "./components/websites/site/site.component";
import { WebsitesComponent } from "./components/websites/websites.component";
import { MaterialModule } from "../../material/material.module";
import { RepoCommitModalComponent } from "./modals/repo-commit-modal/repo-commit-modal.component";
import { ViewSiteModalComponent } from "./modals/view-site-modal/view-site-modal.component";

import { SharedModule } from "src/app/shared/shared.module";

import { SafePipe } from "./services/safe.pipe";
import { MatCarouselModule } from "@ngbmodule/material-carousel";

@NgModule({
  declarations: [
    GithubReposComponent,
    WebsitesComponent,
    SiteComponent,
    ProjectsComponent,
    RepoCommitModalComponent,
    ViewSiteModalComponent,
    SafePipe,
  ],
  imports: [
    MatCarouselModule.forRoot(),
    MaterialModule,
    ProjectsRoutingModule,
    SharedModule,
  ],
  entryComponents: [RepoCommitModalComponent, ViewSiteModalComponent],
})
export class ProjectsModule {}
