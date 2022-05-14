import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyAnimatedIconComponent } from './lazy-animated-icon.component';

describe('LazyAnimatedIconComponent', () => {
  let component: LazyAnimatedIconComponent;
  let fixture: ComponentFixture<LazyAnimatedIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LazyAnimatedIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LazyAnimatedIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
