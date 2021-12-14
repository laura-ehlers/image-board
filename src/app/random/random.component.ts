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

    this.items = [];
  }

  pexels() {
    this.apiService.getRandomImage().then(results => {
      results.hits.forEach((result: any) => {
        this.items.push({'creator': 'Test', 'src': result.webformatURL});
      })
      // this.items;
      // console.log(result);
    });
    // console.log(this.items)
  }
}
