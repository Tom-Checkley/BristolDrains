import { Component, OnInit, trigger, state, style, transition, animate, Injectable } from '@angular/core';
import { Router } from "@angular/router";

import { Testimonial } from './testimonial';
// import { TestimonialService } from "../../services/testimonial.service";

  const TESTIMONIALS: Testimonial[]  = [
    {
      body: "Great work",
      location: "Bristol",
      author: "Tom",
      verified: false
    },
    {
      body: "Great clearance",
      location: "Brislington",
      author: "Bill",
      verified: false
    },
    {
      body: "Fast",
      location: "Keynesham",
      author: "Tom",
      verified: false
    },
  ];

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
  
  testimonials = TESTIMONIALS;

  feedbackState = 'out';

  constructor(
    // private testimonialService: TestimonialService
  ) {  }

  ngOnInit() {
    // this.getTestimonials();
  }

  toggleMenu() {
    this.feedbackState = this.feedbackState === 'out' ? 'in' : 'out';
  }

  // getTestimonials(): void {
  //   this.testimonialService.getTestimonials();
  // }

}
