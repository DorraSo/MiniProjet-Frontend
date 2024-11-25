import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Producteur } from '../model/producteur.model';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-update-producteur',
  templateUrl: './update-producteur.component.html',
  styles: ``
})
export class UpdateProducteurComponent {
  @Input()
  producteur! : Producteur;

  @Input()
ajout!:boolean;


  @Output()
  producteurUpdated = new EventEmitter<Producteur>();
  

  constructor(public authService: AuthService) {}

  ngOnInit(): void {
    console.log("ngOnInit du composant UpdateProducteur ",this.producteur);
    }

    saveProducteur(){
      this.producteurUpdated.emit(this.producteur);
    }

    
}
