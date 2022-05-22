import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { MovieListComponent } from "./list/movie-list.component";
import { MovieDetailsComponent } from "./details/movie-details.component";
import { MovieAddComponent } from "./add/movie-add.component";
import {MovieEditComponent} from "./edit/movie-edit.component";

const moviesRoutes: Routes = [
  { path: 'movies', component: MovieListComponent},
  { path: 'movie/:id', component: MovieDetailsComponent},
  { path: 'movie-create', component: MovieAddComponent},
  { path: 'movie-edit/:id', component: MovieEditComponent}
]

@NgModule({
  imports: [
    RouterModule.forChild(moviesRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class MovieRoutingModule {}
