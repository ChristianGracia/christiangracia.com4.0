import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { CoreModule } from "@core";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { HomeComponent } from "./pages/home/home.component";
import { CurrentSongComponent } from "./pages/home/current-song/current-song.component";
import { AnimatedIconComponent } from "./pages/home/current-song/lazy-animated-icon/lazy-animated-icon.component";
import { LayoutModule } from "src/app/layout/layout.module";
import { SpotifyResolver } from "./resolvers/spotify";
import { SpotifyService } from "./services/spotify.service";
import { SanitizedHtmlPipe } from "./pipes/sanitized-html.pipe";
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CurrentSongComponent,
    AnimatedIconComponent,
  ],
  imports: [
    LayoutModule,
    CoreModule,
    BrowserModule.withServerTransition({ appId: "serverApp" }),
    AppRoutingModule,
  ],
  providers: [SpotifyService, SpotifyResolver],
  bootstrap: [AppComponent],
})
export class AppModule {}
