import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import { MessengerService } from 'src/app/services/messenger.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  constructor(private router: Router, private mssngerservice: MessengerService, private adminservice: AdminService) { }

  mobile: number;
  password: string;
  message: string= "";

  onClickLoginAdmin(){
    // this.mssngerservice.sendMobileNumberToNavbar(this.mobile);
    // this.mssngerservice.sendMobileNumber(this.mobile);this
    this.adminservice.adminLogin(this.mobile, this.password).subscribe( data => {
      this.message = data;
      if(this.message== "Logged in"){
        this.router.navigate(['/adminhomepage']);
      }else{
        alert("Invalid Password!");
      }
    });    
    }


  ngOnInit(): void {
  }

}
