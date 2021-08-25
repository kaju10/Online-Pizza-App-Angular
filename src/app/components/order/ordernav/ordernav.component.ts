import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessengerService } from 'src/app/services/messenger.service';

@Component({
  selector: 'app-ordernav',
  templateUrl: './ordernav.component.html',
  styleUrls: ['./ordernav.component.css']
})
export class OrdernavComponent implements OnInit {

  constructor(private mssngrservice: MessengerService, private router: Router) { }

  @Input() customerMobile : number;

  onClickViewMyOrders(){
  this.mssngrservice.sendMobileNumber(this.customerMobile);
  this.router.navigate(['/viewmyorders']);

  }

  ngOnInit(): void {

  }

}
