import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ek-rate-pak',
  templateUrl: './ek-rate-pak.component.html',
  styleUrls: ['./ek-rate-pak.component.scss']
})
export class EkRatePakComponent implements OnInit {
  @Input() singlePage: boolean = false;
  
  packages = [
    { price: "500", bandwidth: "6", gov: "5" },
    { price: "800", bandwidth: "12", gov: "10" },
    { price: "1200", bandwidth: "25", gov: "20" },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
