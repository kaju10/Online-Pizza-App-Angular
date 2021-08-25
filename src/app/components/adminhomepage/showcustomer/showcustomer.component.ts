import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-showcustomer',
  templateUrl: './showcustomer.component.html',
  styleUrls: ['./showcustomer.component.css']
})
export class ShowcustomerComponent implements OnInit {

  customers:any;
  // singlecustomer:any;
   mobile:any;
     constructor( private service:AdminService) { }
 
 
     ngOnInit():void{
 
       let resp=this.service.viewCustomers();
       resp.subscribe((data)=>this.customers=data);
     }
     public findCustomerById(){
       let resp= this.service.findCustomers(this.mobile);
       resp.subscribe( response => {
         console.log(response);
         this.customers= response;
       });
      }
      //public findCustomerById(){
       //let resp= this.service.findCustomers(this.mobile);
      // resp.subscribe((data)=>this.singlecustomer=data);
      //}
   

}
