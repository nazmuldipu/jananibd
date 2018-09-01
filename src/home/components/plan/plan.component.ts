import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.scss']
})
export class PlanComponent {
  constructor(private router: Router) {}
  navigate(url) {
    this.router.navigateByUrl(url);
  }
}
