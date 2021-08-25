import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { saveOrderUrl, viewAllOrders, viewMyOrders } from '../config';
import { Order } from '../models/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private httpRequests: HttpClient) { }

  public bookOrder(order: Order): Observable<Order>{
    return this.httpRequests.post<Order>( saveOrderUrl, order);
  }

  public myOrders(mobile: number): Observable<Order[]>{
    return this.httpRequests.get<Order[]>( viewMyOrders + "/" + mobile);
  }

  public viewAllOrders(): Observable<Order[]>{
    return this.httpRequests.get<Order[]>( viewAllOrders );
  }

}
