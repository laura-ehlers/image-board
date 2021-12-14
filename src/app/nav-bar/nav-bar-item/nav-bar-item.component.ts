import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-nav-bar-item',
  templateUrl: './nav-bar-item.component.html',
  styleUrls: ['./nav-bar-item.component.css']
})
export class NavBarItemComponent implements OnInit {

  @Input() navItemName: string = '';

  constructor() {
  }

  ngOnInit(): void {

  }

}

