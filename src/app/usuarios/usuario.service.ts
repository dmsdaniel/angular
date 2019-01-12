import { Injectable } from '@angular/core'
import { Http } from '@angular/http'
import { Usuario } from './usuario.model'
import { MEAT_API } from '../app.api';
import {Observable} from  'rxjs/Observable'
import 'rxjs/add/operator/map'
@Injectable()
export class UsuariosService {

    constructor(private http: Http) { }
    usuarios(): Observable<Usuario[]> {
        return this.http.get(`${MEAT_API}/usuarios`)
        .map(response => response.json())
    }
}