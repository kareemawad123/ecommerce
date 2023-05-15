import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundPageComponent } from './Components/not-found-page/not-found-page.component';
import { MainContentComponent } from './Components/main-content/main-content.component';
import { GroupOfRoutesComponent } from './Components/group-of-routes/group-of-routes.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/group/Home', pathMatch: 'full' },
  {
    path: 'group', component: GroupOfRoutesComponent, children: [
      { path: '', redirectTo: '/group/Home', pathMatch: 'full' },
      { path: 'Home', component: MainContentComponent, title: 'Home' },
      { path: 'prd/:id', component: ProductDetailsComponent, title: 'Product Details' },
    ]
  },
  // { path: 'prd/:id', component: ProductDetailsComponent, title: 'Product Details' },
  {
    path: 'buy',
    loadChildren: () => import('src/app/Components/add-products-to-buy/add-products-to-buy.module')
      .then(m => m.AddProductsToBuyModule),
  },
  {
    path: 'pro',
    loadChildren: () => import('src/app/Components/user-view-module/user-view-module.module')
      .then(m => m.UserViewModuleModule),
  },

  { path: '**', component: NotFoundPageComponent, title: 'Not Found Page' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
