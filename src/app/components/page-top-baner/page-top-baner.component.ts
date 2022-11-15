import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-top-baner',
  templateUrl: './page-top-baner.component.html',
  styleUrls: ['./page-top-baner.component.css']
})
export class PageTopBanerComponent implements OnInit {

   public title = "FlowerShop > " 

  constructor(private router: Router) { }

  ngOnInit(): void {

    for(var val of this.router.url){
      if(val=='/')
        continue;
      this.title +=val;
    }
  }
}
