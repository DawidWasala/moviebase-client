import {Movie} from "../../movie/model/movie";

export class Genre {
  id!: number;
  constructor(
    public name: string,
    public movies: Movie[]
  ) {
  }

}
