import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { environment } from "@environments/environment";
import { interval } from "rxjs/internal/observable/interval";
import { SpotifyService } from "src/app/services/spotify.service";
import { Song } from "src/app/types/song";
import { CURRENTLY_PLAYING_TEXT } from "src/app/constants/index";
import {
  FAST_FORWARD_ICON,
  REWIND_ICON,
  PAUSE_ICON,
  PLAY_ICON,
} from "src/app/constants/icons";

const formatHHMMString = (timestamp: number) => {
  return new Date(timestamp * 1000).toTimeString().split(" ")[0].substring(3);
};
const MAX_SONGS = 51;

const { imageUrl, previewUrl } = environment.spotify;
@Component({
  selector: "app-current-song",
  templateUrl: "./current-song.component.html",
  styleUrls: ["./current-song.component.scss"],
})
export class CurrentSongComponent implements OnDestroy, OnInit {
  public fastForwardIcon = FAST_FORWARD_ICON;
  public rewindIcon = REWIND_ICON;
  public playIcon = PLAY_ICON;
  public pauseIcon = PAUSE_ICON;
  public imagePrefix = imageUrl;
  public previewUrlPrefix = previewUrl;
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
  public currentSong = this.allSongs?.length
    ? this.allSongs[this.songIndex]
    : null;

  public currentText = CURRENTLY_PLAYING_TEXT;

  constructor(
    private route: ActivatedRoute,
    private spotifyService: SpotifyService
  ) {}

  ngOnDestroy(): void {
    this.audio.pause();
  }
  ngOnInit() {
    if (
      this.route.snapshot.data.pageData?.currentlyPlaying &&
      this.route.snapshot.data.pageData?.recentSongs
    ) {
      const { currentlyPlaying, recentSongs } =
        this.route.snapshot.data.pageData;
      this.currentlyPlayingSong = currentlyPlaying?.[0] ?? null;
      this.recentSongs = recentSongs ?? [];
      this.allSongs = [
        ...(this.currentlyPlayingSong ? [this.currentlyPlayingSong] : []),
        ...this.recentSongs,
      ];

      if (this.allSongs.length) {
        this.currentSong = this.allSongs[0];
        if (this.currentlyPlayingSong) {
          this.addTimeProgressBar();
        } else {
          this.checkRecentlyPlayed(2);
        }
      }
    } else {
      this.getCurrentSong();
    }
  }

  private addTimeProgressBar(): void {
    if (!this.timerGoing) {
      this.timerGoing = true;
      const second = 1;
      const timer$ = interval(1000);
      let counter = 0;
      const sub = timer$.subscribe((sec) => {
        const songFinishedCheck =
          this.currentSong.progress >= this.currentSong.duration;
        if (songFinishedCheck || !this.currentSong.isPlaying) {
          sub.unsubscribe();
          this.currentSong.isPlaying = false;
          this.timerGoing = false;
          if (songFinishedCheck) {
            this.currentSong.isPlaying = false;
            this.resetSongProgress();
          }
        } else {
          counter += 1;
          this.currentSong.progress += second;
          this.currentSong.progressString = formatHHMMString(
            this.currentSong.progress
          );
          this.progress =
            (this.currentSong.progress / this.currentSong.duration) * 100;

          if (counter > 20 && this.currentSong.progress > 30) {
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
            this.currentSong = this.allSongs[0];
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
    this.currentSong.progress = 0;
    this.currentSong.duration = 30;
    this.currentSong.progressString = "00:00";
    this.currentSong.durationString = "00:30";
    this.progress = 0;
  }

  public skipSong(direction: number): void {
    const newIndex = direction + this.songIndex;
    if (newIndex < 0 || newIndex > this.allSongs.length - 1) {
      return;
    }
    this.audio.pause();
    this.audio = new Audio();
    this.resetSongProgress();
    this.currentSong.isPlaying = false;
    this.songIndex = newIndex;
    this.currentSong = this.allSongs[this.songIndex];
    if (this.songIndex >= 1 && this.allSongs.length < this.maxSongs - 1) {
      this.checkRecentlyPlayed(this.maxSongs - 1);
    }
    this.setAudioSrc();
    if (this.songPlaying) {
      this.currentSong.isPlaying = true;
      this.audio.play();
      this.addTimeProgressBar();
    }
  }

  private checkRecentlyPlayed(amount: number = 1): void {
    this.loadingRecentlyPlayed = true;
    if (this.recentSongs.length !== this.maxSongs - 1) {
      this.spotifyService
        .getRecentlyPlayed(amount)
        .subscribe((recentSongs: Song[]) => {
          if (recentSongs.length) {
            this.recentSongs = recentSongs;
            if (!this.allSongs.length) {
              this.currentSong = this.recentSongs[0];
            }
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

    this.songPlaying = !this.songPlaying;
    this.audio[this.songPlaying ? "play" : "pause"]();

    if (this.songPlaying && !this.timerGoing) {
      this.currentSong.isPlaying = true;
      this.addTimeProgressBar();
    }
  }

  private setAudioSrc(): void {
    this.audio.src = this.previewUrlPrefix + this.currentSong.preview;
  }
}
