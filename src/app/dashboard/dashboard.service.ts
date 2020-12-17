import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

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

  updateAlarm(house: string, enable: boolean) {
    const url = this.baseUrl + 'alarm';
    return this.http.post<string>(url, {}, { params: { house, enable: enable.toString() }, responseType: 'text' as 'json' });
  }

  isAlarmActive(house: string) {
    const url = this.baseUrl + 'alarm';
    return this.http.get(url, { params: { house } });
  }

}
