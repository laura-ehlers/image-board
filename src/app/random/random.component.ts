import {AfterViewInit, Component, OnInit} from '@angular/core';
import {ApiService} from "../api/api.service";


@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.css']
})
export class RandomComponent implements OnInit {

  items: Array<any> = [];

  constructor(private apiService: ApiService) {
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

  pexels() {
    this.apiService.getRandomImage();
  }
}
