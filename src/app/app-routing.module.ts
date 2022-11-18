import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ConstructorComponent } from './pages/constructor/constructor.component';
import { HomeComponent } from './pages/home/home.component';
import { StoreComponent } from './pages/store/store.component';
import { DeliveryComponent } from './pages/delivery/delivery.component';
import { FullBlogPageComponent } from './pages/blog/full-blog-page/full-blog-page.component';
import { ProductComponent } from './pages/product/product.component';
import { CartComponent } from './pages/cart/cart.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'store', component: StoreComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'constructor', component: ConstructorComponent },
  { path: 'delivery', component: DeliveryComponent },
  { path: 'fullBlog', component: FullBlogPageComponent },
  { path: 'product/:id', component: ProductComponent },
  { path: 'cart', component: CartComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
