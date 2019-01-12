import { Component, OnInit } from '@angular/core';
import {Usuario} from './usuario.model'
import {UsuariosService} from './usuario.service'

@Component({
  selector: 'mt-usuarios',
  templateUrl: './usuarios.component.html'
})
export class UsuariosComponent implements OnInit {
  usuarios: Usuario[]
  constructor(private usuariosService: UsuariosService) { }

  ngOnInit() {
    this.usuariosService.usuarios()
      .subscribe(usuarios => this.usuarios = usuarios)
  }

}
