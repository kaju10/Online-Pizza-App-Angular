import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CouponcrudComponent } from './couponcrud.component';

describe('CouponcrudComponent', () => {
  let component: CouponcrudComponent;
  let fixture: ComponentFixture<CouponcrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CouponcrudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CouponcrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
