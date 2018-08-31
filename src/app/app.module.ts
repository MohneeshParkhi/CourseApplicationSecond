import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import {RecipeListComponent} from './recipes/recipe-list/recipe-list.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeDetailComponent } from './Recipes/recipe-detail/recipe-detail.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingListEditComponent } from './shopping-list/shopping-list-edit/shopping-list-edit.component';
import {RecipeItemComponent} from './recipes/recipe-list/recipe-item/recipe-item.component';
import { DynamicRoutingMarketComponentComponent } from './dynamic-routing-market-component/dynamic-routing-market-component.component';
import {Routes,RouterModule} from '@angular/router';
import { AlbumDetailsComponent } from './dynamic-routing-market-component/album-details/album-details.component';
//import { AlbumDetailComponentComponent } from './dynamic-routing-market-component/album-detail-component/album-detail-component.component';


const appRoutes:Routes=[{path:'albums/:id',component:AlbumDetailsComponent}];

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    RecipeListComponent,
    RecipeItemComponent,
  
   
    RecipesComponent,
    RecipeDetailComponent,
    ShoppingListComponent,
    ShoppingListEditComponent,
    DynamicRoutingMarketComponentComponent,
    AlbumDetailsComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {








 }
