import { Component, OnInit, trigger, state, style, transition, animate, Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { FormControl, FormGroup, FormBuilder, Validators } from "@angular/forms";

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
  
  messageClass;
  message;
  form;

  feedbackState = 'out';

  constructor(
    private testimonialService: TestimonialService,
    private formBuilder: FormBuilder,
    private formGroup: FormGroup,
    private formControl: FormControl,
    private validators: Validators
  ) {
    // this.createNewTestimonialForm();
  }
  
  // createNewTestimonialForm() {
  //   this.form = this.formBuilder.group({
  //     name: ['', Validators.compose([
  //       Validators.required
  //     ])],
  //     location: ['', Validators.compose([
  //       Validators.required
  //     ])],
  //     message: ['', Validators.compose([
  //       Validators.required
  //     ])]
  //   })
  // }

  ngOnInit() {
    // this.getTestimonials();
    // this.testimonialService.verifiedTestimonials()
    //   .subscribe(testimonials => this.testimonials = testimonials);
  }

  toggleMenu() {
    this.feedbackState = this.feedbackState === 'out' ? 'in' : 'out';
  }

  onTestimonialSubmit() {
    console.log('testimonial submitted')
  }

  // getTestimonials(): void {
    
  // }

}
