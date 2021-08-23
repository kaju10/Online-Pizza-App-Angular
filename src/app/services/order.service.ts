import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { saveOrderUrl } from '../config';
import { Order } from '../models/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private httpRequests: HttpClient) { }

  public bookOrder(order: Order){
    return this.httpRequests.post<Order>(saveOrderUrl,order);
  }


}
