export class Song {
  constructor(
    public progress: number,
    public duration: number,
    public artist: string,
    public name: string,
    public images: string[],
    public preview_url: string
  ) {}
}
