import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Order } from '../models/order';
import { Pizza} from '../models/pizza';
import { Pizzasender } from '../models/pizzasender';

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
  
  sendPizzaToCartUsingButton(pizzaFromButton: Pizzasender){
    this.subject2.next(pizzaFromButton);
  }
  getPizzaToCartUsingButton(){
    return this.subject2.asObservable();
  }

  orderId: number;
  sendOrderIdToOrderPlaced(id: number){
    this.orderId= id;
  }
  getOrderIdToOrderPlaced(){
    return this.orderId;
  }



  mobileNumber: number;
  sendMobileNumber(mobile: number){
    this.mobileNumber=mobile;
  }
  getMobileNumber(){
    return this.mobileNumber;
  }

}
