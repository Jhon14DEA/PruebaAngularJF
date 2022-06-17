import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductoService } from 'src/app/services/producto.service';


@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent implements OnInit {

  listado: any = []
  
  constructor(private router: Router,private productoService: ProductoService) { }

  ngOnInit(): void {
  }
  
  loadContactos(){
    this.listado = this.productoService.getListaProductos()
  }

  goContactos(){
    this.router.navigate(['pages/productos'])
  }


}
