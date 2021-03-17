import { Component } from "@angular/core";

@Component({
  selector: "advantages",
  templateUrl: "./advantages.component.html",
  styleUrls: ["./advantages.component.scss"],
})
export class AdvantagesComponent {
  advantages = [
    {
      title: "BEST SPEED",
      text:
        "Looking for fast broadband without line rental fees? Look no further! We even include Net phone with every Naked DSL plan.",
      src: "assets/images/speedometer.png",
    },
    {
      title: "INSTALLATION & SETUP",
      text:
        "Internet Provider delivers huge value and super-fast broadband over our fibre to the node network. We also include Netphone with every plan.",
      src: "assets/images/customer-support.png",
    },
    {
      title: "24 X 7 SERVICE",
      text:
        "We provide our clients with free 24/7 support that guarantees the solution of any issues with your connection or cloud hosting.",
      src: "assets/images/headphones.png",
    },
  ];
}
