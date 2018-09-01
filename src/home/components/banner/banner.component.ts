import { Component } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent {
  // images = [1, 2, 3, 4].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);
  images = [1, 2, 3].map(i => `assets/images/slide-${i}.jpg`);
  constructor(config: NgbCarouselConfig) {
    config.interval = 5000;
    config.keyboard = false;
    config.pauseOnHover = true;
  }
}
