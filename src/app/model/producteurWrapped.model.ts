import { Producteur } from './producteur.model';
export class ProducteurWrapper {
  _embedded!: { producteurs: Producteur[]}; // `_embedded` est optionnel
}

