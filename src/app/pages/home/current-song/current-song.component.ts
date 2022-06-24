import { Component, OnDestroy, OnInit } from "@angular/core";
import { environment } from "@environments/environment";
import { interval } from "rxjs/internal/observable/interval";
import { Song } from "src/app/models/song.model";
import { SpotifyService } from "src/app/services/spotify.service";
const formatHHMMString = (timestamp: number) => {
  return new Date(timestamp * 1000).toTimeString().split(" ")[0].substring(3);
};
const MAX_SONGS = 50;
@Component({
  selector: "app-current-song",
  templateUrl: "./current-song.component.html",
  styleUrls: ["./current-song.component.scss"],
})
export class CurrentSongComponent implements OnInit, OnDestroy {
  public imagePrefix = environment.spotify.imageUrl;
  public previewUrlPrefix = environment.spotify.previewUrl;
  public song: Song | null = null;
  public recentSongs: Song[] = [];
  public loadingSong: boolean = false;
  public songPlaying: boolean = false;
  public timerGoing: boolean = false;
  public maxSongs = MAX_SONGS;
  public songIndex: number = 0;
  public audio: HTMLMediaElement = new Audio();

  public loadingText = "Loading".split("");
  public currentText = "Playing now on my Spotify"
    .split(" ")
    .map((item) => item.split(""));
  constructor(private spotifyService: SpotifyService) {}

  ngOnInit(): void {
    this.loadingSong = true;

    this.getCurrentSong();
  }

  ngOnDestroy(): void {
    this.audio.pause();
  }

  private addTimeProgressBar(): void {
    this.timerGoing = true;
    const second = 1;
    const timer$ = interval(1000);
    let counter = 0;
    const sub = timer$.subscribe((sec) => {
      if (!this.song?.playedAt || (this.song?.playedAt && this.songPlaying)) {
        this.song.progress += second;
        this.song.progressString = formatHHMMString(this.song.progress);
      }
      counter += 1;

      if (this.song.progress >= this.song.duration) {
        sub.unsubscribe();
        setTimeout(() => {
          this.audio.src = "";
          this.songPlaying = false;
          this.resetSongProgress();
          this.getCurrentSong();
        }, 600);
      } else if (counter > 20) {
        this.getCurrentSong();
        counter = 0;
      }
    });
  }

  private getCurrentSong(): void {
    this.spotifyService.getCurrentSong().subscribe(
      (song: Song[]) => {
        if (song) {
          this.song = song[0];
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
    this.song.progress = 0;
    this.song.duration = 30;
    this.song.progressString = "00:00";
    this.song.durationString = "00:30";
  }

  public skipSong(direction: string): void {
    if (
      (direction === "back" && !this.songIndex) ||
      (direction === "forward" &&
        this.songIndex === this.recentSongs.length - 1)
    ) {
      return;
    }
    this.resetSongProgress();
    if (!this.songIndex && this.recentSongs.length !== this.maxSongs) {
      this.checkRecentlyPlayed(this.maxSongs);
    }

    this.audio.pause();
    this.audio = new Audio();
    this.songIndex = this.songIndex + (direction === "forward" ? 1 : -1);
    this.song = this.recentSongs[this.songIndex];
    this.audio.src = this.song.previewUrl
      ? this.previewUrlPrefix + this.song.previewUrl
      : "";
    if (this.songPlaying) {
      this.audio.play();
    }
  }

  private checkRecentlyPlayed(amount: number = 2): void {
    this.spotifyService
      .getRecentlyPlayed(amount)
      .subscribe((recentSongs: Song[]) => {
        if (!this.song && recentSongs.length) {
          this.song = recentSongs.length ? recentSongs[0] : null;
          this.resetSongProgress();
          this.addTimeProgressBar();
        }
        this.loadingSong = false;
        this.recentSongs = recentSongs;
      });
  }

  public playPreviewOfSong(): void {
    if (!this.audio.src) {
      this.audio.src = this.previewUrlPrefix + this.song?.previewUrl ?? "";
      this.audio.load();
    }
    this.audio[!this.songPlaying ? "play" : "pause"]();
    this.songPlaying = !this.songPlaying;
  }
}
