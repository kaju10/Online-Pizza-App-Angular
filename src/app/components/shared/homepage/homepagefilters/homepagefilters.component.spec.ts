import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepagefiltersComponent } from './homepagefilters.component';

describe('HomepagefiltersComponent', () => {
  let component: HomepagefiltersComponent;
  let fixture: ComponentFixture<HomepagefiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomepagefiltersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepagefiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
