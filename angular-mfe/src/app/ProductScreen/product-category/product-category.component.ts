import { Component, OnDestroy, OnInit } from '@angular/core';
import { SharedStoreService } from '../../../StoreConfig/shared-store.service';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-product-category',
  imports: [JsonPipe],
  templateUrl: './product-category.component.html',
  styleUrl: './product-category.component.scss'
})
export class ProductCategoryComponent implements OnInit{

 data: any;
  constructor(private shellStore: SharedStoreService) {}

  async ngOnInit() {
    await this.shellStore.init();

    // initial state
    this.data = this.shellStore.getState();

    // subscribe to changes
    this.shellStore.subscribe(() => {
      this.data = this.shellStore.getState();
    });
  }

  updateData() {
    this.shellStore.dispatch({
      type: "data/setData",
      payload: { source: "Angular MFE" }
    });
  }
}