import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {searchImages} from 'pixabay-api';
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  getRandomImages() {
    return searchImages('24820906-d5dae2f9641e319a6153a3841', '', {per_page: 8, page: 1});
  }

  getImagesByCategory(category: string): Observable<any> {
    return of(searchImages('24820906-d5dae2f9641e319a6153a3841', category, {per_page:8, page:1}));
  }
}
