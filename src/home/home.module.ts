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
import { AboutComponent } from './containers/about/about.component';
import { ServicesComponent } from './containers/services/services.component';
import { PackagesComponent } from './containers/packages/packages.component';
import { ContactsComponent } from './containers/contacts/contacts.component';
import { HomeComponents } from './home.component';
import { OrderComponent } from './containers/order/order.component';

// routes
export const ROUTES: Routes = [
  {
    path: '',
    component: HomeComponents,
    children: [
      {
        path: '',
        component: IndexComponent
      },
      {
        path: 'about',
        component: AboutComponent
      },
      {
        path: 'services',
        component: ServicesComponent
      },
      {
        path: 'packages',
        component: PackagesComponent
      },
      {
        path: 'contacts',
        component: ContactsComponent
      },
      {
        path: 'order',
        component: OrderComponent
      }
    ]
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(ROUTES), NgbModule],
  declarations: [
    HomeComponents,
    IndexComponent,
    NavbarComponent,
    BannerComponent,
    PlanComponent,
    ParallaxComponent,
    AdvantagesComponent,
    FooterComponent,
    BottomComponent,
    AboutComponent,
    ServicesComponent,
    PackagesComponent,
    ContactsComponent,
    OrderComponent
  ]
})
export class HomeModule {}
