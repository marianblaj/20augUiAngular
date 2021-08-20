import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CheckpointsPageComponent} from "./pages/checkpoints-page/checkpoints-page.component";
import {CartComponent} from "./components/cart/cart.component";
import {ProductsComponent} from "./components/products/products.component";
import {LoginComponent} from "./components/security/login/login.component";

const routes: Routes = [
  {path: "login", component: LoginComponent},
  {path: "register", component: CheckpointsPageComponent},
  {path: "products", component: ProductsComponent},
  {path: "cart", component: CartComponent},
  {path: '', redirectTo: 'students', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
