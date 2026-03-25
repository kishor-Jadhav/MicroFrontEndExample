import { Injectable } from '@angular/core';
 declare module 'shell/shellstore';
@Injectable({
  providedIn: 'root'
})
@Injectable({ providedIn: 'root' })
export class SharedStoreService {
 private store: any;

  async init() {
    this.store = (window as any).store;
     console.log("Angular store:", this.store);
  }

  getState() {
    return this.store?.getState();
  }

  dispatch(action: any) {
    this.store?.dispatch(action);
  }

  subscribe(callback: any) {
    return this.store?.subscribe(callback);
  }
}