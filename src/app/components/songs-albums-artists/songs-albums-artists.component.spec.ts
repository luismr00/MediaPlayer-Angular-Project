import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SongsAlbumsArtistsComponent } from './songs-albums-artists.component';

describe('SongsAlbumsArtistsComponent', () => {
  let component: SongsAlbumsArtistsComponent;
  let fixture: ComponentFixture<SongsAlbumsArtistsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SongsAlbumsArtistsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SongsAlbumsArtistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
