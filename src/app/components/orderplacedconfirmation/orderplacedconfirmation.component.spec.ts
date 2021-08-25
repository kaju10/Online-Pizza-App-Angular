import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderplacedconfirmationComponent } from './orderplacedconfirmation.component';

describe('OrderplacedconfirmationComponent', () => {
  let component: OrderplacedconfirmationComponent;
  let fixture: ComponentFixture<OrderplacedconfirmationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderplacedconfirmationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderplacedconfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
