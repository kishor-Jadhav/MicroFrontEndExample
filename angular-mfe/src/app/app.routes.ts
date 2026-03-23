import { Routes } from '@angular/router';
import { ProductEntryComponent } from './ProductScreen/product-entry/product-entry.component';
import { ProductListComponent } from './ProductScreen/product-list/product-list.component';
import { TestShellStoreComponent } from './ShellStoreTest/test-shell-store/test-shell-store.component';

export const routes: Routes = [
    {
     path: 'product',
     component: ProductEntryComponent
    }, 
     {
     path: 'angular/productlist',
     component: ProductListComponent
    }, 
    {
     path: 'angular/testshellstore',
     component: TestShellStoreComponent
    }, 
     ];
