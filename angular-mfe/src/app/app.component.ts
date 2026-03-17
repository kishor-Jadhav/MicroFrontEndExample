import { Component, ElementRef } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: `
    <h2>Angular Microfrontend</h2>
    <p>Loaded inside React Shell</p>
     <h3>Angular Internal Routes</h3>
    <nav>
      <ul>
        <li><a routerLink="/product">Product Entry</a></li>
        <li><a routerLink="/angular/productlist">Product List</a></li>
      </ul>
    </nav>
    
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
   constructor(private router: Router, private el: ElementRef) {}

  ngOnInit() {

    const route = this.el.nativeElement.getAttribute('initial-route');

    if(route){
      this.router.navigateByUrl(route);
    }

  }
}