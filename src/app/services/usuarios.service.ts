import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  url = 'http://localhost/usuarios_domicilio'

  constructor(
    private http: HttpClient
  ) { }

  getUsuarios(){

    let header = new HttpHeaders().set('Type-content', 'aplication/json')

    return this.http.get(this.url, {
      headers: header
    });
  }
}
