import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-games-pagina',
  templateUrl: './games-pagina.component.html',
  styleUrls: ['./games-pagina.component.css']
})
export class GamesPaginaComponent implements OnInit {

  selected: boolean[] = [true, true, true, true, true, true, true];
  mousedOver: boolean[] = [false, false, false, false, false, false, false, false];

  constructor() { }

  ngOnInit() {
    var canvas = <HTMLCanvasElement> document.getElementById("canv");
    var context = canvas.getContext("2d");

    //making the canvas full screen
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
    // canvas.height = 500;
    // canvas.width = 500;

    //chinese characters - taken from the unicode charset
    // var characters: string = "田由甲申甴电甶男甸甹町画甼甽甾甿畀畁畂畃畄畅畆畇畈畉畊畋界畍畎畏畐畑";
    var characters: string = "日ｦｱｳｴｵｶｷｹｺｻｼｽｾｿﾀﾂﾃﾅﾆﾇﾈﾊﾋﾎﾏﾐﾑﾒﾓﾔﾕﾗﾘﾜ012345789Z¦｜:・.=*+-<>ç二";
    //converting the string into an array of single characters
    var characterArray: string[] = characters.split("");

    var font_size = 15;
    var columns = canvas.width/font_size; //number of columns for the rain
    //an array of drops - one per column
    var drops = [];
    //x below is the x coordinate
    //1 = y co-ordinate of the drop(same for every drop initially)
    for(var x = 0; x < columns; x++)
      drops[x] = 1;

    //drawing the characters
    function draw()
    {
      //Black BG for the canvas
      //translucent BG to show trail
      context.fillStyle = "rgba(0, 0, 0, 0.05)";
      context.fillRect(0, 0, canvas.width, canvas.height);

      context.fillStyle = "#0F0"; //green text
      context.font = font_size + "px arial";
      //looping over drops
      for(var i = 0; i < drops.length; i++)
      {
        //a random chinese character to print
        var text = characterArray[Math.floor(Math.random()*characters.length)];
        //x = i*font_size, y = value of drops[i]*font_size
        context.fillText(text, i*font_size, drops[i]*font_size);

        //sending the drop back to the top randomly after it has crossed the screen
        //adding a randomness to the reset to make the drops scattered on the Y axis
        if(drops[i]*font_size > canvas.height && Math.random() > 0.975)
          drops[i] = 0;

        //incrementing Y coordinate
        drops[i]++;
      }
    }

    setInterval(draw, 33);
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
