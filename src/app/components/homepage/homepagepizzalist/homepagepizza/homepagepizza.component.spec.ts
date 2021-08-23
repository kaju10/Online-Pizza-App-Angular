import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepagepizzaComponent } from './homepagepizza.component';

describe('HomepagepizzaComponent', () => {
  let component: HomepagepizzaComponent;
  let fixture: ComponentFixture<HomepagepizzaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomepagepizzaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepagepizzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
