import { Component } from '@angular/core';
import { FilmService } from '../services/film.service';
import { Producteur } from '../model/producteur.model';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-liste-producteurs',
  templateUrl: './liste-producteurs.component.html',
  styles: ``
})
export class ListeProducteursComponent {
  producteurs! : Producteur[];
  ajout:boolean=true;


  updatedProd:Producteur = {"idProduc":0,"nomProduc":"","dateNaissance":new Date() };

  constructor(private filmService : FilmService,public authService: AuthService) { }
  ngOnInit(): void {
  // this.filmService.listeProducteurs().
  // subscribe(prods => {this.producteurs = prods._embedded.producteurs;
  // console.log(prods);
  // });
  this.chargerProducteurs();
}
chargerProducteurs(){
  this.filmService.listeProducteurs().
subscribe(prods => {this.producteurs = prods._embedded.producteurs;
console.log(prods);
});

}

producteurUpdated(prod:Producteur){
  console.log("producteur recue du composant updateProducteur",prod);
  this.filmService.ajouterProducteur(prod).subscribe( ()=> this.chargerProducteurs());
}
updateProd(prod:Producteur){
this.updatedProd= prod;
this.ajout=false;
}
}
