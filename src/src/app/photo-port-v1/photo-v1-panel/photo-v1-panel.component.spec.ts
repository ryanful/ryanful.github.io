import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoV1PanelComponent } from './photo-v1-panel.component';

describe('PhotoV1PanelComponent', () => {
  let component: PhotoV1PanelComponent;
  let fixture: ComponentFixture<PhotoV1PanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotoV1PanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoV1PanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
