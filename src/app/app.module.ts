import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilmsComponent } from './films/films.component';
import { AddFilmComponent } from './add-film/add-film.component';
import { FormsModule } from '@angular/forms';
import { UpdateFilmComponent } from './update-film/update-film.component';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { RechercheParProducteurComponent } from './recherche-par-producteur/recherche-par-producteur.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { SearchFilterPipe } from './search-filter.pipe';
import { ListeProducteursComponent } from './liste-producteurs/liste-producteurs.component';
import { UpdateProducteurComponent } from './update-producteur/update-producteur.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';


@NgModule({
  declarations: [
    AppComponent,
    FilmsComponent,
    AddFilmComponent,
    UpdateFilmComponent,
    RechercheParProducteurComponent,
    RechercheParNomComponent,
    SearchFilterPipe,
    ListeProducteursComponent,
    UpdateProducteurComponent,
    LoginComponent,
    ForbiddenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(withFetch())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
