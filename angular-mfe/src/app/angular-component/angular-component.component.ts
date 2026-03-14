 import { Component } from '@angular/core';

@Component({
  selector: 'app-angular-component',
  standalone: true,
  template: `
    <div style="border:2px solid red;padding:20px">
      <h2>Angular Microfrontend</h2>
      <p>Angular MFE Loaded Successfully</p>
    </div>
  `
})
export class AngularComponentComponent {}