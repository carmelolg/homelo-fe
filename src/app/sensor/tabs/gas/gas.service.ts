import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GasService {

  constructor(private http: HttpClient) { }

  private baseUrl: string = environment.baseUrl;

  getGasData() {
    const url = this.baseUrl + 'gas';
    return this.http.get(url);
  }


}
