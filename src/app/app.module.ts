import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { FooterComponent } from './Components/footer/footer.component';
import { MainComponent } from './Components/main/main.component';
import { HeaderComponent } from './Components/header/header.component';
import { IndexComponent } from './Components/index/index.component';
import { ContentComponent } from './Components/content/content.component';
import { PShadowDirective } from './directives/p-shadow.directive';
import { FormsModule } from '@angular/forms';
import { CreditFormat } from './Custom pipe/credit-format';
import { MainContentComponent } from './Components/main-content/main-content.component';
import { CartTableComponent } from './Components/cart-table/cart-table.component';
import { NotFoundPageComponent } from './Components/not-found-page/not-found-page.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { GroupOfRoutesComponent } from './Components/group-of-routes/group-of-routes.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    MainComponent,
    HeaderComponent,
    IndexComponent,
    ContentComponent,
    PShadowDirective,
    CreditFormat,
    MainContentComponent,
    CartTableComponent,
    NotFoundPageComponent,
    ProductDetailsComponent,
    GroupOfRoutesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
