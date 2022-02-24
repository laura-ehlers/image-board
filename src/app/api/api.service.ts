import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {searchImages} from 'pixabay-api';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  // api connection for request with empty searchstring (when entering the page for the first time)
  getRandomImages() {
    return searchImages('24820906-d5dae2f9641e319a6153a3841', '', {per_page: 8, page: 1});
  }

  // api connection for request when searching for any searchterm
  getImagesByCategory(category: string) {
    return searchImages('24820906-d5dae2f9641e319a6153a3841', category, {per_page:8, page:1});
  }
}
