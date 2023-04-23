import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor() { }

  private showRegisterComponent = new BehaviorSubject<boolean>(true);

  toggleRegisterComponent(show: boolean): void {
    this.showRegisterComponent.next(show);
  }

  getShowRegisterComponent(): Observable<boolean> {
    return this.showRegisterComponent.asObservable();
  }
}
