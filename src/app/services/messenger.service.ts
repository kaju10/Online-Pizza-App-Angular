import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Pizzamodel} from '../models/pizzamodel';

@Injectable({
  providedIn: 'root'
})
export class MessengerService {

  subject = new Subject();
  constructor() { }

  sendMsg(pizza: Pizzamodel){
      this.subject.next(pizza);
  }



  getMsg(){
    return this.subject.asObservable();

  }
}
