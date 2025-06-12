import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-botao',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './botao.html',
  styleUrls: ['./botao.css']
})
export class Botao {
popupAberto = false;

mostrarPopup() {
  this.popupAberto = true;
}

fecharPopup() {
  this.popupAberto = false;
}

}