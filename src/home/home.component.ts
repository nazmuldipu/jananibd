import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  template: `
  <navbar2></navbar2>
  <router-outlet></router-outlet>
  <bottom></bottom>
  <footer></footer>
  `,
  styles: [`.topPadd{padding-top:68px;}`]

})
export class HomeComponents { }
