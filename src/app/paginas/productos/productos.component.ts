import {Component, OnInit} from '@angular/core';
import {ProductosService} from "../../servicios/productos.service";

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})

export class ProductosComponent implements OnInit{
  datos:any;
  constructor(private productosService: ProductosService) {
  }

  ngOnInit() {
    this.productosService.obtenerProductos().subscribe(
      datos => this.datos = datos)

    }

}