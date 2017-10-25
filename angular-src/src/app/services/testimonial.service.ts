import { Injectable } from '@angular/core';
import {  Http, Headers, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

import { AuthService } from './auth.service';

import { Testimonial } from '../components/testimonials/testimonial';

@Injectable()
export class TestimonialService {

  domain = this.authServcie.domain;
  options;

  constructor(
    private http: Http,
    private authServcie: AuthService
  ) { }

  postTestimonial(testimonial) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.domain + 'admin/newTestimonial', testimonial).map(res => res.json());
  }

  getVerifiedTestimonials() {
    return this.http.get(this.domain + 'public/verifiedTestimonials').map(res => res.json());
  }

}
