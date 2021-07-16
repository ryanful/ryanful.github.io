import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotobookHeaderComponent } from './photobook-header.component';

describe('PhotobookHeaderComponent', () => {
  let component: PhotobookHeaderComponent;
  let fixture: ComponentFixture<PhotobookHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotobookHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotobookHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
