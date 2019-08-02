import { Component } from '@angular/core';
import {ActivatedRoute, Router, RouterOutlet} from "@angular/router";
// import {fader, slider, stepper, transformer} from "./route-animations";
import {Title} from "@angular/platform-browser";
import {  trigger, transition, style, query, group, animateChild, animate, keyframes,} from '@angular/animations';
import {HashLocationStrategy, Location, LocationStrategy} from "@angular/common";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [
    trigger('routeAnimation', [
      transition('* <=> *', [
        style({ height: '!' }),
        query(':enter', style({ transform: 'translateX(100%)' })),
        query(':enter, :leave', style({ position: 'absolute', top: 50, left: 0, right: 0 })),
        // animate the leave page away
        group([
          query(':leave', [
            animate('0.5s cubic-bezier(.35,0,.25,1)', style({ transform: 'translateX(-100%)' })),
          ]),
          // and now reveal the enter
          query(':enter', animate('0.5s cubic-bezier(.35,0,.25,1)', style({ transform: 'translateX(0)' }))),
        ]),
      ]),
      // transition('* <=> *', [
      //   style({ height: '!' }),
      //   query(':enter', style({ transform: 'translateX(-100%)' })),
      //   query(':enter, :leave', style({ position: 'absolute', top: 50, left: 0, right: 0 })),
      //   // animate the leave page away
      //   group([
      //     query(':leave', [
      //       animate('0.93s cubic-bezier(.35,0,.25,1)', style({ transform: 'translateX(100%)' })),
      //     ]),
      //     // and now reveal the enter
      //     query(':enter', animate('0.93s cubic-bezier(.35,0,.25,1)', style({ transform: 'translateX(0)' }))),
      //   ]),
      // ]),
    ])
  ]
})

export class AppComponent {
  title = 'InteractieveCVFrank';

  constructor(
    private router: Router,
    activatedRoute: ActivatedRoute,
    title: Title

  ) { }

  getDepth = outlet => outlet.activatedRouteData['depth'];

  prepareRoute(outlet: RouterOutlet){
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

  naarHome() {
    this.router.navigate(['/welcome'])
  }

  naarGames() {
    this.router.navigate(['/games'])
  }

  naarFrank() {
    this.router.navigate(['/frank'])
  }
  naarCV() {
    this.router.navigate(['/cv'])
  }
}
