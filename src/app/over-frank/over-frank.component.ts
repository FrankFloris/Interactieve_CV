import {Component, HostListener, OnInit} from '@angular/core';
import {RouterOutlet} from '@angular/router';
// import {fader} from "../route-animations";

import bodyScroll from 'body-scroll-toggle';

@Component({
  selector: 'app-over-frank',
  templateUrl: './over-frank.component.html',
  styleUrls: ['./over-frank.component.css'],
})

export class OverFrankComponent implements OnInit {

  selected: boolean[] = [true, true, true, true, true, true, true];
  mousedOver: boolean[] = [false, false, false, false, false, false, false, false];

  constructor() { }

  ngOnInit() {
    document.getElementById('snowflakeContainer').style.visibility = 'hidden';
  }

  inUitklappen(x) {
    this.selected[x] = !this.selected[x];
  }

  mouseOver(x) {
    this.mousedOver[x] = true;
  }

  mouseNotOver(x) {
    this.mousedOver[x] = false;
  }

  closeModal() {
    const modal = document.getElementById('myModal');
    modal.style.display = 'none';
    bodyScroll.enable();
  }

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      this.closeModal();
    }
  }

  addModal(id: string) {
    const myImage = document.getElementById(id) as HTMLImageElement;
    const modal = document.getElementById('myModal');
    const modalImg = document.getElementById('modalImage') as HTMLImageElement;
    const captionText = document.getElementById('caption');
    modalImg.src = myImage.src;
    modalImg.alt = myImage.alt;
    captionText.innerHTML = modalImg.alt;
    modal.style.display = 'block';
    bodyScroll.disable();
  }

}
