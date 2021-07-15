import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoV1NavComponent } from './photo-v1-nav.component';

describe('PhotoV1NavComponent', () => {
  let component: PhotoV1NavComponent;
  let fixture: ComponentFixture<PhotoV1NavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotoV1NavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoV1NavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
