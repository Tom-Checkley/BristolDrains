import { Component, OnInit, trigger, state, style, transition, animate } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss'],
  animations: [
    trigger('slideInOut', [
      state('in', style({
        display: 'block',
        left: '0'
      })),
      state('out', style({
        left: '-100%',
        display: 'none'
      })),
      transition('in => out', animate('400ms ease-in-out')),
      transition('out => in', animate('400ms ease-in-out'))
    ]),
  ]
})

export class TestimonialsComponent implements OnInit {

  feedbackState = 'out';

  constructor() { }

  ngOnInit() {
  }

  toggleMenu() {
    this.feedbackState = this.feedbackState === 'out' ? 'in' : 'out';
  }

}
