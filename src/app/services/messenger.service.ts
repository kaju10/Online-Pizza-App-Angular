import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Pizza} from '../models/pizza';

@Injectable({
  providedIn: 'root'
})
export class MessengerService {

  subject = new Subject();
  constructor() { }

  sendPizzaToCart(pizza: Pizza){
      this.subject.next(pizza);
  }



  getPizzaToCart(){
    return this.subject.asObservable();

  }
}
