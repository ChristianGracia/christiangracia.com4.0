import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

interface Section {
  title: string;
  description: string[];
  image: string[];
}

const sections = [{}];
@Component({
  selector: 'app-site',
  templateUrl: './site.component.html',
  styleUrls: ['./site.component.scss'],
})
export class SiteComponent implements OnInit {
  public code : string = '';
  constructor(private spotifyService: SpotifyService) {}

  ngOnInit(): void {
    this.spotifyService.getSpotifyCode().subscribe((data : any)=> {
      this.code = data;
    })
  }
  public openSite(url: string) {
    window.open(url, '_blank');
  }
}
