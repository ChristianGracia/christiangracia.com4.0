import { NgModule } from "@angular/core";

import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { SpotifyResolver } from "./resolvers/spotify";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    // resolve: {
    //   pageData: SpotifyResolver,
    // },
  },
  {
    path: "about",
    loadChildren: () =>
      import("./pages/about/about.module").then((m) => m.AboutModule),
  },
  {
    path: "projects",
    loadChildren: () =>
      import("./pages/projects/projects.module").then((m) => m.ProjectsModule),
  },
  {
    path: "contact",
    loadChildren: () =>
      import("./pages/contact/contact.module").then((m) => m.ContactModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
