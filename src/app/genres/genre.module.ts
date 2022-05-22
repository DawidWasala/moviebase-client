import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {GenreRoutingModule} from "./genre-routing.module";
import {GenreListComponent} from "./list/genre-list.component";
import {GenreAddComponent} from "./add/genre-add.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    GenreRoutingModule
  ],
  declarations: [
    GenreListComponent,
    GenreAddComponent
  ]
})
export class GenreModule {}
