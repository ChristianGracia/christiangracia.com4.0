import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { CoreModule } from "@core";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { HomeComponent } from "./pages/home/home.component";
import { CurrentSongComponent } from "./pages/home/current-song/current-song.component";
import { AnimatedIconComponent } from "./pages/home/current-song/lazy-animated-icon/lazy-animated-icon.component";
import { UtilService } from "./services/util.service";
import { LayoutModule } from "src/app/layout/layout.module";
// import { ImageLoaderModule } from "./modules/image-loader/image-loader.module";
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CurrentSongComponent,
    AnimatedIconComponent,
  ],
  imports: [
    CoreModule,
    BrowserModule.withServerTransition({ appId: "serverApp" }),
    // ImageLoaderModule.forRoot(),
    LayoutModule,
    AppRoutingModule,
  ],
  providers: [UtilService],
  bootstrap: [AppComponent],
})
export class AppModule {}
