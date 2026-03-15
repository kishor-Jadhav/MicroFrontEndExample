import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';
import { createCustomElement } from '@angular/elements';

let appRef: any = null;

export async function mount(container: HTMLElement): Promise<void> {
  if (!container) {
    throw new Error('Angular container element is required');
  }

  // Angular root selector used by AppComponent is <app-root>
  container.innerHTML = '<app-root></app-root>';

  if (!appRef) {
    appRef = await bootstrapApplication(AppComponent, appConfig);
  }
}

export async function unmount(): Promise<void> {
  if (appRef) {
    const app = appRef;
    if (app.destroy) {
      app.destroy();
    }
    appRef = null;
  }
}

const bootstrap = { mount, unmount };
export default bootstrap;
