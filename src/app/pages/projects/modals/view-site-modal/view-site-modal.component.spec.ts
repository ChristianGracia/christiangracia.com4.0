import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSiteModalComponent } from './view-site-modal.component';

describe('ViewSiteModalComponent', () => {
  let component: ViewSiteModalComponent;
  let fixture: ComponentFixture<ViewSiteModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewSiteModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSiteModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
