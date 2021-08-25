import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { loginAdmin } from '../config';
import { Admin } from '../models/admin';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private httpRequests: HttpClient) { }

  public adminLogin(mobile : number, password: string): Observable<string>{
    return this.httpRequests.get<string>(loginAdmin + "/" + mobile + "/" + password , {responseType: 'text' as 'json'});
  }

  registerAdmin(admin: Admin): Observable<Object>{
    return this.httpRequests.post("http://localhost:9090/saveAdmin", admin);
  }
}
