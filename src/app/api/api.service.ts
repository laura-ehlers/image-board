import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { createClient } from 'pexels';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private client = createClient('563492ad6f91700001000001c668dfb9faa4470e9c217d6eb68aa3fe');

  constructor(private httpClient: HttpClient) { }

  getRandomImage() {
    console.log('random image');
    // return this.httpClient.get('')
  }

  getImagesByCategory(category: string) {
    console.log('category' + ' ' + category);
    // return this.httpClient.get('');
  }


}
