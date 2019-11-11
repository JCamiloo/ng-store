import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { NavComponent } from './components/nav/nav.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LayoutModule } from '@angular/cdk/layout';
import { TableComponent } from './components/table/table.component';
import { ProductsListComponent } from './components/products-list/products-list.component';

@NgModule({
  declarations: [
    ProductFormComponent,
    NavComponent,
    DashboardComponent,
    TableComponent,
    ProductsListComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    LayoutModule
  ]
})
export class AdminModule { }