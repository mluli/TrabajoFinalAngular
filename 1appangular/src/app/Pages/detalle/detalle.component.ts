import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Producto } from 'src/app/interfaces/Productos';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss']
})
export class DetalleComponent implements OnInit {
  producto:Producto | undefined
  constructor(
    private activatedRoute:ActivatedRoute,
    private productoSrv:ProductosService
  ) { 
    const id = this.activatedRoute.snapshot.paramMap.get("productoID")
    this.activatedRoute.params
    .subscribe(data=>{
      console.log(data)
    })
    console.log("id",id)
    if(id){
      this.productoSrv.getProductoById(id).subscribe((response: any)=>{
        this.producto = response
      })
    }
    
  }

  ngOnInit(): void {
  }

}

