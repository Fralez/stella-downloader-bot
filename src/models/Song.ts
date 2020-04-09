import axios, { AxiosResponse } from "axios";

interface ISong {
  id: string;
  url: string;
  title: string;
  artist?: string;
  album?: string;
  cover?: string;
  duration: number;
  bytesSize: number;
}

export class Song implements ISong {
  public id: string;
  public url: string;
  public title: string;
  public artist?: string;
  public album?: string;
  public cover?: string;
  public duration: number;
  public bytesSize: number;

  constructor(song: ISong) {
    this.id = song.id;
    this.url = song.url;
    this.title = song.title;
    this.artist = song.artist;
    this.album = song.album;
    this.cover = song.cover;
    this.duration = song.duration;
    this.bytesSize = song.bytesSize;
  }

  // WIP
  public async download(): Promise<any> {
    const response: AxiosResponse = await axios.get(
      `${process.env.BASE_URL}/song/download?ytUrl=${this.url}&songTitle=${this.title}&artist=${this.artist}&imgUrl=${this.cover}`
    );
  }
}

export async function generateSong(ytUrl: string): Promise<Song> {
  const response: AxiosResponse = await axios.get(
    `${process.env.BASE_URL}/song/info?ytUrl=${ytUrl}`
  );

  const songInfo = response.data.info;

  const song: ISong = {
    id: songInfo.id,
    url: songInfo.url,
    title: songInfo.title,
    artist: songInfo.artist,
    album: songInfo.album,
    cover: songInfo.cover,
    duration: songInfo.duration,
    bytesSize: songInfo.bytes_size,
  };

  return new Song(song);
}
