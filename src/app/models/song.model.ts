export class Song {
  constructor(
    public progress: number = 0,
    public duration: number = 0,
    public artist: string,
    public name: string,
    public images: string[],
    public previewUrl: string,
    public artistUrl: string,
    public songUrl: string,
    public albumUrl: string,
    public playedAt?: string,
    public progressString: string = "00:00",
    public durationString: string = "00:00",
    public isPlaying: Boolean = false
  ) {}
}
