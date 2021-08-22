import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { viewAllCouponUrl } from '../config';
import { Coupon } from '../models/coupon';

@Injectable({
  providedIn: 'root'
})
export class CouponService {

  constructor(private httpRequests: HttpClient) { }



    public getAllCoupons(): Observable<Coupon[]>{
      return this.httpRequests.get<Coupon[]>(viewAllCouponUrl);
    }
}
