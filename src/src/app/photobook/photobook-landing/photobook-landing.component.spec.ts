import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotobookLandingComponent } from './photobook-landing.component';

describe('PhotobookLandingComponent', () => {
  let component: PhotobookLandingComponent;
  let fixture: ComponentFixture<PhotobookLandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotobookLandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotobookLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
