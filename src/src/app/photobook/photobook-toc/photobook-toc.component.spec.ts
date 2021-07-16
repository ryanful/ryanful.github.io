import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotobookTOCComponent } from './photobook-toc.component';

describe('PhotobookTOCComponent', () => {
  let component: PhotobookTOCComponent;
  let fixture: ComponentFixture<PhotobookTOCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotobookTOCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotobookTOCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
