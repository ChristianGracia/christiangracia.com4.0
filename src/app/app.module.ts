import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { CoreModule } from "@core";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { HomeComponent } from "./pages/home/home.component";
import { CurrentSongComponent } from "./pages/home/current-song/current-song.component";
import { AnimatedIconComponent } from "./pages/home/current-song/lazy-animated-icon/lazy-animated-icon.component";
import { LayoutModule } from "src/app/layout/layout.module";
import { SpotifyService } from "./services/spotify.service";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CurrentSongComponent,
    AnimatedIconComponent,
  ],
  imports: [
    CoreModule,
    LayoutModule,
    BrowserModule.withServerTransition({ appId: "serverApp" }),
    AppRoutingModule,
  ],

  providers: [SpotifyService],
  bootstrap: [AppComponent],
})
export class AppModule {}
