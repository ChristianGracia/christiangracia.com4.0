import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects.component';
import { GithubReposComponent } from './github-repos/github-repos.component';
import { SiteComponent } from './websites/site/site.component';
import { WebsitesComponent } from './websites/websites.component';
import { MaterialModule } from '../../material/material.module';

import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    GithubReposComponent,
    WebsitesComponent,
    SiteComponent,
    ProjectsComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ProjectsRoutingModule,
    MatPaginatorModule,
    MatTableModule,
  ],
})
export class ProjectsModule {}
