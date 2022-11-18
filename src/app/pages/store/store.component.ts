import { Component, OnInit } from '@angular/core';
import { StoreItem } from 'src/app/models/StoreItem.model';
import { StoreService } from 'src/app/services/store.service';
import { MatDrawerMode } from '@angular/material/sidenav';
import { MediaObserver } from '@angular/flex-layout';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})

export class StoreComponent implements OnInit {
  mediaSubscription: Subscription | undefined;
  productsSubscription: Subscription | undefined;
  activeMediaQuery = '';
  products: Array<StoreItem> = [];
  mode: MatDrawerMode = "side";
  opened: boolean = true;
  queryParams = {};
  search = "";

  constructor(
    private mediaObserver: MediaObserver,
    private storeServise: StoreService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.queryParams = { params };
      this.searchProduct(params);
    });

    // this.getMockProducts();

    this.mediaSubscription = this.mediaObserver.asObservable().subscribe((change) => {
      change.forEach((item) => {
        this.activeMediaQuery = item ? `'${item.mqAlias}' = (${item.mediaQuery})` : '';
        if (item.mqAlias == 'xs' || item.mqAlias == 'sm') {
          this.closeDrawer();
        }
        else if (item.mqAlias == 'gt-sm') {
          this.openDrawer();
        }
      });
    });

  }

  searchProduct(params: Params) {
    this.storeServise.searchProduct(params).subscribe((data) => {
      this.products = data;
    });
  }

  openDrawer() {
    this.opened = true;
  }

  closeDrawer() {
    this.opened = false;
  }

  getProducts(): void {
    this.productsSubscription = this.storeServise.getAllProducts().subscribe((data) => {
      data.forEach((item) => {
        item.imageUrl = `https://18.198.2.151/images/${item.imageUrl}`;
      });

      this.products = data;
    });
  }

  getMockProducts() {
    this.products = this.storeServise.getMockProducts();
  }

  ngOnDestroy(): void {
    this.mediaSubscription?.unsubscribe();
  }
}