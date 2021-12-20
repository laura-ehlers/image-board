import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MyDesignComponent} from "./my-design/my-design.component";
import {CategoriesComponent} from "./categories/categories.component";
import {RandomComponent} from "./random/random.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {SingleCategoryComponent} from "./single-category/single-category.component";

const routes: Routes = [

  {
    path: '',
    redirectTo: '/random',
    pathMatch: 'full'
  },
  {
    path: 'my-design',
    component: MyDesignComponent
  },
  {
    path: 'categories',
    component: CategoriesComponent,
  },
  {
    path: 'categories/:categoryName',
    component: SingleCategoryComponent
   },
  { path: 'random',
    component: RandomComponent
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
