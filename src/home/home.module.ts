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
import { JananiFtpComponent } from './containers/janani-ftp/janani-ftp.component';
import { SpecialOfferComponent } from './containers/special-offer/special-offer.component';
import { SpecialOfferCardComponent } from './components/special-offer-card/special-offer-card.component';
import { Navbar2Component } from './components/navbar2/navbar2.component';
import { SectionHedingComponent } from './components/section-heding/section-heding.component';
import { PlanBoxComponent } from './components/plan-box/plan-box.component';
import { PageHeadComponent } from './components/page-head/page-head.component';
// import { RoundProgressModule } from 'angular-svg-round-progressbar';
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
        path: 'special-offer',
        component: SpecialOfferComponent
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
        path: 'janani-ftp',
        component: JananiFtpComponent
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
    PieChartComponent,
    JananiFtpComponent,
    SpecialOfferComponent,
    SpecialOfferCardComponent,
    Navbar2Component,
    SectionHedingComponent,
    PlanBoxComponent,
    PageHeadComponent
  ]
})
export class HomeModule { }
