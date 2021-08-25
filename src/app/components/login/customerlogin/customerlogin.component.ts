import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/services/customer.service';
import { MessengerService } from 'src/app/services/messenger.service';

@Component({
  selector: 'app-customerlogin',
  templateUrl: './customerlogin.component.html',
  styleUrls: ['./customerlogin.component.css']
})
export class CustomerloginComponent implements OnInit {

  constructor(private router: Router, private mssngerservice: MessengerService, private customerservice: CustomerService) { }
  
  mobile: number;
  password: string;
  message: string= "";
  
  onClickLoginCustomer(){
    // this.mssngerservice.sendMobileNumberToNavbar(this.mobile);
    this.mssngerservice.sendMobileNumber(this.mobile);
    this.customerservice.customerLogin(this.mobile, this.password).subscribe( data => this.message = data );
    
    if(this.message== "Logged in"){
      this.router.navigate(['/order']);
    }
  }

  ngOnInit(): void {
  }

}
