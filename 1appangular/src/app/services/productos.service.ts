import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(
    private http:HttpClient
  ) { }
  getProductosObservable(){
    return this.http.get("https://api.mercadolibre.com/sites/MLA/search?q=ipod").pipe(map((val: any=4) => { return val["results"]}))
  }
  getProductos(){
    return this.http.get("https://api.mercadolibre.com/sites/MLA/search?q=ipod").toPromise()
  }
  getProductoById(id:string) {
    return this.http.get("https://api.mercadolibre.com/items/"+id)

  }
  create(){

  }
}