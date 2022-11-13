import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-full-blog-page',
  templateUrl: './full-blog-page.component.html',
  styleUrls: ['./full-blog-page.component.css']
})
export class FullBlogPageComponent implements OnInit {

  img = './assets/img/about/benefits-1.webp'
  title = 'Заголовок Блогу!'
  date = new Date() 
  textContent = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisiLorem ipsum dolor sit amet, consectetur adipisicing elitsed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi'
  

  constructor(private router: Router) { }

  ngOnInit(): void {
    for (let index = 0; index < 4; index++) {
      this.textContent+=this.textContent;
      
    }
  }
  goToBlog() {
    this.router.navigateByUrl("blog");
  }

}
