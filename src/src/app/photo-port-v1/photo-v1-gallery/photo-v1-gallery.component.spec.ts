import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoV1GalleryComponent } from './photo-v1-gallery.component';

describe('PhotoV1GalleryComponent', () => {
  let component: PhotoV1GalleryComponent;
  let fixture: ComponentFixture<PhotoV1GalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotoV1GalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoV1GalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
