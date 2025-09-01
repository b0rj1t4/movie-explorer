import { Component } from '@angular/core';
import { Movie } from './models/movie.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'movie-explorer';
  selectedMovie: Movie = {} as Movie;

  openMovie(movie: Movie) {
    this.selectedMovie = movie;
  }

  closeModal() {
    this.selectedMovie = {} as Movie;
  }
}
