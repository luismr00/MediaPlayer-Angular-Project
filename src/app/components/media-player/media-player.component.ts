import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css']
})
export class MediaPlayerComponent {
  title = 'hello-world';
  audio = new Audio();
  hasStarted = false;
  paused = true;
  songs = [
    {
      artist: 'VNV Nation',
      song: 'Dark Angel',
      source: '../assets/Dark_Angel.mp3',
      image: 'VNVNation.jpg',
    },
    {
      artist: 'Emma Chaplin',
      song: 'La Noche',
      source: '../assets/La_Noche.mp3',
      image: 'chaplin.jpg',
    },
    {
      artist: 'Blood',
      song: 'Morphine',
      source: '../assets/morphine.mp3',
      image: 'Blood.jpg',
    },
    {
      artist: 'Rammstein',
      song: 'Ich Will',
      source: '../assets/Ich_Will.mp3',
      image: 'rammstein.jpg',
    },
    {
      artist: 'Tristania',
      song: 'The Ravens',
      source: '../assets/The_Ravens.mp3',
      image: 'tristania.jpg',
    },
  ];
  currentSong = 0;
  pastSong = this.songs.length - 1;

  playPause() {
    if (this.hasStarted) {
      if (this.paused) {
        this.pickSong();
        // console.log('Playing song with index number ' + this.currentSong);
        // console.log(this.currentSong, this.pastSong);
        this.audio.play();
        this.paused = false;
      } else {
        this.audio.pause();
        this.paused = true;
      }
    }
  }

  pickSong() {
    if (this.hasStarted && this.currentSong != this.pastSong) {
      let song = this.songs[this.currentSong].source;
      this.audio.src = song;
      this.pastSong = this.currentSong;
    }
  }

  skipSong() {
    if (this.hasStarted) {
      this.currentSong++;

      if (this.currentSong > this.songs.length - 1) this.currentSong = 0;

      this.paused = true;
      this.playPause();
    }
  }

  prevSong() {
    if (this.hasStarted) {
      this.currentSong--;

      if (this.currentSong < 0) this.currentSong = this.songs.length - 1;

      this.paused = true;
      this.playPause();
    }
  }

  startPlaying() {
    console.log("startPlaying");
    this.hasStarted = true;
    this.playPause();
  }
}
