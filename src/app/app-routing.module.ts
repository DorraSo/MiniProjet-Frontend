import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmsComponent } from './films/films.component';
import { AddFilmComponent } from './add-film/add-film.component';
import { UpdateFilmComponent } from './update-film/update-film.component';
import { RechercheParProducteurComponent } from './recherche-par-producteur/recherche-par-producteur.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { ListeProducteursComponent } from './liste-producteurs/liste-producteurs.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { FilmGuard } from './services/film.guard';

const routes: Routes = [
  { path: "films", component: FilmsComponent },
  { path: "add-film", component: AddFilmComponent,canActivate:[FilmGuard] },
  { path: "updateFilm/:id", component: UpdateFilmComponent },
  { path: "recherche-par-producteur", component : RechercheParProducteurComponent },
  {path: "rechercheParNom", component : RechercheParNomComponent},
  {path: "listeProducteurs", component : ListeProducteursComponent},
  {path: 'login', component: LoginComponent},
  { path: 'forbidden', component: ForbiddenComponent },  // Changer ici 'app-forbidden' en 'forbidden'
  { path: "", redirectTo: "films", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
