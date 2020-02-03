import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {WelcomeComponent} from './welcome/welcome.component';
import {LegePaginaComponent} from './lege-pagina/lege-pagina.component';
import {CvPaginaComponent} from './cv-pagina/cv-pagina.component';
import {GamesPaginaComponent} from './games-pagina/games-pagina.component';
import {OverFrankComponent} from './over-frank/over-frank.component';

const routes: Routes = [
  // {path: 'welcome', component: WelcomeComponent, data: { title: 'home', animation: 'isLeft'}},
  // {path: 'cv', component: CvPaginaComponent, data: { title: 'cv Frank', animation: 'isRight' }},
  // {path: 'games', component: GamesPaginaComponent, data: { animation: 'isLeft'}},
  // {path: 'frank', component: OverFrankComponent, data: { animation: 'isRight' }},
  // {path: 'leeg', component: LegePaginaComponent},
  // {path: '', component: WelcomeComponent},
  // {path: '**', component: WelcomeComponent}
  {path: 'welcome', component: WelcomeComponent, data: { depth: 1}},
  {path: 'cv', component: CvPaginaComponent, data: { depth: 2 }},
  {path: 'games', component: GamesPaginaComponent, data: { depth: 3}},
  {path: 'frank', component: OverFrankComponent, data: { depth: 4}},
  {path: '', component: WelcomeComponent, pathMatch: 'full'},
  {path: '**', component: WelcomeComponent, pathMatch: 'full'}
]

@NgModule({
  // declarations: [],
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})
    // ,CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
