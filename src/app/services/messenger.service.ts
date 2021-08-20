import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Pizza} from '../models/pizza';

@Injectable({
  providedIn: 'root'
})
export class MessengerService {

  subject = new Subject();
  constructor() { }

  sendMsg(pizza: Pizza){
      this.subject.next(pizza);
  }



  getMsg(){
    return this.subject.asObservable();

  }
}
