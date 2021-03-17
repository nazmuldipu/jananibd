import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

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
  plans = [
    {
      name: "Basic",
      plan: "Council Plan",
      price: "750",
      includes: [
        "40 GB Data Limit",
        "Unlimited Bandwidth",
        "4* MBPS Speed",
        "Free 2GB Night Data",
        "No Installation charges",
      ],
    },
    {
      name: "Standard",
      plan: "Silver Plan",
      price: "1000",
      best: true,
      includes: [
        "80 GB Data Limit",
        "Unlimited Bandwidth",
        "4 + 8 MBPS Speed",
        "Free 5GB Night Data",
        "No Installation charges",
      ],
    },
    {
      name: "Premium",
      plan: "Gold Plan",
      price: "1200",
      includes: [
        "120 GB Data Limit",
        "Unlimited Bandwidth",
        "8 + 8 MBPS Speed",
        "Free 8GB Night Data",
        "No Installation charges",
      ],
    },
    {
      name: "Unlimited",
      plan: "Business Plan",
      price: "1500",
      includes: [
        "120 GB Data Limit",
        "Unlimited Bandwidth",
        "8 + 8 MBPS Speed",
        "Free 8GB Night Data",
        "No Installation charges",
      ],
    },
  ];
}
