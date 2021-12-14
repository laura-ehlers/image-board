import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  name1 = 'My Design';
  name2 = 'Categories';
  name3 = 'Random';

  constructor() {
  }

  focusMethod = function getFocus() {
    // @ts-ignore
    document.getElementById("searchInput").focus();
    let x = document.getElementById("searchInput");
    console.log(x);
  }
}
