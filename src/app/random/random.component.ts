import {AfterViewInit, Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.css']
})
export class RandomComponent implements OnInit {

  items: Array<any> = [];

  constructor() {
  }

  ngOnInit(): void {
    this.items = [
      {
        'creator': 'Boob',
        'src': 'assets/pexels-veronika-bykovich-10401243.jpg'
      },
      {
        'creator': 'Boob2',
        'src': 'assets/pexels-veronika-bykovich-10401243.jpg'
      },
      {
        'creator': 'Boob2',
        'src': 'assets/pexels-veronika-bykovich-10401243.jpg'
      },
      {
        'creator': 'Boob2',
        'src': 'assets/pexels-veronika-bykovich-10401243.jpg'
      },
      {
        'creator': 'Boob2',
        'src': 'assets/pexels-veronika-bykovich-10401243.jpg'
      },
      {
        'creator': 'Boob2',
        'src': 'assets/pexels-veronika-bykovich-10401243.jpg'
      },
      {
        'creator': 'Boob2',
        'src': 'assets/pexels-veronika-bykovich-10401243.jpg'
      }
    ]
  }
}
