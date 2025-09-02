import { NgFor, NgIf } from '@angular/common';
import { Component, EventEmitter, inject, Output } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, switchMap } from 'rxjs';
import { Movie } from 'src/app/models/movie.model';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, NgFor],
})
export class SearchComponent {
  private movieService = inject(MovieService);

  searchControl = new FormControl('');
  movies: any[] = [];
  isLoading = false;
  @Output() movieSelected = new EventEmitter<Movie>();
  @Output() searchResults = new EventEmitter<Movie[]>();

  constructor() {
    console.log('SearchComponent initialized');
    this.searchControl.valueChanges
      .pipe(
        debounceTime(300),
        switchMap((query) => this.movieService.searchMovies(query as string))
      )
      .subscribe((response: any) => {
        this.movies = response.results;
        this.searchResults.emit(this.movies);
        this.isLoading = false;
      });
  }

  selectMovie(movie: Movie) {
    console.log('Selected movie:', movie);
    this.movieSelected.emit(movie);
  }
}
