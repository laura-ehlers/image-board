import {Component, OnInit} from '@angular/core';
import {ApiService} from "../api/api.service";
import {faArrowAltCircleDown} from '@fortawesome/free-regular-svg-icons';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  // items that are shown on the search page
  _items: any[] = [];

  // icon definition
  icons = {
    download: faArrowAltCircleDown,
  }

  constructor(private apiService: ApiService) {
  }

  // when component is initiated
  ngOnInit(): void {
    this.pexels();
  }

  async search() {
    const searchTerm = (<HTMLInputElement>document.getElementById('searchInput')).value
    this.apiService.getImagesByCategory(searchTerm).then((items) => {
      this._items = items.hits.map((hit: any) => ({'creator': hit.user, 'src': hit.webformatURL}));
    })
  }

  // function to access apiService when first accessing the website for the first time
  async pexels() {
    this.items = [];
    let localItems: any = await this.apiService.getRandomImages();
    this.items = localItems.hits.map((hit: any) => ({'creator': hit.user, 'src': hit.webformatURL}));
  }

  // function to download a single image
  async downloadImage(imageSrc: string) {
    const image = await fetch(imageSrc)
    const imageBlob = await image.blob()
    const imageURL = URL.createObjectURL(imageBlob)

    const link = document.createElement('a')
    link.href = imageURL
    link.download = 'download';
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  // getter for items property
  get items(): any {
    return this._items;
  }

  // setter for items property
  set items(val: any) {
    this._items = val;
  }
}
