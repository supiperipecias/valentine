import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-musica',
  imports: [],
  templateUrl: './musica.html',
  styleUrl: './musica.css'
})
export class Musica implements OnInit{
    private audio = new Audio();
  public isPlaying = false;

  ngOnInit() {
    this.audio.src = '/musica.mp3'; // troque pelo seu caminho correto
    this.audio.loop = true;
    this.audio.volume = 0.5;
  }

  play() {
    this.audio.play();
    this.isPlaying = true;
  }

  pause() {
    this.audio.pause();
    this.isPlaying = false;
  }

  toggle() {
    this.isPlaying ? this.pause() : this.play();
  }
}
