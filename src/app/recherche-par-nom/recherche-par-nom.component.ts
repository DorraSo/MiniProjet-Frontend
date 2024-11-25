import { Component } from '@angular/core';
import { FilmService } from '../services/film.service';
import { Film } from '../model/film.model';

@Component({
  selector: 'app-recherche-par-nom',
  templateUrl: './recherche-par-nom.component.html',
  styles: ``
})
export class RechercheParNomComponent {
nomFilm! :string;
films! : Film[];
allFilms! : Film[];
searchTerm! : string;

constructor(private filmService: FilmService) {}
 
ngOnInit(): void {
  this.filmService.listeFilm().subscribe(fils => {
    console.log(fils);
    this.films = fils;
    });
} 
rechercherFils(){
this.filmService.rechercherParNom(this.nomFilm).subscribe(fils => {this.films = fils;
  console.log(fils);
  });
}
onKeyUp(filterText : string){
  this.films = this.allFilms.filter(item =>
  item.nomFilm?.toLowerCase().includes(filterText));
  }
  
}
