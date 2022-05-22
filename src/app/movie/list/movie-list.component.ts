import {Component, OnInit} from '@angular/core';
import {Movie} from "../model/movie";
import {ActivatedRoute, Router} from '@angular/router';
import {MovieService} from "../service/movie.service";
import {Observable} from "rxjs";
import {TokenStorageService} from "../../_services/token-storage.service";

@Component({
  selector: 'app-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  movies$!: Observable<Movie[]>
  isAdmin: boolean

  constructor(private route: ActivatedRoute,
              private router: Router,
              private movieService: MovieService,
              private tokenStorageService: TokenStorageService) {
  }

  ngOnInit() {
    this.movies$ = this.movieService.getMovies();
    this.isAdmin = this.tokenStorageService.getUser().roles.includes('ROLE_ADMIN');
  }

  details(movie: Movie): void {
    this.router.navigate(['/movie', movie.id])
  }
}
