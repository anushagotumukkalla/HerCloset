import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  template: `
  <div>
  <nav class='navbar navbar-default'>
      <div class='container-fluid'>
          <a class='navbar-brand'>{{title}}</a>
          <ul class='nav navbar-nav'>
              <li><a [routerLink]="['/welcome']">Home</a></li>
              <li><a [routerLink]="['/collections']">Product List</a></li>
          </ul>
      </div>
  </nav>
  <div class='container'>
      <router-outlet></router-outlet>
  </div>
  <div>
</div> `,
  // templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TAs_HerCloset';
}
