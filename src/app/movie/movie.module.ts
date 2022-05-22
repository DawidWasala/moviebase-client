import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MovieListComponent} from "./list/movie-list.component";
import {MovieDetailsComponent} from "./details/movie-details.component";
import {MovieRoutingModule} from "./movie-routing.module";
import {MovieAddComponent} from "./add/movie-add.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MovieRoutingModule
  ],
  declarations: [
    MovieListComponent,
    MovieDetailsComponent,
    MovieAddComponent
  ]
})
export class MovieModule {}
