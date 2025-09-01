import { Injectable } from '@angular/core';
import { Movie } from '../models/movie.model';

@Injectable({
  providedIn: 'root',
})
export class FavoritesService {
  private key = 'favoriteMovies';

  getFavorites(): Movie[] {
    return JSON.parse(localStorage.getItem(this.key) || '[]');
  }

  addFavorite(movie: Movie) {
    const favs = this.getFavorites();
    if (!favs.find((m) => m.id === movie.id)) favs.push(movie);
    localStorage.setItem(this.key, JSON.stringify(favs));
  }

  removeFavorite(movie: Movie) {
    let favs = this.getFavorites();
    favs = favs.filter((m) => m.id !== movie.id);
    localStorage.setItem(this.key, JSON.stringify(favs));
  }

  isFavorite(movie: Movie) {
    return this.getFavorites().some((m) => m.id === movie.id);
  }
}
