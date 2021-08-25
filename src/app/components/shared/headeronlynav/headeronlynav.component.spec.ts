import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderonlynavComponent } from './headeronlynav.component';

describe('HeaderonlynavComponent', () => {
  let component: HeaderonlynavComponent;
  let fixture: ComponentFixture<HeaderonlynavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderonlynavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderonlynavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
