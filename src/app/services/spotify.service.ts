import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from "@environments/environment";
import { Song } from '../models/song.model';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  constructor(private http: HttpClient) {}

  public getCurrentSong() {
    return this.http.get<Song[]>(environment.apiUrl + '/spotify/currently-playing').pipe(
      map((data: Song[]) => {
        return data;
      })
    );
  }
  public getRecentlyPlayed() {
    return this.http.get<Song[]>(environment.apiUrl + '/spotify/recently-played').pipe(
      map((data: Song[]) => {
        return data;
      })
    );
  }
}
