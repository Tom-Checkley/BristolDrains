import { Component, OnInit } from '@angular/core';

import { Testimonial } from '../testimonials/testimonial';
import { TestimonialService } from "../../services/testimonial.service";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  testimonials: Testimonial[];

  blogActive = true;

  constructor(
    private testimonialService: TestimonialService
  ) { }

  ngOnInit() {
    this.getTestimonials();
  }

  getTestimonials(): void {
    this.testimonialService.getTestimonials()
        .then(testimonials => this.testimonials = testimonials);
  }

}
