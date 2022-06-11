import { Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { Song } from "src/app/models/song.model";
import { SpotifyService } from "src/app/services/spotify.service";
import { environment } from "@environments/environment";

@Component({
  selector: "app-recently-played-songs",
  templateUrl: "./recently-played-songs.component.html",
  styleUrls: ["./recently-played-songs.component.scss"],
})
export class RecentlyPlayedSongsComponent implements OnInit {
  public loadingSongs: Boolean = false;
  public songs: Song[] = [];
  public pageSize = 5;
  public displayedColumns: string[] = [
    "images",
    "name",
    "artist",
    "previewUrl",
    "playedAt",
  ];
  public songPlaying: Boolean = false;
  public audio = new Audio();

  public imagePrefix = environment.spotify.imageUrl;
  public previewUrlPrefix = environment.spotify.previewUrl;

  @ViewChild(MatPaginator, { static: false }) paginator: any;

  public dataSource: MatTableDataSource<any> = new MatTableDataSource();
  constructor(private spotifyService: SpotifyService) {}

  ngOnInit(): void {
    this.getRecentlyPlayed();
  }

  private getRecentlyPlayed(): void {
    this.loadingSongs = true;
    this.spotifyService.getRecentlyPlayed().subscribe(
      (songs: Song[]) => {
        this.dataSource = new MatTableDataSource<any>(songs);
        setTimeout(() => (this.dataSource.paginator = this.paginator), 100);
        this.songs = songs;
        this.loadingSongs = false;
      },
      (err) => {
        this.loadingSongs = false;
        console.log(err);
      }
    );
  }

  public playPreviewOfSong(song: Song): void {
    const index = 0;
    if (!song.isPlaying) {
      this.audio.src = this.previewUrlPrefix + song.previewUrl;
      this.audio.load();
      this.songs.forEach((item) => {
        if (item.previewUrl === song.previewUrl) {
          item.isPlaying = true;
        } else {
          item.isPlaying = false;
        }
      });
      this.audio.play();
    } else {
      this.audio.pause();
      this.songs.forEach((item) => (item.isPlaying = false));
    }
  }

  ngOnDestroy(): void {
    this.audio.pause();
  }
}
