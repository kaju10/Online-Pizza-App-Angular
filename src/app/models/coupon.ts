export class Coupon {
    couponId : number;
    couponName : string;
    discountPercentage : number;
    couponDescription : string;

    constructor(couponId : number,  couponName : string, discountPercentage : number, couponDescription : string){
        this.couponId= couponId;
        this.couponName= couponName;
        this.discountPercentage= discountPercentage;
        this.couponDescription= couponDescription;
    }
}
