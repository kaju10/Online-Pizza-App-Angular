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
  
  

  public addCouponService(coupon:Coupon): Observable<Coupon>
  {
       return this._httpClient.post<Coupon>("http://localhost:8086/savecoupon",coupon);
  }

  public getAllCouponService()
  {
    return this._httpClient.get<any>("http://localhost:8086/showcouponlist");
  }

  public getCouponService(id:any)
  {
    return this._httpClient.get("http://localhost:8086/showcoupon/"+id);
  }

  public getCouponByNameService(couponCode:any)
  {
    return this._httpClient.get("http://localhost:8086/showcouponByName/"+couponCode);
  }

  public updateCouponService(id:any,coupon:Coupon)
  {
    return this._httpClient.put<Coupon>('http://localhost:8086/updatecoupon/'+id,coupon);
  }

  public deleteCouponService(couponId:any)
  {
    return this._httpClient.delete('http://localhost:8086/deletecoupon/' + couponId);
  }
}
