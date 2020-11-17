import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  private isLoading: Subject<boolean> = new Subject();
  public isLoading$ = this.isLoading.asObservable();

  baseUrl: string = environment.baseUrl;

  constructor() { }

  enableLoading(): void {
    this.isLoading.next(true);

  }

  disableLoading(): void {
    this.isLoading.next(false);
  }
}
