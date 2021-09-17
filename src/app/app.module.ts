import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from './material.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AppRoutingModule } from './app-routing.module';
import { SideBarComponent } from './navigation/side-bar/side-bar.component';
import { HeaderComponent } from './navigation/header/header.component';

@NgModule({
  declarations: [AppComponent, HomePageComponent, SideBarComponent, HeaderComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
