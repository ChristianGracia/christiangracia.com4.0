import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs/internal/observable/interval';
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
  public songProgress : number = 0;
  public songDuration : number = 0;
  public endTime : string= '00:00';

  public loadingText = 'Loading'.split("");

  ngOnInit(): void {
    setTimeout(() => {
      this.getCurrentSong();
    }, 500);
  }

  private addTimeProgressBar(): void {
    const fifthOfSecond = 1 / 5;
    const timer$ = interval(200);
    const sub = timer$.subscribe((unit) => {
      this.songProgress += fifthOfSecond;
      if (this.songProgress >= this.songDuration) {
        sub.unsubscribe();
      }
    });

  }

  private getCurrentSong(): void {
    this.loadingSong = true;
    // testing
    // this.song = {
    //   progress: 2010,
    //   duration: 59000,
    //   artist: 'Drake',
    //   name: 'Knife Talk (with 21 Savage ft. Project Pat)',
    //   images: [
    //     'https://i.scdn.co/image/ab67616d0000b273cd945b4e3de57edd28481a3f',

    //     'https://i.scdn.co/image/ab67616d00001e02cd945b4e3de57edd28481a3f',

    //     'https://i.scdn.co/image/ab67616d00004851cd945b4e3de57edd28481a3f',
    //   ],
    // };

    this.spotifyService.getCurrentSong().subscribe(
      (song: Song[]) => {
        console.log(song);
        if (song && song.length) {
          this.song = song[0];
          this.songProgress = this.song.progress / 1000
          this.songDuration = this.song.duration / 1000
          this.endTime = new Date(this.songDuration * 1000).toTimeString().split(' ')[0].substring(3);
          this.addTimeProgressBar();
          this.loadingSong = false;
        }
        this.loadingSong = false;
      },
      (err) => {
        this.loadingSong = false;
        console.log(err);
      }
    );
  }
}
