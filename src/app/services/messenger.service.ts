import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Pizza} from '../models/pizza';

@Injectable({
  providedIn: 'root'
})
export class MessengerService {

  subject1 = new Subject();
  subject2 = new Subject();
  constructor() { }

  sendPizzaToCart(pizza: Pizza){
      this.subject1.next(pizza);
  }
  getPizzaToCart(){
    return this.subject1.asObservable();
  }



  mobileNumber: number;
  sendMobileNumber(mobile: number){
    this.mobileNumber=mobile;
  }
  getMobileNumber(){
    return this.mobileNumber;
  }


  
  sendMobileNumberToNavbar(mobile: number){
    this.subject2.next(mobile);
  }
  getMobileNumberToNavbar(){
    return this.subject2.asObservable();
  }


}
