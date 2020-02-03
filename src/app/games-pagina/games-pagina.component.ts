import { Component, OnInit } from '@angular/core';
import set = Reflect.set;




@Component({
  selector: 'app-games-pagina',
  templateUrl: './games-pagina.component.html',
  styleUrls: ['./games-pagina.component.css']
})
export class GamesPaginaComponent implements OnInit {

  selected: boolean[] = [true, true, true, true, true, true, true, true, true, true, true, true, true, true];
  mousedOver: boolean[] = [false, false, false, false, false, false, false, false];
  percentage = 0;

  constructor() { }

ngOnInit() {
    this.upPercentage();

    document.getElementById('snowflakeContainer').style.visibility = 'hidden';

    const canvas = document.getElementById('canv') as HTMLCanvasElement;
    const context = canvas.getContext('2d');

    // making the canvas full screen
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
    // canvas.height = 500;
    // canvas.width = 500;

    // chinese characters - taken from the unicode charset
    // var characters: string = "田由甲申甴电甶男甸甹町画甼甽甾甿畀畁畂畃畄畅畆畇畈畉畊畋界畍畎畏畐畑";
    const characters = '日ｦｱｳｴｵｶｷｹｺｻｼｽｾｿﾀﾂﾃﾅﾆﾇﾈﾊﾋﾎﾏﾐﾑﾒﾓﾔﾕﾗﾘﾜ012345789Z¦｜:・.=*+-<>ç二';
    // const characters = '二ɔ><-+*=.・:｜¦Z୧8٢टμƸςƖ0ﾜﾘﾗﾕﾔﾓﾒﾑﾐﾏﾎﾋﾊﾈﾇﾆﾅﾃﾂﾀｿｾｽｼｻｺｹｷｶｵｴｳｱｦ日'; /*https://www.messletters.com/en/mirrored/*/
    // converting the string into an array of single characters
    const characterArray: string[] = characters.split('');

    const fontSize = 15;
    const columns = canvas.width / fontSize; // number of columns for the rain
    // an array of drops - one per column
    const drops = [];
    // x below is the x coordinate
    // 1 = y co-ordinate of the drop(same for every drop initially)
    for (let x = 0; x < columns; x++) {
      drops[x] = 1;
    }

    // drawing the characters
    function draw() {
      // Black BG for the canvas
      // translucent BG to show trail
      context.fillStyle = 'rgba(0, 0, 0, 0.05)';
      context.fillRect(0, 0, canvas.width, canvas.height);

      context.fillStyle = '#0F0'; // green text
      context.font = fontSize + 'px arial';

      // looping over drops
      for (let i = 0; i < drops.length; i++) {
        // a random chinese character to print
        const text = characterArray[Math.floor(Math.random() * characters.length)];
        // x = i*fontSize, y = value of drops[i]*fontSize
        context.fillText(text, i * fontSize, drops[i] * fontSize);

        // sending the drop back to the top randomly after it has crossed the screen
        // adding a randomness to the reset to make the drops scattered on the Y axis
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        // incrementing Y coordinate
        drops[i]++;
      }
    }
    setInterval(draw, 33);
  }

upPercentage() {
  if (this.percentage < 100) {
    this.percentage++;
    setTimeout(() => this.upPercentage(), 25);
  } else {
    setTimeout(() => (document.getElementById('animatedModal') as HTMLElement).style.animation = 'disappearing 2s', 500);
    setTimeout(() => (document.getElementById('animatedModal') as HTMLElement).style.opacity = '0', 2500);
    setTimeout(() => (document.getElementById('animatedModal') as HTMLElement).style.zIndex = '-10000', 2500);
  }
}

  inUitklappen(x) {
    this.selected[x] = !this.selected[x];
  }

mouseOver(x) {
    this.mousedOver[x] = !this.mousedOver;
  }
}
