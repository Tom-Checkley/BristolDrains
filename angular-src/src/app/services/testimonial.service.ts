import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

import { Testimonial } from "../components/testimonials/testimonial";
// import { TESTIMONIALS } from "../mock/mock-testimonials";

@Injectable()
export class TestimonialService {

  constructor(private http: Http) { }

  // verifiedTestimonials() {
  //   let headers = new Headers();
  //   headers.append('Content-Type', 'application/json');
  //   return this.http.get('http://localhost:3000/users/verifiedTestimonials', {headers: headers})
  //     .map(res => res.json());
  //   // return Promise.resolve(TESTIMONIALS);
  // }
  // unverifiedTestimonials() {
  //   let headers = new Headers();
  //   headers.append('Content-Type', 'application/json');
  //   return this.http.get('http://localhost:3000/users/unverifiedTestimonials', {headers: headers})
  //     .map(res => res.json());
  //   // return Promise.resolve(TESTIMONIALS);
  // }

}
