import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { CoreModule } from "@core";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { LayoutModule } from "./layout/layout.module";
import { HomeComponent } from "./pages/home/home.component";
import { CurrentSongComponent } from "./pages/home/current-song/current-song.component";
import { LazyAnimatedIconComponent } from './pages/home/current-song/lazy-animated-icon/lazy-animated-icon.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, CurrentSongComponent, LazyAnimatedIconComponent],
  imports: [
    CoreModule,
    BrowserModule.withServerTransition({ appId: "serverApp" }),
    LayoutModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
