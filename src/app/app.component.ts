import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { BienvenidoComponent } from './componentes/bienvenido/bienvenido.component';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './componentes/login/login.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, RouterLink, RouterLinkActive, BienvenidoComponent, CommonModule, LoginComponent], //common es para el *ngIf
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'primerProyecto';

  edadUno!: number;
  edadDos!: number;

  suma!: number;
  promedio!: number;

  calcular()
  {
    this.suma = this.edadUno + this.edadDos;
    this.promedio = this.suma/2;
  }

  limpiar()
  {
    this.edadUno =0;
    this.edadDos = 0;
    this.suma = 0;
    this.promedio = 0;
  }
}
