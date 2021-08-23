import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor() { }

  toPrice: number;
  fromPrice: number;

  receivedData1(value: number){
    this.fromPrice=value;
  }

  receivedData2(value: number){
    this.toPrice=value;
  }

  ngOnInit(): void {
  }

}
