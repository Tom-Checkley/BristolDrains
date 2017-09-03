import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { FlashMessagesService } from "angular2-flash-messages";

import { ValidateService } from "../../services/validate.service";
import { AuthService } from "../../services/auth.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  name: 'String';
  username: 'String';
  code: 'String';
  password: 'String';
  confirm: 'String';

  constructor(
    private validateService: ValidateService,
    private authService: AuthService,
    private router: Router,
    private flashMessage: FlashMessagesService
  ) { }

  ngOnInit() {
  }

  onRegisterSubmit() {
    const user = {
      name: this.name,
      username: this.username,
      password: this.password,
      confirm: this.confirm,
      code: this.code
    }
    if(!this.validateService.validateRegister(user)) {
      
      this.flashMessage.show('Registration failed, please ensure all fields are entered, your passwords match and the correct invitation code is used', {cssClass: 'flash flash--warn', timeout: 3000});
      return false;
    } else {
      this.flashMessage.show('You have successfully registered', {cssClass: 'flash flash--success', timeout: 2000});
    }
    this.authService.registerUser(user).subscribe(data => {
      if (data.success) {
        this.flashMessage.show('You have successfully registered', {cssClass: 'flash flash-success', timeout: 2000});
        this.router.navigate(['/login']);
      } else {
        this.router.navigate(['/register']);
      }
    });
  }

}
