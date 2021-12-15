import { Component, OnInit } from '@angular/core';
import { LocationData } from 'src/app/models/location-data.model';
import { Song } from 'src/app/models/song.model';
import { EmailService } from 'src/app/services/email.service';
import { LocationService } from 'src/app/services/location.service';
import { SpotifyService } from 'src/app/services/spotify.service';
import { RoutingService } from '../../services/routing.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(
    private routingService: RoutingService,
    private locationService: LocationService,
    private emailService: EmailService,
    private spotifyService: SpotifyService
  ) {}

  ngOnInit(): void {
    setTimeout(() => this.getCurrentSong(), 2000);
  }
  private getCurrentSong(): void {
    this.spotifyService.getCurrentSong().subscribe(
      (song: Song[]) => {
        console.log(song);
      },
      (err) => {
        console.log(err);
        console.log(err.url); // here is the redirect url
        // window.location.href = err.url;
      }
    );
  }

  public goToAboutPage(): void {
    this.locationService
      .getLocationJSON()
      .subscribe((locationData: LocationData) => {
        this.emailService.sendSiteVisitEmail(locationData).subscribe(() => {});
      });
    this.routingService.navigateToAbout();
  }
}
