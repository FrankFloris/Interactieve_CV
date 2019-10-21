import { Component, OnInit } from '@angular/core';
import {Router, RouterModule} from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  selected: boolean[] = [false, false, false, false, false, false];
  mousedOver: boolean[] = [false, false, false, false, false, false, false, false];


  constructor(
    private router: Router,
  ) { }



  ngOnInit() {
    // Array to store our Snowflake objects
    let snowflakes = [];

    // Global variables to store our browser's window size
    let browserWidth = document.documentElement.clientWidth;
    let browserHeight = document.documentElement.clientHeight;

    // Specify the number of snowflakes you want visible
    const numberOfSnowflakes = browserWidth / 24 + 5;

    // Flag to reset the position of the snowflakes
    let resetPosition = false;

    // Handle accessibility
    let enableAnimations = false;
    const reduceMotionQuery = matchMedia('(prefers-reduced-motion)');

    // Handle animation accessibility preferences
    function setAccessibilityState() {
      enableAnimations = !reduceMotionQuery.matches;
    }
    setAccessibilityState();

    reduceMotionQuery.addListener(setAccessibilityState);

    //
    // It all starts here...
    //
    function setup() {
      if (enableAnimations) {
        window.addEventListener('DOMContentLoaded', generateSnowflakes, false);
        window.addEventListener('resize', setResetFlag, false);
      }
    }
    setup();

    //
    // Constructor for our Snowflake object
    //
    function Snowflake(element, speed, xPos, yPos) {
      // set initial snowflake properties
      this.element = element;
      this.speed = speed;
      this.xPos = xPos;
      this.yPos = yPos;
      this.scale = 1;

      // declare variables used for snowflake's motion
      this.counter = 0;
      this.sign = Math.random() < 0.5 ? 1 : -1;

      // setting an initial opacity and size for our snowflake
      this.element.style.opacity = (.1 + Math.random()) / 3;
    }

    // The function responsible for actually moving our snowflake
    Snowflake.prototype.update = function() {
      // using some trigonometry to determine our x and y position
      this.counter += this.speed / 5000;
      this.xPos += this.sign * this.speed * Math.cos(this.counter) / 40;
      this.yPos += Math.sin(this.counter) / 40 + this.speed / 30;
      this.scale = .5 + Math.abs(10 * Math.cos(this.counter) / 20);

      // setting our snowflake's position
      setTransform(Math.round(this.xPos), Math.round(this.yPos), this.scale, this.element);

      // if snowflake goes below the browser window, move it back to the top
      if (this.yPos > browserHeight) {
        this.yPos = -50;
      }
    }

    // A performant way to set your snowflake's position and size
    function setTransform(xPos, yPos, scale, el) {
      el.style.transform = `translate3d(${xPos}px, ${yPos}px, 0) scale(${scale}, ${scale})`;
    }

    // The function responsible for creating the snowflake
    function generateSnowflakes() {

      // get our snowflake element from the DOM and store it
      const originalSnowflake = document.querySelector('.snowflake');

      // access our snowflake element's parent container
      const snowflakeContainer = originalSnowflake.parentNode;
      // snowflakeContainer.style.display = 'block';


      // get our browser's size
      // browserWidth = document.documentElement.clientWidth;
      // browserHeight = document.documentElement.clientHeight;

      // create each individual snowflake
      for (let i = 0; i < numberOfSnowflakes; i++) {

        // clone our original snowflake and add it to snowflakeContainer
        const snowflakeClone = originalSnowflake.cloneNode(true);
        snowflakeContainer.appendChild(snowflakeClone);

        // set our snowflake's initial position and related properties
        const initialXPos = getPosition(50, browserWidth);
        const initialYPos = getPosition(50, browserHeight);
        const speed = 5 + Math.random() * 40;

        // create our Snowflake object
        const snowflakeObject = new Snowflake(snowflakeClone,
          speed,
          initialXPos,
          initialYPos);
        snowflakes.push(snowflakeObject);
      }

      // remove the original snowflake because we no longer need it visible
      snowflakeContainer.removeChild(originalSnowflake);

      moveSnowflakes();
    }

    // Responsible for moving each snowflake by calling its update function
    function moveSnowflakes() {

      if (enableAnimations) {
        for (let i = 0; i < snowflakes.length; i++) {
          const snowflake = snowflakes[i];
          snowflake.update();
        }
      }

      // Reset the position of all the snowflakes to a new value
      if (resetPosition) {
        browserWidth = document.documentElement.clientWidth;
        browserHeight = document.documentElement.clientHeight;

        for (let i = 0; i < snowflakes.length; i++) {
          const snowflake = snowflakes[i];

          snowflake.xPos = getPosition(50, browserWidth);
          snowflake.yPos = getPosition(50, browserHeight);
        }

        resetPosition = false;
      }

      requestAnimationFrame(moveSnowflakes);
    }


    // This function returns a number between (maximum - offset) and (maximum + offset)
    function getPosition(offset, size) {
      return Math.round(-1 * offset + Math.random() * (size + 2 * offset));
    }

    // Trigger a reset of all the snowflakes' positions
    function setResetFlag(e) {
      resetPosition = true;
    }
  }

  doeIets(x) {
    if (!this.selected[x]) {
      this.selected[x] = true;
    } else {
      this.selected[x] = false;
    }
  }

  yesMouseOver(x) {
    if (!this.mousedOver) {
      this.mousedOver[x] = true;
    } else {
      this.mousedOver[x] = false;
    }
  }

  // navigate() {
  //   console.log('test');
  //   this.router.navigate(['/cv']);
  // }

  // testfunction() {
  //   console.log('test')
  //   const def = 'maximus';
  //   const snowflake = document.querySelectorAll('class snowflake');
  //   for (let i = 0; i < snowflake.length; i++){
  //     const element = snowflake[i];
  //     element.innerHTML = element.innerHTML.replace(def, '<span class="classname">test</span>');
  //     const spanEl = <HTMLElement> element.querySelector('span.classname');
  //     spanEl.style.color = 'red';
  //   }
  // }


  private updateSnowflakes(visibility: string, border: string, backgroundImage: string, backgroundColor: string,
                           zIndex: string, width: string, height: string, extraColors: number) {
    document.getElementById('snowflakeContainer').style.visibility = visibility;
    for (let i = 0; i < document.getElementById('snowflakeContainer').childNodes.length; i++) {
      if (typeof (document.getElementById('snowflakeContainer').childNodes[i] as HTMLElement).style !== 'undefined'
        && (document.getElementById('snowflakeContainer').childNodes[i] as HTMLElement).style !== null) {
        (document.getElementById('snowflakeContainer').childNodes[i] as HTMLElement).style.border = border;
        (document.getElementById('snowflakeContainer').childNodes[i] as HTMLElement).style.backgroundImage = backgroundImage;
        (document.getElementById('snowflakeContainer').childNodes[i] as HTMLElement).style.backgroundColor = backgroundColor;
        (document.getElementById('snowflakeContainer').childNodes[i] as HTMLElement).style.zIndex = zIndex;
        (document.getElementById('snowflakeContainer').childNodes[i] as HTMLElement).style.width = width;
        (document.getElementById('snowflakeContainer').childNodes[i] as HTMLElement).style.height = height;
        if (extraColors > 0) {
          const colours: string[] = ['#D4AF37', 'red', 'silver', 'green', 'purple'];
          (document.getElementById('snowflakeContainer').childNodes[i] as HTMLElement).style.backgroundColor
            = colours[this.getRandomInt(0, extraColors)];
          }
        }
      }
    }

  private getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }
}
