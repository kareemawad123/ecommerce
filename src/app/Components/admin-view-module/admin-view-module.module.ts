import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AddNewProductComponent } from './add-new-product/add-new-product.component';

const routes : Routes = [
  {path:'new-product', component: AddNewProductComponent, title: 'Add New Product'},
];

@NgModule({
  declarations: [
    AddNewProductComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ]
})
export class AdminViewModuleModule { }
