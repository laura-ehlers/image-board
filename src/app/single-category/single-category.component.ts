import { Component, OnInit } from '@angular/core';
import { capitalizeFirstLetter } from "../utils/utils";
import {select, Store} from '@ngrx/store'
import {Observable, of} from "rxjs";
import {selectItems} from "../store/reducer";
import {getItems} from "../store/actions";
import {map, tap} from "rxjs/operators";

@Component({
  selector: 'app-single-category',
  templateUrl: './single-category.component.html',
  styleUrls: ['./single-category.component.css']
})
export class SingleCategoryComponent implements OnInit {

  title = '';
  items$: Observable<any> = of();

  // constructor(private store: Store) { }

  constructor(private store: Store<{ items: any[], error: string }>) {
  }

  ngOnInit(): void {
    this.items$ = this.store.select(selectItems).pipe(
      tap(_ => console.log(_)),
      // map(items => )
    );
    // console.log(selectCurrentCategoryItems);
    let currentUrl = window.location.pathname.substring(window.location.pathname.lastIndexOf('/') + 1);
    // this.store.dispatch(getItems({category: currentUrl}));
    this.title = capitalizeFirstLetter(currentUrl);
    // this.items$ = this.store.pipe(select(selectItems));
    console.log(this.items$)
  }

}
