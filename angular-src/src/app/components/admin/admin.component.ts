import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FlashMessagesService } from 'angular2-flash-messages';

// import { Testimonial } from '../testimonials/testimonial';

import 'rxjs/add/operator/map';

// import { TestimonialService } from '../../services/testimonial.service';
import { BlogService } from '../../services/blog.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  user;
  // testimonials: Testimonial[];
  // newPost = false;
  blogActive = true;
  messageClass;
  message;
  username;
  name;
  form;
  processing = false;

  constructor(
    // private testimonialService: TestimonialService,
    private authService: AuthService,
    private blogService: BlogService,
    private formBuilder: FormBuilder,
    private router: Router,
    private flashMessage: FlashMessagesService
  ) {
    this.createNewBlogForm();
  }

  onLogoutClick() {
    this.authService.logOut();
    this.router.navigate(['/login']);
  }

  createNewBlogForm() {
    this.form = this.formBuilder.group({
      locationPosted: ['', Validators.compose([Validators.required])],
      blogBody: '',
      imgUrl: '',
      createdBy: ['', Validators.compose([Validators.required])]
    });
  }

  enableFormNewBlogForm() {
    this.form.get('imgUrl').enable();
    this.form.get('blogBody').enable();
    this.form.get('locationPosted').enable();
  }

  disableFormNewBlogForm() {
    this.form.get('imgUrl').disable();
    this.form.get('blogBody').disable();
    this.form.get('locationPosted').disable();
  }

  onBlogSubmit() {
    this.processing = true;
    this.disableFormNewBlogForm();

    const blog = {
      imgUrl: this.form.get('imgUrl').value,
      blogBody: this.form.get('blogBody').value,
      locationPosted: this.form.get('locationPosted').value,
      createdBy: this.name
    };

    this.blogService.newBlog(blog).subscribe(data => {
      if(!data.success) {
        this.messageClass = 'alert alert-danger';
        this.message = data.message;
        this.processing = false;
        this.enableFormNewBlogForm();
      } else {
        this.messageClass = 'alert alert-success';
        this.message = data.message;
        setTimeout(() => {
          this.processing = false;
          this.message = false;
          this.form.reset();
          this.enableFormNewBlogForm();
        }, 2000);
      }
    })
  }

  ngOnInit() {

    this.authService.getAdmin().subscribe(data => {
      this.username = data.user.username;
      this.name = data.user.name;
    });
  }

}
