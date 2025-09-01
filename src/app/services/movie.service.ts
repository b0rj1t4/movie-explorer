import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private apiUrl = 'https://api.themoviedb.org/3/search/movie';
  private key = '7e2314850f354d1d37bbcde1ac23a827';

  private readonly http: HttpClient = inject(HttpClient);

  searchMovies(query: string) {
    console.log('Searching movies with query:', query);
    const url = `${this.apiUrl}?api_key=${this.key}&query=${encodeURIComponent(
      query
    )}`;
    return this.http.get(url);
  }
}
