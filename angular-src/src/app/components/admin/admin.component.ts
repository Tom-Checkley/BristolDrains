import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { FlashMessagesService } from "angular2-flash-messages";

import { Testimonial } from '../testimonials/testimonial';

import 'rxjs/add/operator/map';

import { TestimonialService } from "../../services/testimonial.service";
import { AuthService } from "../../services/auth.service";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  user: Object;
  testimonials: Testimonial[];

  blogActive = true;

  constructor(
    private testimonialService: TestimonialService,
    private authService: AuthService,
    private router: Router,
    private flashMessage: FlashMessagesService
  ) { }

  ngOnInit() {

    this.authService.getAdmin().subscribe(admin => {
      this.user = admin.user;
      return this.user;
    },err => {
      console.log(err);
      return false;
    });

    this.getTestimonials();
  }

  getTestimonials() {
    this.testimonialService.unverifiedTestimonials()
        .subscribe(testimonials => this.testimonials = testimonials);
  }

  onLogoutClick() {
    this.authService.logOut();
    this.flashMessage.show('Log out successfull', {cssClass: 'flash flash--success', timeout: 2000});
    this.router.navigate(['/login']);
    return false;
  }

}
