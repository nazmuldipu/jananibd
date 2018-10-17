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
import { FtpServersComponent } from './components/ftp-servers/ftp-servers.component';
import { TorrentServersComponent } from './components/torrent-servers/torrent-servers.component';
import { LiveTvsComponent } from './components/live-tvs/live-tvs.component';
// import { ChartsModule } from 'ng2-charts';
// import { NgxChartsModule } from '@swimlane/ngx-charts';
import { PieChartComponent } from './components/pie-chart/pie-chart.component';
import { RoundProgressModule } from 'angular-svg-round-progressbar';
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
      },
      {
        path: 'ftp-serves',
        component: FtpServersComponent
      },
      {
        path: 'torrent-servers',
        component: TorrentServersComponent
      },
      {
        path: 'live-tvs',
        component: LiveTvsComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    NgbModule,
    // BrowserModule,
    // BrowserAnimationsModule,
    RoundProgressModule
  ],
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
    OrderComponent,
    FtpServersComponent,
    TorrentServersComponent,
    LiveTvsComponent,
    PieChartComponent
  ]
})
export class HomeModule {}
