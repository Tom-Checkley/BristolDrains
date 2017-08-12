import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Testimonial } from "../components/testimonials/testimonial";
import { TESTIMONIALS } from "../mock/mock-testimonials";

@Injectable()
export class TestimonialService {

  constructor() { }

  getTestimonials(): Promise<Testimonial[]> {
    return Promise.resolve(TESTIMONIALS);
  }

}
