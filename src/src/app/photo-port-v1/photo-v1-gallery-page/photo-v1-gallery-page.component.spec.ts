import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoV1GalleryPageComponent } from './photo-v1-gallery-page.component';

describe('PhotoV1GalleryPageComponent', () => {
  let component: PhotoV1GalleryPageComponent;
  let fixture: ComponentFixture<PhotoV1GalleryPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotoV1GalleryPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoV1GalleryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
