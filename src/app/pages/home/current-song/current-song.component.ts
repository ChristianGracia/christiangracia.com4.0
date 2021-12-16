import { Component, OnInit } from '@angular/core';
import { Song } from 'src/app/models/song.model';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-current-song',
  templateUrl: './current-song.component.html',
  styleUrls: ['./current-song.component.scss']
})
export class CurrentSongComponent implements OnInit {
  public song: Song | null = null;
  public loadingSong: Boolean = false;
  constructor(private spotifyService: SpotifyService) { }
  public songProgress = 0;

  ngOnInit(): void {
    setTimeout(() => {
      this.getCurrentSong();
    }, 500)
  }

  private getCurrentSong(): void {
    this.loadingSong = true;
    this.spotifyService.getCurrentSong().subscribe(
      (song: Song[]) => {
        console.log(song);
        if (song.length) {
          this.song = song[0];
          this.songProgress = (this.song.progress / this.song.duration) * 100
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
