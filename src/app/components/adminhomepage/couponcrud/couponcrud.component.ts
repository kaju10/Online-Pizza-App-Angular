import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, NgForm } from '@angular/forms';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Coupon } from 'src/app/models/coupon';
import { CouponService } from 'src/app/services/coupon.service';

@Component({
  selector: 'app-couponcrud',
  templateUrl: './couponcrud.component.html',
  styleUrls: ['./couponcrud.component.css']
})
export class CouponcrudComponent implements OnInit {

  coupon: Coupon = new Coupon(0,"",0,"");
  coupons : any; 
  closeResult:string;
  private deleteId : number;
  id:string;
  editForm:FormGroup;


  constructor(
   private service:CouponService, 
   private modalService: NgbModal,
   private fb:FormBuilder
  ) { }

  ngOnInit(): void {
    this.getCoupons();

    this.editForm = this.fb.group(
      {
        couponId : [0],
        couponName :[''],
        discountPercentage :[0],
        couponDescription :['']
      }
    )
  }

  //modal pop-up methods

  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }



  

  

  //Create -----------------------------------------------------------------

  onSubmit() {

   this.service.addCouponService(this.coupon)
      .subscribe((result) => {
        this.ngOnInit(); 
      });
    this.modalService.dismissAll(); 
  }
  

  //Read (All) ---------------------------------------------------------------

  getCoupons(){
    this.service.getAllCouponService()
    .subscribe(
      response => {
        console.log(response);
        this.coupons = response;
      }
    );
  }


  //Read (Single)

  public findCouponById()
 {
  this.service.getCouponService(this.id)
  .subscribe(
    response => {
      console.log(response);
      this.coupons = response;
    }
  );
 }


//Update --------------------------------------------------------------------

 openEdit(targetModal: any, editCoupon: Coupon) {
  this.modalService.open(targetModal, {
    backdrop: 'static',
    size: 'lg'
  });
  this.editForm.patchValue( {
    couponId : editCoupon.couponId,
    couponName : editCoupon.couponName,
    discountPercentage :editCoupon.discountPercentage,
    couponDescription :editCoupon.couponDescription
  });
 }
 eCoupon : any;

 onSave() {
  this.eCoupon= this.editForm.value;
 this.service.updateCouponService(this.eCoupon)
    .subscribe((results) => {
      this.ngOnInit();
      this.modalService.dismissAll();
    });
}
 

  //Delete ------------------------------------------------------------------------

  openDelete(targetModal: any, delcoupon: Coupon) {
    this.deleteId = delcoupon.couponId;
    this.modalService.open(targetModal, {
      backdrop: 'static',
      size: 'lg'
    });
  }

  onDelete() {
    this.service.deleteCouponService(this.deleteId)
      .subscribe((results) => {
        this.ngOnInit();
        this.modalService.dismissAll();
      });
  }


}