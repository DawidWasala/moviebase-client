import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Genre} from "../model/genre";
import {ActivatedRoute, Router} from "@angular/router";
import {GenreService} from "../service/genre.service";
import Swal from "sweetalert2";

@Component({
  selector: 'app-details',
  templateUrl: './genre-details.component.html',
  styleUrls: ['./genre-details.component.css']
})
export class GenreDetailsComponent implements OnInit {
  genre$!: Observable<Genre>;
  constructor(  private route: ActivatedRoute,
                private router: Router,
                private service: GenreService) { }

  ngOnInit(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!);
    this.genre$ = this.service.getGenre(id);
  }

  remove(id: number): void {
    this.service.delete(id).subscribe({
      next: () => {
        this.router.navigate(['/genres'])
        Swal.fire('Whooa!', 'Genre deleted successfully', 'success');
      },
      error: error => {
        Swal.fire('Oops', 'An error occurred. There might be movies with such genres (delete movies first)', 'error');
      }
    });
  }

  edit(id: number): void {
    this.router.navigate(['/edit', id])
  }

}
