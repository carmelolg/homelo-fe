import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  private baseUrl: string = environment.baseUrl;

  getUsers() {
    const url = this.baseUrl + 'user';
    return this.http.get(url);
  }

  removeUser(user) {
    const url = this.baseUrl + 'user';
    return this.http.delete(url, { params: { user } });
  }

  saveUser(user) {
    const url = this.baseUrl + 'user';
    return this.http.post<string>(url, user, { responseType: 'text' as 'json' });
  }
}
