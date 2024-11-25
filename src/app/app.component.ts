import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // Correction de 'styleUrl' en 'styleUrls'
})
export class AppComponent implements OnInit {
  title = 'MesFilms';

  constructor(
    public authService: AuthService, // Correction de l'erreur ici
    private router: Router
  ) {}
  ngOnInit() {
    let isloggedin: string | null;
    let loggedUser: string | null;
  
    isloggedin = localStorage.getItem('isloggedIn');
    loggedUser = localStorage.getItem('loggedUser');
  
    if (isloggedin !== "true" || !loggedUser) {
      this.router.navigate(['/login']);
    } else {
      this.authService.setLoggedUserFromLocalStorage(loggedUser); // Appel correct
    }
  }
  

  onLogout() {
    this.authService.logout();
  }
}
