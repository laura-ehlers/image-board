import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {searchImages} from 'pixabay-api';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  async getRandomImage(): Promise<any> {
    console.log('random image');
    let images = [];

    return await searchImages('24820906-d5dae2f9641e319a6153a3841', 'baby', {per_page: 20, page: 1});
    // return this.httpClient.get('')
  }

  getImagesByCategory(category: string) {
    console.log('category' + ' ' + category);
    // return this.httpClient.get('');
  }


}
