import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {
  //private fb:FormBuilder = new FormBuilder()
  myForm:FormGroup
  constructor(
    private fb:FormBuilder,
    private usuariosSrv:UsuariosService
  ) { 
    
    this.myForm=this.fb.group({
      nombre:["",[Validators.required,Validators.minLength(3)]],
      correo:["",[Validators.required]],
      clave:["",[Validators.required]]
    })
  }
  registrarse(){
    console.log(this.myForm.value)
    this.usuariosSrv.create(this.myForm.value)
  }

  ngOnInit(): void {
  }

}
