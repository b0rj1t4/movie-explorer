import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { Movie } from '../../models/movie.model';

@Component({
  selector: 'app-movie-grid',
  templateUrl: './movie-grid.component.html',
  styleUrls: ['./movie-grid.component.scss'],
  standalone: true,
  imports: [NgFor, NgIf]
})
export class MovieGridComponent {
  @Input() movies: Movie[] = [];
  @Output() movieSelected = new EventEmitter<Movie>();

  selectMovie(movie: Movie) {
    this.movieSelected.emit(movie);
  }

  getImageUrl(posterPath: string): string {
    return posterPath ? `https://image.tmdb.org/t/p/w300${posterPath}` : '/assets/no-poster.png';
  }
}
