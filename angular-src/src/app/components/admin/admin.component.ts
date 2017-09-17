import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

// import { Testimonial } from '../testimonials/testimonial';

import 'rxjs/add/operator/map';

// import { TestimonialService } from '../../services/testimonial.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  user;
  // testimonials: Testimonial[];

  blogActive = true;
  username;
  name;

  constructor(
    // private testimonialService: TestimonialService,
    private authService: AuthService,
    private router: Router,
    private flashMessage: FlashMessagesService
  ) { }

  onLogoutClick() {
    this.authService.logOut();
    this.router.navigate(['/login']);
  }

  ngOnInit() {

    this.authService.getAdmin().subscribe(data => {
      this.username = data.user.username;
      this.name = data.user.name;
    });
  }

}
