import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { viewCustomerById } from '../config';
import { Customer } from '../models/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private httpRequests: HttpClient) { }

  public getCustomerById(mobile: number): Observable<Customer>{
    return this.httpRequests.get<Customer>(viewCustomerById + "/" + mobile);
  }
  
}
