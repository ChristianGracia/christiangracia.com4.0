import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepoCommitModalComponent } from './repo-commit-modal.component';

describe('RepoCommitModalComponent', () => {
  let component: RepoCommitModalComponent;
  let fixture: ComponentFixture<RepoCommitModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepoCommitModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepoCommitModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
