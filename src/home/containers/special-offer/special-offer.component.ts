import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-special-offer',
  templateUrl: './special-offer.component.html',
  styleUrls: ['./special-offer.component.scss']
})
export class SpecialOfferComponent implements OnInit {
  special_packages = [
    { price: "600", peak: '3', off_peak: '10', bg: "bg-teal" },
    { price: "800", peak: '4', off_peak: '15', bg: "bg-green"  },
    { price: "1000", peak: '6', off_peak: '20', bg: "bg-light-green"  },
    { price: "1200", peak: '8', off_peak: '25', bg: "bg-light-blue"  },
    { price: "1500", peak: '10', off_peak: '30', bg: "bg-deep-purple"  },
    { price: "2000", peak: '15', off_peak: '50', bg: "bg-amber"  },
  ];
  constructor() { }

  ngOnInit() {
  }

}
