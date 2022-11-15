import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-top-baner',
  templateUrl: './page-top-baner.component.html',
  styleUrls: ['./page-top-baner.component.css']
})
export class PageTopBanerComponent implements OnInit {

  protected title = "FlowerShop"

  constructor() { }

  ngOnInit(): void {
  }
  setTitleText(newTitle:string): void{
    this.title = newTitle;
  }
}
