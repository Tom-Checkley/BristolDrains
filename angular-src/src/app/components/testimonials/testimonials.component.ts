import { Component, OnInit, trigger, state, style, transition, animate, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

import 'rxjs/add/operator/map';

import { Testimonial } from './testimonial';
import { TestimonialService } from '../../services/testimonial.service';

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
  messageClass;
  message;
  form;
  body;
  location;
  name;
  testimonial;
  verifiedTestimonials;


  feedbackState = 'out';

  constructor(
    private testimonialService: TestimonialService,
  ) { }

  ngOnInit() {
    this.testimonialService.getVerifiedTestimonials().subscribe(data => {
      this.verifiedTestimonials = data.testimonials;
    });
    
  }

  toggleMenu() {
    this.feedbackState = this.feedbackState === 'out' ? 'in' : 'out';
  }

  onTestimonialSubmit() {
    const testimonial = {
      location: this.location,
      author: this.name,
      body: this.message
    };
    this.testimonialService.postTestimonial(testimonial).subscribe(data => {
      if (!data.success) {
        console.log(data.err);
      }
      this.testimonial = data.testimonial;
    });
  }
}
