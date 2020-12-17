import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  constructor(private http: HttpClient) { }

  private baseUrl: string = environment.baseUrl;

  getDevices() {
    const url = this.baseUrl + 'sensor';
    return this.http.get(url);
  }

  saveDevices(data) {

    const url = this.baseUrl + 'sensor';
    return this.http.post<string>(url, data, {responseType: 'text' as 'json'}).subscribe(result => {});
  }

  getHomeInfo() {
    const url = this.baseUrl + 'home';
    return this.http.get(url);
  }
}
