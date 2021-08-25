import { Component, OnInit } from '@angular/core';
import { Admin } from 'src/app/models/admin';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-adminregister',
  templateUrl: './adminregister.component.html',
  styleUrls: ['./adminregister.component.css']
})
export class AdminregisterComponent implements OnInit {

  constructor(private service: AdminService) { }
  
  admin: Admin = new Admin(0, "", "", "admin", "");

  ngOnInit(): void {
  }

  userType:string="Admin";
  registerAdmin(){
    this.service.registerAdmin(this.admin).subscribe(
      data=>console.log("response received"),
      error=>console.log("exception occured")
    )
    alert("Admin details registered successfully");
  }

}
