import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { SwiperModule } from 'swiper/angular';


import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatInputModule } from '@angular/material/input';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatSelectModule} from '@angular/material/select';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { StoreComponent } from './pages/store/store.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ConstructorComponent } from './pages/constructor/constructor.component';
import { BlogComponent } from './pages/blog/blog.component';
import { StoreItemComponent } from './pages/store/components/store-item/store-item.component';
import { FiltersComponent } from './pages/store/components/filters/filters.component';
import { PlusMinusButtonComponent } from './components/plus-minus-button/plus-minus-button.component';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { FlowersTypeFilterComponent } from './pages/store/components/filters/flowers-type-filter/flowers-type-filter.component';
import { ProductsPriceFilterComponent } from './pages/store/components/filters/products-price-filter/products-price-filter.component';
import { ProductsTypeFilterComponent } from './pages/store/components/filters/products-type-filter/products-type-filter.component';
import { DeliveryComponent } from './pages/delivery/delivery.component';
import { BlogPreviewComponent } from './components/blog-preview/blog-preview.component';
import { FullBlogPageComponent } from './pages/blog/full-blog-page/full-blog-page.component';
import { PageTopBanerComponent } from './components/page-top-baner/page-top-baner.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    StoreComponent,
    HeaderComponent,
    FooterComponent,
    ConstructorComponent,
    BlogComponent,
    StoreItemComponent,
    FiltersComponent,
    PlusMinusButtonComponent,
    SearchbarComponent,
    FlowersTypeFilterComponent,
    ProductsPriceFilterComponent,
    ProductsTypeFilterComponent,
    DeliveryComponent,
    BlogPreviewComponent,
    FullBlogPageComponent,
    PageTopBanerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule,
    FlexLayoutModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatInputModule,
    MatExpansionModule,
    FormsModule,
    HttpClientModule,
    MatDividerModule,
    MatListModule,
    ReactiveFormsModule,
    MatSelectModule,
    RouterModule,
    SwiperModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
