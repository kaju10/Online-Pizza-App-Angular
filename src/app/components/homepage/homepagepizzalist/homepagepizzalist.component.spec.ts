import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepagepizzalistComponent } from './homepagepizzalist.component';

describe('HomepagepizzalistComponent', () => {
  let component: HomepagepizzalistComponent;
  let fixture: ComponentFixture<HomepagepizzalistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomepagepizzalistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepagepizzalistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
