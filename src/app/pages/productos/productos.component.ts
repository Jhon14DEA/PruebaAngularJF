import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/domain/producto';
import { ProductoService } from 'src/app/services/producto.service';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {

  name : string = 'GPU'
  price : string = '300'
  category : string = 'Grafico'
  listado: any = [];
  constructor(private router: Router, private productoService: ProductoService) { }

  ngOnInit(): void {
  }
  
  doguardar(){
    let producto: Producto = new Producto
    producto.nombre = this.name
    producto.precio= this.price
    producto.categoria= this.category    
    this.productoService.saveProducto(producto)
    this.router.navigate(['pages/listado'])
  }
  loadContactos(){
    this.listado = this.productoService.getListaProductos();
  }


}
