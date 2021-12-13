import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects.component';
import { GithubReposComponent } from './components/github-repos/github-repos.component';
import { SiteComponent } from './components/websites/site/site.component';
import { WebsitesComponent } from './components/websites/websites.component';
import { MaterialModule } from '../../material/material.module';

import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { SharedComponentsModule } from 'src/app/shared-components/shared-components.module';

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
    SharedComponentsModule,
  ],
})
export class ProjectsModule {}
