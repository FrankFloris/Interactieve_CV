import { Component, OnInit } from '@angular/core';
import {RouterOutlet} from "@angular/router";
// import {fader} from "../route-animations";

@Component({
  selector: 'app-over-frank',
  templateUrl: './over-frank.component.html',
  styleUrls: ['./over-frank.component.css'],
})

export class OverFrankComponent implements OnInit {

  selected: boolean[] = [false, false, false, false, false, false];
  mousedOver: boolean[] = [false, false, false, false, false, false, false, false];

  constructor() { }

  ngOnInit() {
  }

  doeIets(x){
    if(!this.selected[x]) {
      this.selected[x] = true;
    } else {
      this.selected[x] = false;
    }
  }

  // doeIetsAnders(x) {
  //   this.selected[x] = false;
  // }

  // mouseOver(x) {
  //   if(!this.mousedOver){
  //     this.mousedOver[x] = true;
  //   } else {
  //     this.mousedOver[x] = false;
  //   }
  // }

  mouseOver(x) {
    this.mousedOver[x] = true;
  }

  mouseNotOver(x){
    this.mousedOver[x] = false;
  }

}
