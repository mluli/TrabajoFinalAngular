import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(
    private http:HttpClient
  ) { }
  create(data:any){
    this.http.post("https://api.mercadolibre.com/sites/MLA/search?q=ipod",data)
  }
  update(id:number,data:any){
    this.http.put("https://api.mercadolibre.com/sites/"+id,data)
  }
  delete(id:number){
    this.http.delete("https://api.mercadolibre.com/sites/"+id)
  }
}
