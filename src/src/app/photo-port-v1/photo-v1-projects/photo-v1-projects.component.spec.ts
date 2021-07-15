import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoV1ProjectsComponent } from './photo-v1-projects.component';

describe('PhotoV1ProjectsComponent', () => {
  let component: PhotoV1ProjectsComponent;
  let fixture: ComponentFixture<PhotoV1ProjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotoV1ProjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoV1ProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
