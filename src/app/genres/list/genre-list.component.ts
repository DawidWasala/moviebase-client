import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Genre} from "../model/genre";
import {GenreService} from "../service/genre.service";
import {Observable} from "rxjs";
import {TokenStorageService} from "../../_services/token-storage.service";

@Component({
  selector: 'app-list',
  templateUrl: './genre-list.component.html',
  styleUrls: ['./genre-list.component.css']
})
export class GenreListComponent implements OnInit {

  genres$!: Observable<Genre[]>;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private service: GenreService) {
  }

  ngOnInit() {
    this.genres$ = this.service.getGenres();
  }

  details(genre: Genre): void {
    this.router.navigate(['/genre', genre.id])
  }
}
