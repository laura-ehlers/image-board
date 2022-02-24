import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CategoriesComponent} from "./categories/categories.component";
import {SearchComponent} from "./search/search.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {SingleCategoryComponent} from "./single-category/single-category.component";

const routes: Routes = [

  {
    path: '',
    redirectTo: '/search',
    pathMatch: 'full'
  },
  {
    path: 'categories',
    component: CategoriesComponent,
  },
  {
    path: 'categories/:categoryName',
    component: SingleCategoryComponent
   },
  { path: 'search',
    component: SearchComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
