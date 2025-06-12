import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Contador } from "./contador/contador";
import { Colagem } from "./colagem/colagem";
import { Botao } from "./botao/botao"
import { Musica } from "./musica/musica";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Contador, Colagem, Botao, Musica],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'Souto&I';
}
