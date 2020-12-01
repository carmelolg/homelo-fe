import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HouseService {

  constructor(private http: HttpClient) { }

  private baseUrl: string = environment.baseUrl;

  getHouses() {
    const url = this.baseUrl + 'house';
    return this.http.get(url);
  }

  removeHouse(code) {
    const url = this.baseUrl + 'home';
    return this.http.delete(url, {params: {code}});
  }
}
