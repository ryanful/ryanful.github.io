import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotobookContactComponent } from './photobook-contact.component';

describe('PhotobookContactComponent', () => {
  let component: PhotobookContactComponent;
  let fixture: ComponentFixture<PhotobookContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotobookContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotobookContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
