import { Component } from '@angular/core';
import { Producteur } from '../model/producteur.model';
import { Film } from '../model/film.model';
import { FilmService } from '../services/film.service';


@Component({
  selector: 'app-recherche-par-producteur',
  templateUrl: './recherche-par-producteur.component.html',
  styles: ``
})
export class RechercheParProducteurComponent {
  [x: string]: any;
  IdProducteur! : number;
  producteurs! : Producteur[];
 films! : Film[];
  constructor(private filmService: FilmService) {}
 
  ngOnInit(): void {
    this.filmService.listeProducteurs().
    subscribe(prods => {this.producteurs = prods._embedded.producteurs;
      console.log(prods);
      });
  }          
onChange(){
  this.filmService.rechercherParProducteur(this.IdProducteur).
subscribe(fils =>{this.films=fils});
}
}
