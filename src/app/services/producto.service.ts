import { Injectable } from '@angular/core';
import { Producto } from '../domain/producto';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  
  listado: any = []

  constructor( private afs : AngularFirestore) { }

  getProductos(){
    return this.listado
  }

  setProducto(producto: Producto){
    this.listado.push(producto);
  }
 saveProducto(producto: Producto){
  const refProducto = this.afs.collection("productos");
  if(producto.uid ==''){
    producto.uid = this.afs.createId();
  }
  refProducto.doc(producto.uid).set(Object.assign({},producto));
 }
 getListaProductos(){
  const refProducto = this.afs.collection("productos");
  return refProducto.valueChanges();
}
}


