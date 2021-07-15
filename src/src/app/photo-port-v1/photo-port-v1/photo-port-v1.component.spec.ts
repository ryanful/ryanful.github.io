import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoPortV1Component } from './photo-port-v1.component';

describe('PhotoPortV1Component', () => {
  let component: PhotoPortV1Component;
  let fixture: ComponentFixture<PhotoPortV1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotoPortV1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoPortV1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
