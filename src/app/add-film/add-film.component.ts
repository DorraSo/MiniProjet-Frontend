import { Component, OnInit } from '@angular/core';
import { Film } from '../model/film.model';
import { FilmService } from '../services/film.service';
import { Producteur } from '../model/producteur.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-film',
  templateUrl: './add-film.component.html',
})
export class AddFilmComponent implements OnInit {
  newFilm = new Film();  // Film à ajouter
  message: string = '';  // Message de succès
  films: Film[] = [];  // Liste des films
  producteurs: Producteur[] = [];  // Liste des producteurs
  newIdProduc: number | undefined;  // ID du producteur sélectionné
  newProducteur! : Producteur;
  constructor(private filmService: FilmService ,private router :Router) {}

  ngOnInit(): void {
    // Charger la liste des producteurs depuis un service ou initialisation
    //this.producteurs = this.filmService.getProducteurs();  // Exemple de récupération
   
      this.filmService.listeProducteurs().
      subscribe(prods => {console.log(prods);
      this.producteurs = prods._embedded.producteurs;
      }
      );
      
  
  }

  /*addFilm() {
    // Trouver le producteur sélectionné
    const selectedProduc = this.producteurs.find(produc => produc.idProduc === this.newIdProduc);
  
    if (!selectedProduc) {
      console.error("Producteur introuvable ou non sélectionné !");
      this.message = "Veuillez sélectionner un producteur valide.";
      return;
    }
  
    // Ajouter le producteur au film
    this.newFilm.producteur = selectedProduc;
  
    // Appeler le service pour ajouter le film
    this.filmService.ajouterFilm(this.newFilm);
  
    // Afficher un message de confirmation
    this.message = "Film " + this.newFilm.nomFilm + " ajouté avec succès !";
  
    // Réinitialiser le formulaire
    this.newFilm = new Film();
    this.newIdProduc = undefined;
  }
  

  // Nouvelle méthode pour afficher l'ID du producteur sélectionné
  onProducteurSelect() {
    const selectedProduc = this.filmService.consulterProducteur(this.newIdProduc!);
    if (selectedProduc) {
      console.log("Producteur sélectionné : ", selectedProduc.idProduc);
    } else {
      console.log("Aucun producteur sélectionné ou introuvable.");
    }
  }*/
    /*addFilm() {
      if (!this.newIdProduc) {
        // Vérifier si un producteur a été sélectionné
        console.error('Aucun producteur sélectionné !');
        this.message = 'Veuillez sélectionner un producteur.';
        return;
      }
  
      const selectedProduc = this.filmService.consulterProducteur(this.newIdProduc);
  
      if (!selectedProduc) {
        console.error('Producteur introuvable !');
        this.message = 'Producteur introuvable.';
        return;
      }
  
      // Associer le producteur au film
      this.newFilm.producteur = selectedProduc;
  
      // Ajouter le film via le service
      this.filmService.ajouterFilm(this.newFilm);
  
      // Rediriger vers une autre page (assurez-vous que 'films' est bien défini dans le routeur)
      this.router.navigate(['/films']);
  
      // Réinitialiser les champs
      this.newFilm = new Film();
      this.newIdProduc = undefined;
  
      // Afficher un message de succès
      this.message = `Film "${this.newFilm.nomFilm}" ajouté avec succès !`;
    
      // Redirige vers la liste des films après la mise à jour
      this.router.navigate(['/films']); 

    }*/

     /* addFilm(){
        this.filmService.ajouterFilm(this.newFilm)
        .subscribe(prod => {
        console.log(prod);
        this.router.navigate(['films']);
        });
        }*/
        addFilm(){
          this.newFilm.producteur = this.producteurs.find(prod => prod.idProduc == this.newIdProduc)!;
          this.filmService.ajouterFilm(this.newFilm)
          .subscribe(prod => {
          console.log(prod);
          this.router.navigate(['films']);
          });
          }
              
        
}
