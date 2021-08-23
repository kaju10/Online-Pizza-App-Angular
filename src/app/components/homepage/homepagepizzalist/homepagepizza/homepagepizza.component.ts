import { Component, Input, OnInit } from '@angular/core';
import { Pizza } from 'src/app/models/pizza';
import { MessengerService } from 'src/app/services/messenger.service';

@Component({
  selector: 'app-homepagepizza',
  templateUrl: './homepagepizza.component.html',
  styleUrls: ['./homepagepizza.component.css']
})
export class HomepagepizzaComponent implements OnInit {


  @Input() pizza: Pizza;

  
  constructor(private msg: MessengerService) { }

  ngOnInit(): void {
  }

}
