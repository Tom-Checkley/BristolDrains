import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Testimonial } from "../components/testimonials/testimonial";

@Injectable()
export class TestimonialService {

  constructor() { }

  getTestimonials() {
    console.log('testimonials recieved');
  }

}
