import { Injectable } from '@angular/core';
import { Film } from '../model/film.model';
import { Producteur } from '../model/producteur.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { apiURL } from '../config';
import { ProducteurWrapper } from '../model/producteurWrapped.model';
const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
};

@Injectable({
  providedIn: 'root'
})
export class FilmService {
  apiURL: string ='http://localhost:8080/films/api';
  apiURLCat: string = 'http://localhost:8080/films/prod';
  films: Film[] = [];//un tableau de films
 // film! : Film;
 producteurs! : Producteur[];
  constructor(private http : HttpClient) { 
   /* this.producteurs=[{idProduc : 1, nomProduc :"gemson",dateNaissance: new Date("03/24/1972")},
      {idProduc : 2, nomProduc :"alesca",dateNaissance: new Date("07/05/1985")}
    ];

    this.films = [
      { idFilm: 1, nomFilm: "Inception", genreFil: "Science-fiction", dateSortie: new Date("07/16/2010"),producteur:{idProduc : 1, nomProduc :"gemson",dateNaissance: new Date("03/24/1972")} },
      { idFilm: 2, nomFilm: "The Godfather", genreFil: "Crime", dateSortie: new Date("03/24/1972") ,producteur:{idProduc : 2, nomProduc :"alesca",dateNaissance: new Date("07/05/1985")}},
      { idFilm: 3, nomFilm: "Pulp Fiction", genreFil: "Crime/Drama", dateSortie: new Date("10/14/1994"),producteur:{idProduc : 1, nomProduc :"gemson",dateNaissance: new Date("03/24/1972")}}
    ];*/
    
  }


 /* listeFilm():Film[]{
return this.films;
  }*/
listeFilm(): Observable<Film[]>{
  return this.http.get<Film[]>(apiURL);
  }
  
  
/*
  // Ajouter un film à la liste
  ajouterFilm(film: Film) {
    this.films.push(film);
    console.log("Film ajouté avec succès : ", film);
  }*/
    ajouterFilm( prod: Film):Observable<Film>{
      return this.http.post<Film>(apiURL, prod, httpOptions);
      }
    // Obtenir tous les films
    getFilms(): Film[] {
      return this.films;
    }
    getProducteurs(): Producteur[] {
      return this.producteurs;
    }
  /*supprimerFilm(fil: Film) {
    const index = this.films.indexOf(fil, 0);
    if (index > -1) {
      this.films.splice(index, 1);
    } 
                //ou Bien
                /* this.produits.forEach((cur, index) => {
                if(prod.idProduit === cur.idProduit) {
                this.produits.splice(index, 1);
                }
                }); 
                  }
                consulterFilm(id: number): Film {
     return this.films.find(f => f.idFilm === id)!;
      }
*/
supprimerFilm(id : number) {
  const url = `${apiURL}/${id}`;
  return this.http.delete(url, httpOptions);
  }
                  
  consulterFilm(id: number): Observable<Film> {
    const url = `${apiURL}/${id}`;
    return this.http.get<Film>(url);
    }

    
                          

      trierFilms(){
        this.films = this.films.sort((n1,n2) => {
        if (n1.idFilm! > n2.idFilm!) {
        return 1;
        }
        if (n1.idFilm! < n2.idFilm!) {
        return -1;
        }
        return 0;
        });
        }
       /* 
        updateFilm(film: Film) {
          const index = this.films.findIndex(f => f.idFilm === film.idFilm);
          if (index !== -1) {
            this.films[index] = film; // Mise à jour du film dans la liste
            console.log("Film mis à jour:", this.films[index]);  // Log pour vérifier la mise à jour
          } else {
            console.log("Film non trouvé pour mise à jour.");
          }
        }*/
          updateFilm(fil :Film) : Observable<Film>
          {
          return this.http.put<Film>(apiURL, fil, httpOptions);
          }
        
        /*listeProducteurs():Producteur[] {
          return this.producteurs;
          }*/
         /* listeProducteurs():Observable<Producteur[]>{
            return this.http.get<Producteur[]>(apiURL+"/prod");
            }*/
            listeProducteurs() {
              return this.http.get<{ _embedded: { producteurs: Producteur[] } }>('http://localhost:8080/films/prod');
            }
            

          /*consulterProducteur(id: number): Producteur {
            return this.producteurs.find(produc => produc.idProduc == id)!;
          }*/
            
  rechercherParProducteur(idProduc: number): Observable<Film[]> {
    const url = `${this.apiURL}/filsproduc/${idProduc}`;
    return this.http.get<Film[]>(url);
  }

  rechercherParNom(nom: string):Observable< Film[]> {
    const url = `${this.apiURL}/filsByName/${nom}`;
    return this.http.get<Film[]>(url);
    }
    ajouterProducteur( prod: Producteur):Observable<Producteur>{
      return this.http.post<Producteur>(this.apiURLCat, prod, httpOptions);
      }
      
              
}