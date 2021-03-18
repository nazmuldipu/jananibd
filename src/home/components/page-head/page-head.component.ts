import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "page-head",
  templateUrl: "./page-head.component.html",
  styleUrls: ["./page-head.component.scss"],
})
export class PageHeadComponent implements OnInit {
  @Input() name: string;
  @Input() page: string;
  constructor() {}

  ngOnInit(): void {}
}
