import { Component } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent {
  images = [1,2,3].map((i) => `assets/images/slides_${i}.jpg`);

  constructor(private router: Router, config: NgbCarouselConfig) {
    config.interval = 3000;
    config.keyboard = false;
    config.pauseOnHover = true;
  }

  navigate(url) {
    this.router.navigateByUrl(url);
  }
}
