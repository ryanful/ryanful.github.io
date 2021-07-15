import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotobookNavComponent } from './photobook-nav.component';

describe('PhotobookNavComponent', () => {
  let component: PhotobookNavComponent;
  let fixture: ComponentFixture<PhotobookNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotobookNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotobookNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
