import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentlyPlayedSongsComponent } from './recently-played-songs.component';

describe('RecentlyPlayedSongsComponent', () => {
  let component: RecentlyPlayedSongsComponent;
  let fixture: ComponentFixture<RecentlyPlayedSongsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecentlyPlayedSongsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentlyPlayedSongsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
