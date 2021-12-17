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
  public songPlaying: Boolean = false;
  constructor(private spotifyService: SpotifyService) {}
  public songProgress : number = 0;
  public songDuration : number = 0;
  public endTime : string = '00:00';
  public currentTime : string = '00:00';
  public audio = new Audio();

  public loadingText = 'Loading'.split("");

  ngOnInit(): void {
    this.loadingSong = true;
    setTimeout(() => {
      this.getCurrentSong();
    }, 500);
  }

  private addTimeProgressBar(): void {
    const second = 1;
    const timer$ = interval(1000);
    console.log('timer started')
    let counter = 0;
    const sub = timer$.subscribe((sec) => {
      this.songProgress += second;
      this.currentTime = new Date(this.songProgress * 1000).toTimeString().split(' ')[0].substring(3);

      counter += 1;
      if (counter > 15) {
        this.getCurrentSong();
        counter = 0;
      }
      if (this.songProgress >= this.songDuration) {
        sub.unsubscribe();
        setTimeout(() => {
          this.getCurrentSong();
        }, 600)
      }
    });

  }

  private getCurrentSong(): void {
    this.spotifyService.getCurrentSong().subscribe(
      (song: Song[]) => {
        console.log(song);
        if (song && song.length) {
          const checkIfLoaded = this.song === null;
          this.song = song[0];
          this.songProgress = this.song.progress / 1000
          this.songDuration = this.song.duration / 1000
          this.currentTime = new Date(this.songProgress * 1000).toTimeString().split(' ')[0].substring(3);
          this.endTime = new Date(this.songDuration * 1000).toTimeString().split(' ')[0].substring(3);

          if (checkIfLoaded) {
            this.addTimeProgressBar();
          }
          console.log('ran')
          this.loadingSong = false;
        } else {
          this.song = null;
        }
        this.loadingSong = false;
      },
      (err) => {
        this.loadingSong = false;
        console.log(err);
      }
    );
  }

  public playPreviewOfSong() : void {
    if (!this.songPlaying) {
      if (!this.audio.src) {
        this.audio.src = this.song?.previewUrl ?? '';
        this.audio.load();
        this.audio.play();
      } else {
        this.audio.play();
      }
      this.songPlaying = true;
    } else {
      this.audio.pause();
      this.songPlaying = false;
    }
  }
}
