import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilmGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      
    const isAuthorized = false; // Remplacez cela par votre logique d'autorisation (par exemple, vérifier un rôle)

    if (!isAuthorized) {
      // Redirigez l'utilisateur vers la page Forbidden si non autorisé
      this.router.navigate(['/forbidden']);
      return false;
    }
    return true;
  }
}
