import { Routes } from '@angular/router';
import { ProductEntryComponent } from './ProductScreen/product-entry/product-entry.component';
import { ProductListComponent } from './ProductScreen/product-list/product-list.component';

export const routes: Routes = [
    {
     path: 'product',
     component: ProductEntryComponent
    }, 
     {
     path: 'productlist',
     component: ProductListComponent
    }, 
     ];
