import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotobookProjectsComponent } from './photobook-projects.component';

describe('PhotobookProjectsComponent', () => {
  let component: PhotobookProjectsComponent;
  let fixture: ComponentFixture<PhotobookProjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotobookProjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotobookProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
