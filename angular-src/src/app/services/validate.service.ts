import { Injectable } from '@angular/core';

@Injectable()
export class ValidateService {

  constructor() { }

  validateRegister(user) {
    if(user.name == undefined || user.username == undefined || user.code !== 'tommadethis' || user.password == undefined || user.confirm == undefined && user.password !== user.confirm) {
      return false;
    } else {
      return true;
    }
  }

}
