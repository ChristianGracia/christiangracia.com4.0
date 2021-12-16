import { Component, OnInit } from '@angular/core';
import { Song } from 'src/app/models/song.model';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-current-song',
  templateUrl: './current-song.component.html',
  styleUrls: ['./current-song.component.scss'],
})
export class CurrentSongComponent implements OnInit {
  public song: Song | null = null;
  public loadingSong: Boolean = false;
  constructor(private spotifyService: SpotifyService) {}
  public songProgress = 0;

  ngOnInit(): void {
    setTimeout(() => {
      this.getCurrentSong();
    }, 500);
  }

  private getCurrentSong(): void {
    this.song = {
      progress: 232069,
      duration: 242965,
      artist: 'Drake',
      name: 'Knife Talk (with 21 Savage ft. Project Pat)',
      images: [
        'https://i.scdn.co/image/ab67616d0000b273cd945b4e3de57edd28481a3f',

        'https://i.scdn.co/image/ab67616d00001e02cd945b4e3de57edd28481a3f',

        'https://i.scdn.co/image/ab67616d00004851cd945b4e3de57edd28481a3f',
      ],
    };
    this.loadingSong = false;
    // this.spotifyService.getCurrentSong().subscribe(
    //   (song: Song[]) => {
    //     console.log(song);
    //     if (song.length) {
    //       this.song = song[0];
    //       this.songProgress = (this.song.progress / this.song.duration) * 100
    //     }
    //     this.loadingSong = false;
    //   },
    //   (err) => {
    //     this.loadingSong = false;
    //     console.log(err);
    //   }
    // );
  }
}
