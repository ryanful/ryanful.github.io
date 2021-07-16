import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotobookPortfolioComponent } from './photobook-portfolio.component';

describe('PhotobookPortfolioComponent', () => {
  let component: PhotobookPortfolioComponent;
  let fixture: ComponentFixture<PhotobookPortfolioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotobookPortfolioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotobookPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
