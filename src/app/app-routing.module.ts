import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoComponent } from './pages/listado/listado.component';
import { ProductosComponent } from './pages/productos/productos.component';

const routes: Routes = [
  {path: "pages/productos", component: ProductosComponent},
  {path: "pages/listado", component: ListadoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
