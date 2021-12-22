import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval } from 'rxjs/internal/observable/interval';
import { Song } from 'src/app/models/song.model';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-current-song',
  templateUrl: './current-song.component.html',
  styleUrls: ['./current-song.component.scss'],
})
export class CurrentSongComponent implements OnInit, OnDestroy {
  public song: Song | null = null;
  public lastPlayedSong: Song | null = null;
  public loadingSong: Boolean = false;
  public songPlaying: Boolean = false;
  public timerGoing: Boolean = false;
  constructor(private spotifyService: SpotifyService) {}
  public songProgress : number = 0;
  public songDuration : number = 0;
  public endTime : string = '00:00';
  public currentTime : string = '00:00';
  public audio = new Audio();

  public loadingText = 'Loading'.split("");
  public currentText = "Playing now on my Spotify".split(" ").map((item) => (item.split("")));

  ngOnInit(): void {
    this.loadingSong = true;
    setTimeout(() => {
      this.getCurrentSong();
    }, 500);
  }

  
  ngOnDestroy(): void {
    this.audio.pause();
  }

  private addTimeProgressBar(): void {
    this.timerGoing = true;
    const second = 1;
    const timer$ = interval(1000);
    console.log('timer started')
    let counter = 0;
    const sub = timer$.subscribe((sec) => {
      this.songProgress += second;
      this.currentTime = new Date(this.songProgress * 1000).toTimeString().split(' ')[0].substring(3);

      counter += 1;

      if (this.songProgress >= this.songDuration) {
        sub.unsubscribe();
        setTimeout(() => {
          this.audio.src = '';
          this.songPlaying = false;
          this.getCurrentSong();
        }, 600)
      } else if (counter > 15) {
        this.getCurrentSong();
        counter = 0;
      }
    });

  }

  private getCurrentSong(): void {
    this.spotifyService.getCurrentSong().subscribe(
      (song: Song[]) => {
        console.log(song);
        if (song && song.length && false) {
          // const checkIfAddBar = this.song === null || this.song.name !== song[0].name;
          // this.song = song[0];
          // this.songProgress = this.song.progress / 1000
          // this.songDuration = this.song.duration / 1000
          // this.currentTime = new Date(this.songProgress * 1000).toTimeString().split(' ')[0].substring(3);
          // this.endTime = new Date(this.songDuration * 1000).toTimeString().split(' ')[0].substring(3);

          // if (checkIfAddBar) {
          //   this.audio.pause()
          //   this.audio.src = '';
          //   this.audio = new Audio();
          //   this.addTimeProgressBar();
          //   this.audio.src = this.song.previewUrl;
          // }
          // console.log('ran')
        } else {
          this.checkRecentlyPlayed();
        }
        this.loadingSong = false;
      },
      (err) => {
        this.loadingSong = false;
        console.log(err);
      }
    );
  }

  private checkRecentlyPlayed() : void {
    console.log(this.song)
    this.spotifyService.getRecentlyPlayed().subscribe((recentSongs: Song[]) =>  {
      this.song = recentSongs.length > 0 ? recentSongs[0] : null;
      console.log(this.song)
    });
    console.log(this.song)
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
