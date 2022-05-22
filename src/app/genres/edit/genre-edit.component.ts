import {Component, OnInit} from '@angular/core';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import {FormBuilder, FormGroup} from "@angular/forms";
import {Genre} from "../model/genre";
import {GenreService} from "../service/genre.service";
import {ActivatedRoute, Router} from "@angular/router";
import {first} from "rxjs";

@Component({
  selector: 'app-edit',
  templateUrl: './genre-edit.component.html',
  styleUrls: ['./genre-edit.component.css']
})

export class GenreEditComponent implements OnInit {

  form!: FormGroup;
  id!: number
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private genreService: GenreService,
    private router: Router,
    private route: ActivatedRoute
  )
  {}

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];

    this.form = this.formBuilder.group({
      name: ['']
    })

    this.genreService.getGenre(this.id)
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
    this.genreService.update(this.id, this.form.value)
      .subscribe({
          next: () => {
            this.router.navigate(['/genres'])
            Swal.fire('Whooa!', 'Genre updated successfully', 'success');
          },
          error: error => {
            Swal.fire('Oops', 'An error occurred', 'error');
          }
        }
      );
  }
}
