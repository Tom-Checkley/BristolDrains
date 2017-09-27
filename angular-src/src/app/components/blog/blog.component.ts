import { Component, OnInit, Injectable } from '@angular/core';

// import { Blog } from './blog';
import { BlogService } from '../../services/blog.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  blogPosts;
  noBlogs;

  constructor(
    private blogService: BlogService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.getAllBlogs();
    this.isBlogs();
  }

  isBlogs() {
     return !this.blogPosts ? this.noBlogs = false : this.noBlogs = true;
  };

  getAllBlogs() {
    this.blogService.getAllBlogs().subscribe(data => {
      this.blogPosts = data.blogs;
    });
  }

}
