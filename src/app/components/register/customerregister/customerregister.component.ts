import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/customer';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customerregister',
  templateUrl: './customerregister.component.html',
  styleUrls: ['./customerregister.component.css']
})
export class CustomerregisterComponent implements OnInit {

  constructor(private service: CustomerService) { }
  customer: Customer = new Customer(0, "", "", "customer", "", "", "");
  ngOnInit(): void {
  }

  userType:string="Customer";
  registerCustomer(){
    this.service.registerCustomer(this.customer).subscribe(
      data=>console.log("response received"),
      error=>console.log("exception occured")
    )
    alert("Customer details registered successfully");
}

}
