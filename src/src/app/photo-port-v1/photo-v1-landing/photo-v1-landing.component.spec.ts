import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoV1LandingComponent } from './photo-v1-landing.component';

describe('PhotoV1LandingComponent', () => {
  let component: PhotoV1LandingComponent;
  let fixture: ComponentFixture<PhotoV1LandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotoV1LandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoV1LandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
