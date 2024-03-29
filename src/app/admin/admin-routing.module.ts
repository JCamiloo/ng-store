import { DatesComponent } from './components/dates/dates.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { NavComponent } from './components/nav/nav.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { TableComponent } from './components/table/table.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FormProductComponent } from './components/form-product/form-product.component';

const routes: Routes = [
  { 
    path: '', 
    component: NavComponent,
    children: [
      { path: '', component: DashboardComponent },
      { path: 'create', component: ProductFormComponent },
      { path: 'table', component: TableComponent },
      { path: 'products', component: ProductsListComponent },
      { path: 'products/create', component: FormProductComponent },
      { path: 'products/edit/:id', component: ProductEditComponent },
      { path: 'dates', component: DatesComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
