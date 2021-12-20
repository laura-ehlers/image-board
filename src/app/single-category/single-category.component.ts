import { Component, OnInit } from '@angular/core';
import { capitalizeFirstLetter } from "../utils/utils";

@Component({
  selector: 'app-single-category',
  templateUrl: './single-category.component.html',
  styleUrls: ['./single-category.component.css']
})
export class SingleCategoryComponent implements OnInit {

  title = '';

  constructor() { }

  ngOnInit(): void {
    let currentUrl = window.location.pathname.substring(window.location.pathname.lastIndexOf('/') + 1);
    this.title = capitalizeFirstLetter(currentUrl);
  }

}
