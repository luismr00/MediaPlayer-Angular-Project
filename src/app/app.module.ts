import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MediaPlayerComponent } from './components/media-player/media-player.component';
import { SongsAlbumsArtistsComponent } from './components/songs-albums-artists/songs-albums-artists.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MediaPlayerComponent,
    SongsAlbumsArtistsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
