 import 'zone.js';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';

export function mountAngular(container: HTMLElement) {

  const element = document.createElement('app-root');
  container.appendChild(element);

  bootstrapApplication(AppComponent)
    .catch(err => console.error(err));

}