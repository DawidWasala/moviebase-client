import {Genre} from "../../genres/model/genre";

export class Movie {
  id!: number;
  constructor(
    public name: string,
    public genres: Genre[]
  ) {
  }
}
