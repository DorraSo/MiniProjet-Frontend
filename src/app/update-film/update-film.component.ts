import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FilmService } from '../services/film.service';
import { Film } from '../model/film.model';
import { Producteur } from '../model/producteur.model';

@Component({
  selector: 'app-update-film',
  templateUrl: './update-film.component.html',
  styles: []
})
export class UpdateFilmComponent implements OnInit {
  currentFilm: Film = new Film();
  producteurs! : Producteur[];
  updatedProducId! : number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router, // Nous utilisons Router ici
    private filmService: FilmService
  ) {}

  ngOnInit(): void {
    this.filmService.listeProducteurs().
      subscribe(prods => {console.log(prods);
      this.producteurs = prods._embedded.producteurs;
      }
    );
    this.filmService.consulterFilm(this.activatedRoute.snapshot.params['id']).
    subscribe( prod =>{ this.currentFilm = prod;
    this.updatedProducId = this.currentFilm.producteur.idProduc;
    } ) ;
    }

  /*updateFilm() {
    this.currentFilm.producteur=this.filmService.consulterProducteur(this.updatedProducId);
    this.filmService.updateFilm(this.currentFilm);
    this.router.navigate(['films']);
    // }*/

    updateFilm() {
      this.currentFilm.producteur = this.producteurs.find(prod => prod.idProduc == this.updatedProducId)!;
      this.filmService.updateFilm(this.currentFilm).subscribe(fil => {
      this.router.navigate(['films']); }
      );
      }
      
}
