import { Component, OnInit, Input } from '@angular/core';
import {Usuario} from '../usuario.model'

@Component({
  selector: 'mt-usuario',
  templateUrl: './usuario.component.html'
})
export class UsuarioComponent implements OnInit {
  
  @Input() usuario: Usuario
  
  constructor() { }

  ngOnInit() {
  }

}
