import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Song } from '../models/song.model';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  constructor(private http: HttpClient) {}

  public getCurrentSong() {
    return this.http.get<Song[]>(environment.apiUrl + '/spotify/login').pipe(
      map((data: Song[]) => {
        return data;
      })
    );
  }
  public getCurrentSong2() {
    return this.http.get<Song[]>(environment.apiUrl + '/spotify/callback').pipe(
      map((data: Song[]) => {
        return data;
      })
    );
  }
}
