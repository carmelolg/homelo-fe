import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TemperatureService {

  constructor(private http: HttpClient) { }

  private baseUrl: string = environment.baseUrl;

  getTemperatureData() {
    const url = this.baseUrl + 'temperature';
    return this.http.get(url);
  }


}
