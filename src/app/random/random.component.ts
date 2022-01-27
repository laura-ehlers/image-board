import {AfterViewInit, Component, OnInit} from '@angular/core';
import {ApiService} from "../api/api.service";
import { Store } from '@ngrx/store';
import {getItems, getItems2, setItems} from "../store/actions";
import {selectItems} from "../store/reducer";


@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.css']
})
export class RandomComponent implements OnInit {

  _items: any[] = [];

  constructor(private apiService: ApiService, private store: Store) {
  }

  ngOnInit(): void {
    this.items = [];
  }

  async pexels() {
    this.items = [];
    document.getElementsByClassName('rotate')[0].classList.toggle('down');
    let localItems: any = await this.apiService.getRandomImages();
    this.items = localItems.hits.map((hit: any) => ({'creator': hit.user, 'src': hit.webformatURL}));
    console.log(this.items);
    this.store.dispatch(setItems({ items: this.items}));
    // console.log(localItems);
      /*.then(results => {
      results.hits.forEach((result: any) => {
        let item = { 'creator': result.user, 'src': result.webformatURL};
        this.items.push(item);
      })
     }).then(_ => this.store.dispatch(setItems({ items: this.items })))*/;
  }

  get items(): any {
    return this._items;
  }
  set items(val: any) {
    this._items = val;
  }
}
