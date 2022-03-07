import {SingleCategoryComponent} from "./single-category.component";
import {ApiService} from "../api/api.service";

describe('PageNotFound', () => {
  let mockService: ApiService;
  it('should initialize PageNotFound component', function () {
    let comp = new SingleCategoryComponent(mockService);
    expect(comp).toBeTruthy();
  });
})
