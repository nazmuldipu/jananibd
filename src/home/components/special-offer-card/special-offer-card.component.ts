import { Component, Input } from '@angular/core';

@Component({
  selector: 'special-offer-card',
  templateUrl: './special-offer-card.component.html',
  styleUrls: ['./special-offer-card.component.scss']
})
export class SpecialOfferCardComponent {
  @Input() price: number;
  @Input() speed1: number;
  @Input() speed2: number;
  @Input() background: string;
}
