import {CategoriesComponent} from "./categories.component";
import {ApiService} from "../api/api.service";

describe('CategoriesComponent', () => {
  let mockService: ApiService;
  it('should initialize categories component', function () {
    let comp = new CategoriesComponent(mockService);
    expect(comp).toBeTruthy();
  });
})
