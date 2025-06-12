import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-contador',
  imports: [],
  templateUrl: './contador.html',
  styleUrl: './contador.css'
})
export class Contador implements OnDestroy {

  dias: number = 0;
  horas: number = 0;
  minutos: number = 0;
  segundos: number = 0;

  nossoNamoversario = new Date('2023-09-11T13:23:00');
  intervalo: any;

  constructor() {
    this.atualizarContador();
    this.intervalo = setInterval(() => {
      this.atualizarContador();
    }, 1000);
  }

  atualizarContador() {
    const agora = new Date().getTime();
    const inicio = this.nossoNamoversario.getTime();
    const diferenca = agora - inicio;

    const segundosTotais = Math.floor(diferenca / 1000);

    this.dias = Math.floor(segundosTotais / (3600 * 24));
    this.horas = Math.floor((segundosTotais % (3600 * 24)) / 3600);
    this.minutos = Math.floor((segundosTotais % 3600) / 60);
    this.segundos = segundosTotais % 60;
  }

  ngOnDestroy() {
    clearInterval(this.intervalo);
  }
}
