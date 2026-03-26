import { Component, OnInit } from '@angular/core';
import { SharedStoreService } from '../../../StoreConfig/shared-store.service';
import { JsonPipe } from '@angular/common';
 declare module 'shell/shellstore';
@Component({
  selector: 'app-test-shell-store',
  imports: [JsonPipe],
  templateUrl: './test-shell-store.component.html',
  styleUrl: './test-shell-store.component.scss'
})
export class TestShellStoreComponent implements OnInit {


  data: any;
  constructor(private shellStoreService: SharedStoreService) { }

   ngOnInit() {
    

    // initial state
    this.data = this.shellStoreService.getState();

    // subscribe to changes
    this.shellStoreService.subscribe(() => {
      this.data = this.shellStoreService.getState();
      console.log("AngularState updated:", this.data);
    });
  }

  updateData() {
    this.shellStoreService.dispatch({
      type: "data/setData",
      payload: { source: "Angular MFE" }
    });
  }

  setText(data: any) {
    return JSON.stringify(data, null, 2);
  }
}
