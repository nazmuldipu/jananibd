import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Packages } from "src/data/data";

@Component({
  selector: "plan",
  templateUrl: "./plan.component.html",
  styleUrls: ["./plan.component.scss"],
})
export class PlanComponent {
  constructor(private router: Router) {}
  navigate(url) {
    this.router.navigateByUrl(url);
  }
  plans = Packages
}
