import { Component, OnInit } from '@angular/core';
import { ApiService } from "../api/api.service";
import {select, Store} from '@ngrx/store'

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories = [
    {
      'title': 'Backgrounds',
      'name': 'backgrounds',
    },
    {
      'title': 'Fashion',
      'name': 'fashion',
    },
    {
      'title': 'Nature',
      'name': 'nature',
    },
    {
      'title': 'Science',
      'name': 'science',
    },
    {
      'title': 'Education',
      'name': 'education',
    },
    {
      'title': 'Feelings',
      'name': 'feelings',
    },
    {
      'title': 'Health',
      'name': 'health',
    },
    {
      'title': 'People',
      'name': 'people',
    },
    {
      'title': 'Religion',
      'name': 'religion',
    },
    {
      'title': 'Places',
      'name': 'places',
    },
    {
      'title': 'Animals',
      'name': 'animals',
    },
    {
      'title': 'Industry',
      'name': 'industry',
    },
    {
      'title': 'Computer',
      'name': 'computer',
    },
    {
      'title': 'Food',
      'name': 'food',
    },
    {
      'title': 'Transportation',
      'name': 'transportation',
    },
    {
      'title': 'Travel',
      'name': 'travel',
    },
    {
      'title': 'Buildings',
      'name': 'buildings',
    },
    {
      'title': 'Business',
      'name': 'business',
    },
    {
      'title': 'Music',
      'name': 'music',
    },
  ];

  constructor(private store: Store, private apiService: ApiService) {
  }

  ngOnInit(): void {
  }

  /*getSubCategory(category:string) {
    let that = this;
    let results: any[] = [];

    this.apiService.getImagesByCategory(category).then(result => {
      results = result.hits;
    })
  }*/

}
