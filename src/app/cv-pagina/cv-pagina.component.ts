import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cv-pagina',
  templateUrl: './cv-pagina.component.html',
  styleUrls: ['./cv-pagina.component.css']
})
export class CvPaginaComponent implements OnInit {

  selected: boolean[] = [true, true, true, true, true, true, true];
  mousedOver: boolean[] = [false, false, false, false, false, false, false, false];

  constructor() { }

  ngOnInit() {
    document.getElementById('snowflakeContainer').style.visibility = 'hidden';
  }

  openClose(x) {
    this.selected[x] = !this.selected[x];
  }

  mouseOver(x) {
    this.mousedOver[x] = true;
  }

  mouseNotOver(x) {
    this.mousedOver[x] = false;
  }

}
