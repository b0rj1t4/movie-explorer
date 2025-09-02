import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { Movie } from './models/movie.model';
import { SearchComponent } from './components/search/search.component';
import { MovieModalComponent } from './components/movie-modal/movie-modal.component';
import { MovieGridComponent } from './components/movie-grid/movie-grid.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [SearchComponent, MovieModalComponent, MovieGridComponent, NgIf],
})
export class AppComponent {
  title = 'movie-explorer';
  selectedMovie: Movie = {} as Movie;
  searchResults: Movie[] = [];

  openMovie(movie: Movie) {
    this.selectedMovie = movie;
  }

  closeModal() {
    this.selectedMovie = {} as Movie;
  }

  onSearchResults(movies: Movie[]) {
    this.searchResults = movies;
  }
}
