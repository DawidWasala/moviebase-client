import { Component, OnInit } from '@angular/core';
import {MovieService} from "../service/movie.service";
import {Movie} from "../model/movie";
import {Observable} from "rxjs";
import {GenreService} from "../../genres/service/genre.service";
import {Genre} from "../../genres/model/genre";
import {Router} from "@angular/router";
import Swal from "sweetalert2";

@Component({
  selector: 'app-add',
  templateUrl: './movie-add.component.html',
  styleUrls: ['./movie-add.component.css']
})

export class MovieAddComponent implements OnInit {

  model = new Movie('', [])
  submitted = false;
  genres! : Observable<Genre[]>

  constructor(
    private movieService: MovieService,
    private genreService: GenreService,
    private router: Router
  )
  {}

  ngOnInit() {
    this.genres = this.genreService.getGenres();
  }

  onSubmit() {
    this.submitted = true;
    this.createMovie();
  }

  private createMovie() {
    if (this.model) {
      this.movieService.create(this.model).subscribe({
        next: () => {
          this.router.navigate(['/movies'])
          Swal.fire('Whooa!', 'Movie created successfully', 'success');
        },
        error: error => {
          Swal.fire('Oops', 'An error occurred', 'error');
        }
      })
    }
  }
}
