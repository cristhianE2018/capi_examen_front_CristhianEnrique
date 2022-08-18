import { Component } from '@angular/core';
import { UsuariosService } from './services/usuarios.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'capi_examen_front_CristhianEnrique';
  
  constructor(
    private UsuariosService:UsuariosService)
    {
      this.UsuariosService.getUsuarios().subscribe(resp=>{
        console.log(resp);
      })
    }

}
