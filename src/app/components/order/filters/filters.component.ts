import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {

  constructor() { }

  from: number=0;
  to: number=2000;

  @Output() public sendfromPrice = new EventEmitter<number>();
  @Output() public sendtoPrice = new EventEmitter<number>();

  filterForm = new FormGroup({
    fromPrice: new FormControl(0),
    toPrice: new FormControl(2000)
  });

  onFilter(){
    if(this.filterForm.controls['fromPrice'].value == null){
      this.from= 0;
    }else{
      this.from= this.filterForm.controls['fromPrice'].value;
    }
    console.log(this.from);

    if(this.filterForm.controls['toPrice'].value == null){
      this.to= 2000;
    }else{
      this.to= this.filterForm.controls['toPrice'].value;
    }
    console.log(this.to);
    
    this.ngOnInit();
    // this.sendfromPrice.emit(this.from);
    // this.sendtoPrice.emit(this.to);
    
  }

  

  ngOnInit(): void {
    
    this.sendfromPrice.emit(this.from);
    this.sendtoPrice.emit(this.to);
    // this.onFilter();
  }

}
