import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {
  value: string = '';
  constructor() { }

  ngOnInit(): void {
  }

  search() {
    if (this.isValid()) {
      console.log(this.value);
    }
  }

  isValid() {
    return this.value && this.value.trim();
  }
}
