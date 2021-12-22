import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval } from 'rxjs/internal/observable/interval';
import { Song } from 'src/app/models/song.model';
import { SpotifyService } from 'src/app/services/spotify.service';
import { formatDateAndTime } from "src/app/util/dateMethods";

@Component({
  selector: 'app-current-song',
  templateUrl: './current-song.component.html',
  styleUrls: ['./current-song.component.scss'],
})
export class CurrentSongComponent implements OnInit, OnDestroy {
  public song: Song | null = null;
  public recentSongs: Song[] = [];
  public loadingSong: Boolean = false;
  public songPlaying: Boolean = false;
  public timerGoing: Boolean = false;
  constructor(private spotifyService: SpotifyService) {}
  public songProgress : number = 0;
  public songDuration : number = 0;
  public songIndex : number = 0;
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
      if (!this.song?.playedAt || (this.song?.playedAt && this.songPlaying)) {
        this.songProgress += second;
      }
      this.currentTime = new Date(this.songProgress * 1000).toTimeString().split(' ')[0].substring(3);

      counter += 1;

      if (this.songProgress >= this.songDuration) {
        console.log('timer ended')
        sub.unsubscribe();
        setTimeout(() => {
          this.audio.src = '';
          this.songPlaying = false;
          this.getCurrentSong();
        }, 600)
      } else if (counter > 20) {
        this.getCurrentSong();
        counter = 0;
      }
    });

  }

  private getCurrentSong(): void {
    this.spotifyService.getCurrentSong().subscribe(
      (song: Song[]) => {
        console.log(song);
        if (song && song.length && this.songIndex === 0) {
          const checkIfAddBar = this.song === null || this.song.name !== song[0].name;
          this.song = song[0];
          this.songProgress = this.song.progress / 1000
          this.songDuration = this.song.duration / 1000
          this.currentTime = new Date(this.songProgress * 1000).toTimeString().split(' ')[0].substring(3);
          this.endTime = new Date(this.songDuration * 1000).toTimeString().split(' ')[0].substring(3);

          if (checkIfAddBar) {
            this.audio.pause()
            this.audio.src = '';
            this.audio = new Audio();
            this.addTimeProgressBar();
            this.audio.src = this.song.previewUrl;
          }
          this.loadingSong = false;
        }
        if (this.recentSongs.length === 0) {
          setTimeout(() => this.checkRecentlyPlayed(), 500);
        }
      },
      (err) => {
        this.loadingSong = false;
        console.log(err);
      }
    );
  }

  public skipSong(direction: string) : void {
    if (
      (direction === 'back' && this.songIndex === 0)
      || (direction === 'forward' && this.songIndex === this.recentSongs.length - 1)
    ) {
      return;
    }
    this.songProgress = 0;
    this.songDuration = 30;
    this.currentTime = new Date(this.songProgress * 1000).toTimeString().split(' ')[0].substring(3);
    this.endTime = new Date(this.songDuration * 1000).toTimeString().split(' ')[0].substring(3);
    this.audio.pause()
    this.audio.src = '';
    this.audio = new Audio();
    this.songIndex = this.songIndex + (direction === 'forward' ? 1 : -1);
    this.song = this.recentSongs[this.songIndex];
    this.audio.src = this.song.previewUrl ? this.song.previewUrl : '';
    if (this.songPlaying) {
      this.audio.play();
    }
  }

  private checkRecentlyPlayed() : void {
    this.spotifyService.getRecentlyPlayed().subscribe((recentSongs: Song[]) =>  {
      if (!this.song && recentSongs.length > 0) {
        this.song = recentSongs.length > 0 ? recentSongs[0] : null;
        this.songProgress = 0;
        this.songDuration = 30;
        this.currentTime = new Date(this.songProgress * 1000).toTimeString().split(' ')[0].substring(3);
        this.endTime = new Date(this.songDuration * 1000).toTimeString().split(' ')[0].substring(3);
        this.addTimeProgressBar();
      }
      this.loadingSong = false;
      this.recentSongs = recentSongs;
      console.log(recentSongs);
    });
  }
  public formatDate(date: string) {
    return formatDateAndTime(date);
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
