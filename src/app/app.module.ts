import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavBarComponent} from './nav-bar/nav-bar.component';
import {NavBarItemComponent} from './nav-bar/nav-bar-item/nav-bar-item.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatIconModule} from "@angular/material/icon";
import {FooterComponent} from './footer/footer.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MyDesignComponent} from './my-design/my-design.component';
import {CategoriesComponent} from './categories/categories.component';
import {RandomComponent} from './random/random.component';
import {RouterModule} from '@angular/router';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    NavBarItemComponent,
    FooterComponent,
    MyDesignComponent,
    CategoriesComponent,
    RandomComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatIconModule,
    FlexLayoutModule,
    MatSidenavModule,
    RouterModule.forRoot([
      {path: 'my-design', component: MyDesignComponent},
      {path: 'categories', component: CategoriesComponent},
      {path: 'random', component: RandomComponent},
      {path: '', redirectTo: '/random', pathMatch: 'full'},
      {path: '**', component: PageNotFoundComponent}
    ]),
    MatButtonModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
