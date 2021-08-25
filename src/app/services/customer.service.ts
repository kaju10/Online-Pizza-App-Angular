import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { loginCustomer, viewCustomerById } from '../config';
import { Customer } from '../models/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private httpRequests: HttpClient) { }

  public getCustomerById(mobile: number): Observable<Customer>{
    return this.httpRequests.get<Customer>(viewCustomerById + "/" + mobile);
  }
  

  public customerLogin(mobile : number, password: string): Observable<string>{
    return this.httpRequests.get<string>(loginCustomer + "/" + mobile + "/" + password , {responseType: 'text' as 'json'});
  }

  public registerCustomer(customer: Customer): Observable<Object>{
    return this.httpRequests.post("http://localhost:9090/saveCustomer", customer);
  }
}
