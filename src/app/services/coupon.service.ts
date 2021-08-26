import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { viewAllCouponUrl } from '../config';
import { Coupon } from '../models/coupon';

@Injectable({
  providedIn: 'root'
})
export class CouponService {

  constructor(private _httpClient: HttpClient) { }


    public getAllCoupons(): Observable<Coupon[]>{
      return this._httpClient.get<Coupon[]>(viewAllCouponUrl);
    }
  
  
  public addCouponService(coupon:Coupon)
  {
       return this._httpClient.post<Coupon>("http://localhost:9090/savecoupon",coupon);
  }

  public getAllCouponService(): Observable<Coupon>
  {
    return this._httpClient.get<any>("http://localhost:9090/showcouponlist");
  }

  public getCouponService(id:any): Observable<Coupon>
  {
    return this._httpClient.get<any>("http://localhost:9090/showcoupon/"+id);
  }


  public updateCouponService(coupon:Coupon) : Observable<Coupon>
  {
    return this._httpClient.put<Coupon>('http://localhost:9090/updatecoupon/',coupon);
  }

  public deleteCouponService(couponId:any)
  {
    return this._httpClient.delete('http://localhost:9090/deletecoupon/' + couponId);
  }
}