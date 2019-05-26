import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  searchText: string;

  constructor(public router: Router) { }

  ngOnInit() {
  }

  /**
   * Make the search request
   */
  search(): void {
    if (this.searchText) {
      this.router.navigateByUrl("/students/" + this.searchText);
    }
  }
}
