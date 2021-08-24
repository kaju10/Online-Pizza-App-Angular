import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessengerService } from 'src/app/services/messenger.service';

@Component({
  selector: 'app-customerlogin',
  templateUrl: './customerlogin.component.html',
  styleUrls: ['./customerlogin.component.css']
})
export class CustomerloginComponent implements OnInit {

  constructor(private router: Router, private mssngerservice: MessengerService) { }
  mobile: number=8876543210;
  
  onClickLogin(){
    this.mssngerservice.sendMobileNumberToNavbar(this.mobile);
    this.mssngerservice.sendMobileNumber(this.mobile);
    
    this.router.navigate(['/order']);
  }

  ngOnInit(): void {
  }

}
