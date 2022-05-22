export class Song {
  constructor(
    public progress: number,
    public duration: number,
    public artist: string,
    public name: string,
    public images: string[],
    public previewUrl: string,
    public artistUrl: string,
    public songUrl: string,
    public albumUrl: string,
    public playedAt?: string,
    public isPlaying: Boolean = false
  ) {}
}
