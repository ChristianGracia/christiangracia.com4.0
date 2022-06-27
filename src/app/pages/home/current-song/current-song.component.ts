import { Component, OnDestroy, OnInit } from "@angular/core";
import { environment } from "@environments/environment";
import { interval } from "rxjs/internal/observable/interval";
import { Song } from "src/app/models/song.model";
import { SpotifyService } from "src/app/services/spotify.service";
const formatHHMMString = (timestamp: number) => {
  return new Date(timestamp * 1000).toTimeString().split(" ")[0].substring(3);
};
const MAX_SONGS = 51;
@Component({
  selector: "app-current-song",
  templateUrl: "./current-song.component.html",
  styleUrls: ["./current-song.component.scss"],
})
export class CurrentSongComponent implements OnInit, OnDestroy {
  public imagePrefix = environment.spotify.imageUrl;
  public previewUrlPrefix = environment.spotify.previewUrl;
  public currentlyPlayingSong: Song | null = null;
  public allSongs: Song[] = [];
  public recentSongs: Song[] = [];
  public loadingSong: boolean = false;
  public loadingRecentlyPlayed: boolean = false;
  public songPlaying: boolean = false;
  public timerGoing: boolean = false;
  public maxSongs = MAX_SONGS;
  public songIndex: number = 0;
  public audio: HTMLMediaElement = new Audio();
  public progress: number = 0;

  public loadingText = "Loading".split("");
  public currentText = "Playing now on my Spotify"
    .split(" ")
    .map((item) => item.split(""));
  constructor(private spotifyService: SpotifyService) {}

  ngOnInit(): void {
    this.getCurrentSong();
  }

  ngOnDestroy(): void {
    this.audio.pause();
  }

  private addTimeProgressBar(): void {
    console.log("checking if add");
    if (!this.timerGoing) {
      console.log("starting");
      this.timerGoing = true;
      const second = 1;
      const timer$ = interval(1000);

      let counter = 0;
      const sub = timer$.subscribe((sec) => {
        const songFinishedCheck =
          this.allSongs[this.songIndex].progress >=
          this.allSongs[this.songIndex].duration;
        if (songFinishedCheck || !this.allSongs[this.songIndex].isPlaying) {
          console.log("ended");
          sub.unsubscribe();
          this.allSongs[this.songIndex].isPlaying = false;
          this.timerGoing = false;
          if (songFinishedCheck) {
            this.songPlaying = false;
            this.resetSongProgress();
          }
        } else {
          counter += 1;
          this.allSongs[this.songIndex].progress += second;
          this.allSongs[this.songIndex].progressString = formatHHMMString(
            this.allSongs[this.songIndex].progress
          );
          this.progress =
            (this.allSongs[this.songIndex].progress /
              this.allSongs[this.songIndex].duration) *
            100;

          if (counter > 20 && this.allSongs[this.songIndex].progress > 30) {
            this.getCurrentSong();
            counter = 0;
          }
        }
      });
    }
  }

  private getCurrentSong(): void {
    this.loadingSong = true;
    this.spotifyService.getCurrentSong().subscribe(
      (song: Song[]) => {
        if (song) {
          this.currentlyPlayingSong = song[0];
          this.allSongs = [this.currentlyPlayingSong, ...this.recentSongs];
          if (this.songIndex === 0) {
            this.allSongs[0].isPlaying = true;
            this.addTimeProgressBar();
          }
        }

        this.loadingSong = false;

        if (!this.recentSongs.length) {
          this.checkRecentlyPlayed();
        }
      },
      (err) => {
        this.loadingSong = false;
        console.log(err);
      }
    );
  }

  private resetSongProgress(): void {
    this.allSongs[this.songIndex].progress = 0;
    this.allSongs[this.songIndex].duration = 30;
    this.allSongs[this.songIndex].progressString = "00:00";
    this.allSongs[this.songIndex].durationString = "00:30";
    this.progress = 0;
  }

  public skipSong(direction: string): void {
    if (
      (direction === "back" && !this.songIndex) ||
      (direction === "forward" && this.songIndex === this.allSongs.length - 1)
    ) {
      return;
    }
    this.audio.pause();
    this.audio = new Audio();
    this.resetSongProgress();
    this.allSongs[this.songIndex].isPlaying = false;
    this.songIndex = this.songIndex + (direction === "forward" ? 1 : -1);
    if (this.songIndex >= 1 && this.allSongs.length < this.maxSongs - 1) {
      this.checkRecentlyPlayed(this.maxSongs - 1);
    }
    this.setAudioSrc();
    if (this.songPlaying) {
      this.allSongs[this.songIndex].isPlaying = true;
      this.audio.play();
      this.addTimeProgressBar();
    }
  }

  private checkRecentlyPlayed(amount: number = 2): void {
    this.loadingRecentlyPlayed = true;
    if (this.recentSongs.length !== this.maxSongs - 1) {
      this.spotifyService
        .getRecentlyPlayed(amount)
        .subscribe((recentSongs: Song[]) => {
          if (recentSongs.length) {
            this.recentSongs = recentSongs;
            this.allSongs = [
              ...(this.currentlyPlayingSong ? [this.currentlyPlayingSong] : []),
              ...this.recentSongs,
            ];
          }
          this.loadingRecentlyPlayed = false;
        });
    }
  }

  public playPreviewOfSong(): void {
    if (!this.audio.src) {
      this.setAudioSrc();
      this.audio.load();
      this.resetSongProgress();
    }
    this.audio[!this.songPlaying ? "play" : "pause"]();
    this.songPlaying = !this.songPlaying;
    if (this.songPlaying && !this.timerGoing) {
      this.allSongs[this.songIndex].isPlaying = true;
      this.addTimeProgressBar();
    } else {
      this.allSongs[this.songIndex].isPlaying = false;
    }
  }

  private setAudioSrc(): void {
    this.audio.src =
      this.previewUrlPrefix + this.allSongs[this.songIndex].previewUrl;
  }
}
