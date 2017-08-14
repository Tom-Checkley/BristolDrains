import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Blog } from "../components/blog/blog";
import { BLOGS } from "../mock/mock-blogs";

@Injectable()
export class BlogService {

  constructor() { }

  getBlogs(): Promise<Blog[]> {
    return Promise.resolve(BLOGS);
  }

}
