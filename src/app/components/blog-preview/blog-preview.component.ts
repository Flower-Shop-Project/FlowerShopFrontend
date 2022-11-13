import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-blog-preview',
  templateUrl: './blog-preview.component.html',
  styleUrls: ['./blog-preview.component.css']
})
export class BlogPreviewComponent implements OnInit {

  img = './assets/img/about/benefits-1.webp'
  title = 'Заголовок Блогу!'
  date = new Date() 
  description = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisiLorem ipsum dolor sit amet, consectetur adipisicing elitsed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.....'
  
  
  constructor() { }

  ngOnInit(): void {
  }

   
}
