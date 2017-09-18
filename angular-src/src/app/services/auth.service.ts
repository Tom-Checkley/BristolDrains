import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { tokenNotExpired } from 'angular2-jwt';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {

  domain = 'http://localhost:8080/';
  authToken;
  user;
  options;

  constructor(
    private http: Http,
  ) { }

  createAuthenticationHeaders() {
    this.loadToken();
    this.options = new RequestOptions({
      headers: new Headers({
        'Content-Type': 'application/json',
        'authorization': this.authToken
      })
    })
  }

  loadToken() {
    const token = localStorage.getItem('token');
    this.authToken = token;
  }

  // Function to register user accounts
  registerUser(user) {
    return this.http.post(this.domain + 'authentication/register', user).map(res => res.json());
  }

  // Function to check if username is taken
  checkUsername(username) {
    return this.http.get(this.domain + 'authentication/checkUsername/' + username).map(res => res.json());
  }

  login(user) {
    return this.http.post(this.domain + 'authentication/login', user).map(res => res.json());
  }

  logOut() {
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }

  storeUserData(token, user) {
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  getAdmin() {
    this.createAuthenticationHeaders();
    return this.http.get(this.domain + 'authentication/admin', this.options).map(res => res.json());
  }

  loggedIn() {
    return tokenNotExpired();
  }
}
