import { Component, OnInit } from '@angular/core';
import {GenreService} from "../service/genre.service";
import {Genre} from "../model/genre";
import {ActivatedRoute, Router} from "@angular/router";
import Swal from "sweetalert2";

@Component({
  selector: 'app-add',
  templateUrl: './genre-add.component.html',
  styleUrls: ['./genre-add.component.css']
})
export class GenreAddComponent implements OnInit {

  model = new Genre('', []);
  submitted = false;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private genreService: GenreService
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.submitted = true;
    this.createGenre();
  }

  private createGenre() {
    if (this.model) {
      this.genreService.create(this.model)
        .subscribe({
          next: () => {
            this.router.navigate(['/genres'])
            Swal.fire('Whooa!', 'Genre created successfully', 'success');
          },
          error: error => {
            Swal.fire('Oops', 'An error occurred', 'error');
          }
        })
    }
  }

}
