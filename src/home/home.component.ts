import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  template: `
  <navbar></navbar>
  <router-outlet></router-outlet>
  <bottom></bottom>
  <footer></footer>
  `
})
export class HomeComponents {}
