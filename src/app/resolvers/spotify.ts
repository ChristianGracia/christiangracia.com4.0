// import { Injectable } from "@angular/core";

// import { Resolve } from "@angular/router";
// import { forkJoin } from "rxjs";
// import { map } from "rxjs/operators";
// import { Observable } from "rxjs/internal/Observable";
// import { SpotifyService } from "../services/spotify.service";
// import { Song } from "../types/song";

// interface ISongData {
//   currentlyPlaying: Song[];
//   recentSongs: Song[];
// }

// @Injectable()
// export class SpotifyResolver implements Resolve<ISongData> {
//   constructor(private spotifyService: SpotifyService) {}

//   resolve(): Observable<ISongData> {
//     return forkJoin([
//       this.spotifyService.getCurrentSong(),
//       this.spotifyService.getRecentlyPlayed(1),
//     ]).pipe(
//       map((results: Song[][]) => ({
//         currentlyPlaying: results[0],
//         recentSongs: results[1],
//       }))
//     );
//   }
// }
