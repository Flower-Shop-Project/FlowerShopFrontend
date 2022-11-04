import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { StoreService } from 'src/app/services/store.service';
import { MatDrawer, MatDrawerMode, MatDrawerToggleResult } from '@angular/material/sidenav';
import { MediaChange, MediaObserver } from '@angular/flex-layout';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})

export class StoreComponent implements OnInit {
  constructor(private mediaObserver: MediaObserver, private storeServise: StoreService) { }
  mediaSubscription: Subscription | undefined;
  private activeMediaQuery = '';
  products: Array<Product> = [];
  mode: MatDrawerMode = "side";
  opened: boolean = true;

  ngOnInit(): void {
    this.products = this.storeServise.getProducts();

    this.mediaSubscription = this.mediaObserver.asObservable().subscribe((change) => {
      if (change[0].mqAlias == 'xs' || change[0].mqAlias == 'sm') {
        console.log("xs or sm");
        this.closeDrawer();
      }
      change.forEach((item) => {
        this.activeMediaQuery = item ? `'${item.mqAlias}' = (${item.mediaQuery})` : '';
        if (item.mqAlias == 'lt-sm') {
          this.closeDrawer();
        }
        else if (item.mqAlias == 'gt-sm') {
          this.openDrawer();
        }
        console.log('activeMediaQuery', this.activeMediaQuery);
      });
    });

    // if (this.media.isActive('xs') || this.media.isActive('sm')) {
    //   this.mode = "over";
    //   this.opened = false;
    //   console.log("mobile");
    // }
    // if (this.media.isActive('gt-sm')) {
    //   this.mode = "side";
    //   this.opened = true;
    //   console.log("desktop");
    // }

  }

  openDrawer() {
    this.opened = true;
  }

  closeDrawer() {
    this.opened = false;
  }

  ngOnDestroy(): void {
    this.mediaSubscription?.unsubscribe();
  }
}