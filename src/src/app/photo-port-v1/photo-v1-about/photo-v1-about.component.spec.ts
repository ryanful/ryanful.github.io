import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoV1AboutComponent } from './photo-v1-about.component';

describe('PhotoV1AboutComponent', () => {
  let component: PhotoV1AboutComponent;
  let fixture: ComponentFixture<PhotoV1AboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotoV1AboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoV1AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
