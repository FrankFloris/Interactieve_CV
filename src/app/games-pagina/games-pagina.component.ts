import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-games-pagina',
  templateUrl: './games-pagina.component.html',
  styleUrls: ['./games-pagina.component.css']
})
export class GamesPaginaComponent implements OnInit {

  selected: boolean[] = [false, false, false, false, false, false];
  mousedOver: boolean[] = [false, false, false, false, false, false, false, false];

  constructor() { }

  ngOnInit() {
  }

  doeIets(x){
    this.selected[x] = !this.selected[x];
  }

  mouseOver(x) {
    this.mousedOver[x] = true;
  }

  mouseNotOver(x){
    this.mousedOver[x] = false;
  }

  bokemonFront() {
    console.log("Bokemon Frontend");
    window.open("https://github.com/FrankFloris/Project-Bokemon-Frontend");
  }

  bokemonBack() {
    console.log("Bokemon Frontend");
    window.open("https://github.com/FrankFloris/Project-Bokemon-Backend");
  }

  startWizardGame() {
    console.log("Wizard");
    window.open("https://github.com/FrankFloris/Wizard-game")
  }

  startAvoidanceGame() {
    console.log("Avoidance");
    window.open("https://github.com/FrankFloris/Avoidance-Game");
  }

  showAllProjects() {
    console.log("all projects");
    window.open("https://github.com/FrankFloris")
  }

  startTetrisGame() {
    console.log("Tetris");
    window.open("https://github.com/FrankFloris/Tetris-game");
  }

  startSnakeGame() {
    console.log("Snake");
    window.open("https://github.com/FrankFloris/SnakeGame");
  }

  lookAtChess() {
    window.open("https://github.com/FrankFloris/Chess")
  }
}
