import { Component, OnInit, ViewChild } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';
import { StoreItem } from 'src/app/models/StoreItem.model';
import { Subscription } from 'rxjs';
import SwiperCore, { Navigation, Pagination, Autoplay, SwiperOptions } from "swiper";
import { StoreService } from 'src/app/services/store.service';
import { SwiperComponent } from 'swiper/angular';
import { Router } from '@angular/router';

SwiperCore.use([Navigation, Pagination, Autoplay]);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  @ViewChild('popularSwiper', { static: false }) popularSwiper!: SwiperComponent;
  @ViewChild('roseSwiper', { static: false }) roseSwiper!: SwiperComponent;
  @ViewChild('hortenzSwiper', { static: false }) hortenzSwiper!: SwiperComponent;

  popularProducts: Array<StoreItem> = [];
  roseProducts: Array<StoreItem> = [];
  chrysProducts: Array<StoreItem> = [];
  productsSubscription: Subscription | undefined;
  activeMediaQuery = '';
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
  roseConfig: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 0,
    autoplay: {
      delay: 3000,
    },
    breakpoints: {
      600: {
        slidesPerView: 2,
        spaceBetween: 16,
      },
      960: {
        slidesPerView: 3,
        spaceBetween: 16,
      },
      1279: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1920: {
        slidesPerView: 5,
        spaceBetween: 24,
      },
    }
  };

  constructor(private mediaObserver: MediaObserver,
    private storeServise: StoreService, private router: Router) { }

  ngOnInit(): void {
    this.getPopularProducts();

    this.mediaObserver.asObservable().subscribe((change) => {
      change.forEach((item) => {
        this.activeMediaQuery = item ? `'${item.mqAlias}' = (${item.mediaQuery})` : '';
      });
    });
  }

  onBack() {
    this.popularSwiper.swiperRef.slidePrev();
  }

  onNext() {
    this.popularSwiper.swiperRef.slideNext();
  }

  getPopularMock() {
    this.popularProducts = this.storeServise.getMockProducts();
  }

  getPopularProducts() {
    this.storeServise.getPopularProducts().subscribe(data => {
      data.forEach((item) => {
        item.imageUrl = `http://18.198.2.151/images/${item.imageUrl}`;
      });

      this.popularProducts = data;
      this.roseProducts = data;
      this.chrysProducts = data;
    });
  }

  getRoseProducts() {
    this.storeServise.getRoses().subscribe(data => {
      data.forEach((item) => {
        item.imageUrl = `http://18.198.2.151/images/${item.imageUrl}`;
      });

      this.roseProducts = data;
    });
  }

  getChrysProducts() {
    this.storeServise.getChrys().subscribe(data => {
      data.forEach((item) => {
        item.imageUrl = `http://18.198.2.151/images/${item.imageUrl}`;
      });

      this.chrysProducts = data;
    });
  }

  bannerButton1() {
    this.router.navigate(['store/'], {
      queryParams: { 'flowerTypes': "roses" },
    });
  }
  bannerButton2() {
    this.router.navigate(['store/'], {
      queryParams: { 'flowerTypes': "chrysanthemums" },
    });
  }

  cat1() {
    this.router.navigate(['store/'], {
      queryParams: { 'Type': "basket" },
    });
  }
  cat2() {
    this.router.navigate(['store/'], {
      queryParams: { 'Type': "bouquet" },
    });
  }
  cat3() {
    this.router.navigate(['store/'], {
      queryParams: { 'Type': "pot" },
    });
  }

}
