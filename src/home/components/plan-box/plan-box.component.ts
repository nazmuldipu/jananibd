import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "plan-box",
  templateUrl: "./plan-box.component.html",
  styleUrls: ["./plan-box.component.css"],
})
export class PlanBoxComponent implements OnInit {
  @Input() plan: any;

  constructor() {}

  ngOnInit(): void {}
}
