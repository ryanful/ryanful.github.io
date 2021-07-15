import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotobookAboutComponent } from './photobook-about.component';

describe('PhotobookAboutComponent', () => {
  let component: PhotobookAboutComponent;
  let fixture: ComponentFixture<PhotobookAboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotobookAboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotobookAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
