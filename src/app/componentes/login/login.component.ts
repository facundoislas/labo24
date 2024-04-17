import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Usuario } from '../../clases/usuario';
import { BienvenidoComponent } from '../bienvenido/bienvenido.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, BienvenidoComponent, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  usuario: Usuario = new Usuario();
  ingreso!: boolean;
  ingresar()
  {
    if(this.usuario.clave != "" && this.usuario.nombre !="")
      {
        this.ingreso = true;
      }
    else{
      this.ingreso = false
    }
  }
}
