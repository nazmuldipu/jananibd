import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './containers/index/index.component';
import { Routes, RouterModule } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BannerComponent } from './components/banner/banner.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PlanComponent } from './components/plan/plan.component';

// routes
export const ROUTES: Routes = [
  {
    path: '',
    component: IndexComponent
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(ROUTES), NgbModule],
  declarations: [IndexComponent, NavbarComponent, BannerComponent, PlanComponent]
})
export class HomeModule {}
