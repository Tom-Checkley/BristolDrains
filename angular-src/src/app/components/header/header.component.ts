import { Component, OnInit, trigger, state, style, transition, animate } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('slideInOut', [
      state('in', style({
        display: 'block',
        left: '0'
      })),
      state('out', style({
        left: '100%',
        display: 'none'
      })),
      transition('in => out', animate('400ms ease-in-out')),
      transition('out => in', animate('400ms ease-in-out'))
    ]),
  ]
})
export class HeaderComponent implements OnInit {

  menuState = 'out';
  dropDownState = 'up';
  smallScreen;

  constructor() { }

  ngOnInit() {
    this.screenWidth();
  }

  screenWidth() {
    if (window.innerWidth >= 800) {
      this.menuState = 'in';
      this.smallScreen = false;
    } else {
      this.menuState = 'out';
      this.smallScreen = true;
    }
  }

  toggleMenu() {
    if (window.innerWidth <= 800) {
      this.menuState = this.menuState === 'out' ? 'in' : 'out';
    }
  }
}
