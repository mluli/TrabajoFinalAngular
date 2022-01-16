import { Component, OnInit } from '@angular/core';
import { Producto, ResponseProductos } from 'src/app/interfaces/Productos';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  cantidad:number=1
  alumnos:string[]=["1","2"]
  productos:Producto[]=[]
  constructor(
    private productosSrv:ProductosService
  ) { 
    this.getProductos()
  }
  async getProductos(){
    try{
      const data: any = await this.productosSrv.getProductos()
      console.log(data)
      if(data.results){
        this.productos=data.results
      }
    }catch(e){
      console.log(e)
    }
  }
  

  ngOnInit(): void {
    
  }

}
