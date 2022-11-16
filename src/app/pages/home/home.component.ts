import { Component, OnInit, ViewChild } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";

SwiperCore.use([Navigation, Pagination, Autoplay]);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild('banner') banner: any;
  @ViewChild('categories') cat: any;

  activeMediaQuery = '';
  margin = "7%";
  constructor(private mediaObserver: MediaObserver) { }

  ngOnInit(): void {
    this.mediaObserver.asObservable().subscribe((change) => {
      change.forEach((item) => {
        this.activeMediaQuery = item ? `'${item.mqAlias}' = (${item.mediaQuery})` : '';

      });
    });
  }

  bannerButton1() {
    console.log('bannerButton1');
  }
  bannerButton2() {
    console.log('bannerButton2');
  }
}
