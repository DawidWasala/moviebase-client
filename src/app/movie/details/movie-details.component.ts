import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {MovieService} from "../service/movie.service";
import {Movie} from "../model/movie";
import {Observable} from "rxjs";
import Swal from "sweetalert2";
import {TokenStorageService} from "../../_services/token-storage.service";

@Component({
  selector: 'app-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  movie$!: Observable<Movie>;
  isAdmin: boolean;

  constructor(  private route: ActivatedRoute,
                private router: Router,
                private service: MovieService,
                private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!);
    this.movie$ = this.service.getMovie(id);
    this.isAdmin = this.tokenStorageService.getUser().roles.includes('ROLE_ADMIN');
  }

  remove(id: number): void {
    this.service.delete(id).subscribe({
      next: () => {
        this.router.navigate(['/movies'])
        Swal.fire('Whooa!', 'Movie deleted successfully', 'success');
      },
      error: error => {
        Swal.fire('Oops', 'An error occurred', 'error');
      }
    })
  }

  edit(id: number): void {
    this.router.navigate(['movie-edit', id])
  }

}
