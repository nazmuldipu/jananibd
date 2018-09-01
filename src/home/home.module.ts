import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './containers/index/index.component';
import { Routes, RouterModule } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BannerComponent } from './components/banner/banner.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PlanComponent } from './components/plan/plan.component';
import { ParallaxComponent } from './components/parallax/parallax.component';
import { AdvantagesComponent } from './components/advantages/advantages.component';
import { FooterComponent } from './components/footer/footer.component';
import { BottomComponent } from './components/bottom/bottom.component';

// routes
export const ROUTES: Routes = [
  {
    path: '',
    component: IndexComponent
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(ROUTES), NgbModule],
  declarations: [IndexComponent, NavbarComponent, BannerComponent, PlanComponent, ParallaxComponent, AdvantagesComponent, FooterComponent, BottomComponent]
})
export class HomeModule {}
