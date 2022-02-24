import { Component, OnInit } from '@angular/core';
import { capitalizeFirstLetter } from "../utils/utils";
import { ApiService } from '../api/api.service';
import { faArrowAltCircleDown } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-single-category',
  templateUrl: './single-category.component.html',
  styleUrls: ['./single-category.component.css']
})
export class SingleCategoryComponent implements OnInit {

  // title of each single category page
  title = '';

  // icon definition 
  icons = {
    download: faArrowAltCircleDown,
  }

  // items that are shown on the category page
  items$: any[] = [];

  constructor(private apiService: ApiService) {
    
  }

  // current category items are loaded from apiService when component is initiated
  ngOnInit(): void {
    let currentUrl = window.location.pathname.substring(window.location.pathname.lastIndexOf('/') + 1);
    this.apiService.getImagesByCategory(currentUrl).then((items) => {
      this.items$ = items.hits.map((hit: any) => ({'creator': hit.user, 'src': hit.webformatURL}));
    })
    this.title = capitalizeFirstLetter(currentUrl);
  }

  // function to download a single image
  async downloadImage(imageSrc: string) {
    const image = await fetch(imageSrc)
    const imageBlog = await image.blob()
    const imageURL = URL.createObjectURL(imageBlog)
  
    const link = document.createElement('a')
    link.href = imageURL
    link.download = 'test'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

}
