import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Product, StoreItem } from 'src/app/models/StoreItem.model';
import { StoreService } from 'src/app/services/store.service';
import SwiperCore, { FreeMode, Navigation, Thumbs, SwiperOptions, Autoplay } from "swiper";

SwiperCore.use([FreeMode, Navigation, Thumbs, Autoplay]);


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {
  thumbsSwiper: any;
  id = 0;
  product = <Product>{ name: "Loading...", description: "Loading...", images: ["Loading..."], price: 0 };
  popularProducts: Array<StoreItem> = [];

  popularConfig: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 0,
    autoplay: {
      delay: 3000,
    },
    breakpoints: {
      600: {
        slidesPerView: 2,
      },
      960: {
        slidesPerView: 3,
      },
      1279: {
        slidesPerView: 4,
      },
      1920: {
        slidesPerView: 5,
      },
    }
  };

  constructor(private route: ActivatedRoute, private storeServise: StoreService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });

    this.getProduct(this.id);
    this.getPopularProducts();
  }

  getProduct(id: number) {
    this.storeServise.getProduct(id).subscribe(data => {
      data.images.forEach((image, index) => {
        data.images[index] = `http://18.198.2.151/images/${image}`;
        console.log(data.images[index]);
      });

      this.product = data;
    });
    console.log(this.product.images);
  }

  getPopularProducts() {
    this.storeServise.getPopularProducts().subscribe(data => {
      data.forEach((item) => {
        item.imageUrl = `http://18.198.2.151/images/${item.imageUrl}`;
      });

      this.popularProducts = data;
    });
  }

  addToCart() {
    console.log("add to cart");
  }
}
