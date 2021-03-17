import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'section-heding',
  templateUrl: './section-heding.component.html',
  styleUrls: ['./section-heding.component.css']
})
export class SectionHedingComponent implements OnInit {
  @Input() section:string;
  @Input() name:string;

  constructor() { }

  ngOnInit(): void {
  }

}
