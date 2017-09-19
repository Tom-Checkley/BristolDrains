import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';

import { AuthService } from './auth.service';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class BlogService {

  options;
  domain = this.authService.domain;

  constructor(
    private authService: AuthService,
    private http: Http
  ) { }

  createAuthenticationHeaders() {
    this.authService.loadToken();

    this.options = new RequestOptions({
      headers: new Headers({
        'Content-Type': 'application/json',
        'authorization': this.authService.authToken
      })
    });
  }

  newBlog(blog) {
    this.createAuthenticationHeaders();
    return this.http.post(this.domain + 'admin/newBlog', blog, this.options).map(res => res.json());
  }

  getAllBlogs() {
    return this.http.get(this.domain + 'public/allblogs').map(res => res.json());
  }

}
