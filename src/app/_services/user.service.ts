import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { User, AuthResponse } from '@models';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  authToken: any;
  user: any;

  constructor(private http: HttpClient) { }

  registerUser(user): Observable<AuthResponse> {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post<AuthResponse>('http://localhost:3300/users/register', user, {headers: headers})
      .pipe(map(data => data));
  }

  authenticateUser(user): Observable<AuthResponse> {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post<AuthResponse>('http://localhost:3300/users/authenticate', user, {headers: headers})
      .pipe(map(data => data));
  }

  storeUserData(token, user) {
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  getProfile() {
    const headers = new HttpHeaders({
      'Authorization': localStorage.getItem('id_token'), 'Content-Type': 'application/json'
    });
    this.loadToken();
    return this.http.get<AuthResponse>('http://localhost:3300/users/profile', {headers: headers})
      .pipe(map(data => data));
  }


  loadToken() {
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }

  // getArtistTracks(query) {
  //   return this.http.get(`http://localhost:3300/users/getalbums/${query}`);
  // }

  logout() {
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }

}
