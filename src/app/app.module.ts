import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';

import { authInterceptorProviders } from './_helpers/auth.interceptor';
import {MovieModule} from "./movie/movie.module";
import {GenreModule} from "./genres/genre.module";
import { GenreDetailsComponent } from './genres/details/genre-details.component';
import { GenreEditComponent } from './genres/edit/genre-edit.component';
import { MovieEditComponent } from './movie/edit/movie-edit.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    GenreDetailsComponent,
    GenreEditComponent,
    MovieEditComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        MovieModule,
        HttpClientModule,
        GenreModule,
        ReactiveFormsModule,
        SweetAlert2Module,
        BrowserAnimationsModule
    ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
