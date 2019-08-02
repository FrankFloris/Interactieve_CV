import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {RouterModule} from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import {AppRoutingModule} from "./app-routing.module";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { LegePaginaComponent } from './lege-pagina/lege-pagina.component';
import { GamesPaginaComponent } from './games-pagina/games-pagina.component';
import { CvPaginaComponent } from './cv-pagina/cv-pagina.component';
import { OverFrankComponent } from './over-frank/over-frank.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    LegePaginaComponent,
    GamesPaginaComponent,
    CvPaginaComponent,
    OverFrankComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
