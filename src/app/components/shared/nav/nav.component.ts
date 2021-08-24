import { Component, OnChanges, OnInit } from '@angular/core';
import { MessengerService } from 'src/app/services/messenger.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit, OnChanges {

  constructor(private mssngerservice: MessengerService) {
    console.log(this.customerMobile)
   }

  customerMobile: any;
  adminMobile: number;

  ngOnInit(): void {
    
  }

  ngOnChanges(){
    this.mssngerservice.getMobileNumberToNavbar().subscribe( data => this.customerMobile = data );
    console.log(this.customerMobile)
  }

}
