import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SensorService {

  constructor(private http: HttpClient) { }

  private baseUrl: string = environment.baseUrl;

  getHomeInfo() {
    const url = this.baseUrl + 'home';
    return this.http.get(url);
  }

  getCurrentParams() {
    const url = this.baseUrl + 'params';
    return this.http.get(url);
  }

}
