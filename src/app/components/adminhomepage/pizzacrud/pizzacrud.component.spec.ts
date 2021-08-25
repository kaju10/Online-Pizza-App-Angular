import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzacrudComponent } from './pizzacrud.component';

describe('PizzacrudComponent', () => {
  let component: PizzacrudComponent;
  let fixture: ComponentFixture<PizzacrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PizzacrudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzacrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
