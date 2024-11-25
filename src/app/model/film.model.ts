import { Producteur } from "./producteur.model";

export class Film {
    idFilm? : number;
    nomFilm? : string;
    genreFil? : string;
    dateSortie? : Date ;
    producteur! : Producteur;
    }