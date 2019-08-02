import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cv-pagina',
  templateUrl: './cv-pagina.component.html',
  styleUrls: ['./cv-pagina.component.css']
})
export class CvPaginaComponent implements OnInit {

  selected: boolean[] = [false, false, false, false, false, false];
  mousedOver: boolean[] = [false, false, false, false, false, false, false, false];

  constructor() { }

  ngOnInit() {
  }

  doeIets(x){
    this.selected[x] = !this.selected[x];
  }

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
