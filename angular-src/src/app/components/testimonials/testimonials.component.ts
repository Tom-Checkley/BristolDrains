import { Component, OnInit, trigger, state, style, transition, animate, Injectable } from '@angular/core';
import { Router } from "@angular/router";
// import {  } from "@angular/forms";

import 'rxjs/add/operator/map';

import { Testimonial } from './testimonial';
import { TestimonialService } from "../../services/testimonial.service";

  

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
  
  testimonials: Testimonial[];

  feedbackState = 'out';

  constructor(
    private testimonialService: TestimonialService
  ) {  }

  ngOnInit() {
    this.getTestimonials();
  }

  toggleMenu() {
    this.feedbackState = this.feedbackState === 'out' ? 'in' : 'out';
  }

  getTestimonials(): void {
    this.testimonialService.verifiedTestimonials()
        .subscribe(testimonials => this.testimonials = testimonials);
  }

}
