import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoV1WorkComponent } from './photo-v1-work.component';

describe('PhotoV1WorkComponent', () => {
  let component: PhotoV1WorkComponent;
  let fixture: ComponentFixture<PhotoV1WorkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotoV1WorkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoV1WorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
