import { Component, OnInit, Injectable } from '@angular/core';

import { Blog } from "./blog";
import { BlogService } from "../../services/blog.service";

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  blogs: Blog[];

  constructor(
    private blogService: BlogService
  ) { }

  ngOnInit() {
    this.getBlogs();
  }

  getBlogs(): void {
    this.blogService.getBlogs()
        .then(blogs => this.blogs = blogs);
  }

}
