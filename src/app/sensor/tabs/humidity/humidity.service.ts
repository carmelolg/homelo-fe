import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HumidityService {

  constructor(private http: HttpClient) { }

  private baseUrl: string = environment.baseUrl;

  getHumidityData() {
    const url = this.baseUrl + 'humidity';
    return this.http.get(url);
  }


}
