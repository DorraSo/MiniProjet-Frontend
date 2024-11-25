import { Component, OnInit } from '@angular/core';
import { Film } from '../model/film.model';
import { FilmService } from '../services/film.service';
import { AuthService } from '../services/auth.service'; // Import du service AuthService
import { Router } from '@angular/router';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
})
export class FilmsComponent implements OnInit {

  films: Film[] = []; // Initialiser films comme un tableau vide

  constructor(
    private filmService: FilmService,
    public authService: AuthService, // Injection du service AuthService
    private router: Router
  ) { }

  ngOnInit(): void {
    this.chargerFilms();
  }

  chargerFilms() {
    this.filmService.listeFilm().subscribe(fils => {
      console.log(fils);
      this.films = fils;
    });
  }

  supprimerFilm(f: Film) {
    if (f.idFilm != null) {
      const conf = confirm("Etes-vous sûr ?");
      if (conf) {
        this.filmService.supprimerFilm(f.idFilm).subscribe(() => {
          console.log("Film supprimé");
          this.chargerFilms();
        });
      }
    } else {
      console.error("Film sans id valide, suppression impossible.");
    }
  }
}
