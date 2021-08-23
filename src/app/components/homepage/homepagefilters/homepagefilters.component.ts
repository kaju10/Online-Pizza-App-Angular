import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-homepagefilters',
  templateUrl: './homepagefilters.component.html',
  styleUrls: ['./homepagefilters.component.css']
})
export class HomepagefiltersComponent implements OnInit {

  from: number=0;
  to: number=2000;

  @Output() public sendfromPrice = new EventEmitter<number>();
  @Output() public sendtoPrice = new EventEmitter<number>();

  filterForm = new FormGroup({
    fromPrice: new FormControl(),
    toPrice: new FormControl()
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
        
  }

  

  ngOnInit(): void {
    
    this.sendfromPrice.emit(this.from);
    this.sendtoPrice.emit(this.to);
    
  }

}
