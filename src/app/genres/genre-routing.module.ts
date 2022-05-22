import {RouterModule, Routes} from "@angular/router";
import {GenreListComponent} from "./list/genre-list.component";
import {NgModule} from "@angular/core";
import {GenreAddComponent} from "./add/genre-add.component";
import {GenreDetailsComponent} from "./details/genre-details.component";
import {GenreEditComponent} from "./edit/genre-edit.component";

const genresRoutes: Routes = [
  { path: 'genres', component: GenreListComponent},
  { path: 'genre/:id', component: GenreDetailsComponent},
  { path: 'genre-create', component: GenreAddComponent},
  { path: 'edit/:id', component: GenreEditComponent}
]

@NgModule({
  imports: [
    RouterModule.forChild(genresRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class GenreRoutingModule {}
