import {Component, Input, OnInit} from '@angular/core';
import {MovieService} from "../service/movie.service";
import {Movie} from "../model/movie";
import {first, Observable} from "rxjs";
import {Genre} from "../../genres/model/genre";
import {ActivatedRoute, Router} from "@angular/router";
import {GenreService} from "../../genres/service/genre.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import Swal from 'sweetalert2/dist/sweetalert2.js'

@Component({
  selector: 'app-edit',
  templateUrl: './movie-edit.component.html',
  styleUrls: ['./movie-edit.component.css']
})

export class MovieEditComponent implements OnInit {

  form!: FormGroup;
  id!: number
  model = new Movie('', [])
  submitted = false;
  genres! : Observable<Genre[]>

  constructor(
    private formBuilder: FormBuilder,
    private movieService: MovieService,
    private genreService: GenreService,
    private router: Router,
    private route: ActivatedRoute
  )
  {}

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.genres = this.genreService.getGenres();

    this.form = this.formBuilder.group({
      name: [''],
      genres: [[]]
    })
    this.movieService.getMovie(this.id)
      .pipe(first())
      .subscribe(x => {
        this.form.patchValue(x)
      })
  }

  onSubmit() {
    this.submitted = true;
    this.editMovie();
  }

  get f() { return this.form.controls; }

  private editMovie() {
    this.movieService.update(this.id, this.form.value)
      .subscribe({
        next: () => {
          this.router.navigate(['/movies'])
          Swal.fire('Whooa!', 'Movie updated successfully', 'success');
        },
        error: error => {
          Swal.fire('Oops', 'An error occurred. (You need to select at least one genre)', 'error');
        }
      }
    );
  }
}
