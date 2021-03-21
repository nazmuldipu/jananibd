import { Component, Input } from "@angular/core";
import { Services } from "src/data/data";

@Component({
  selector: "services",
  templateUrl: "./services.component.html",
  styleUrls: ["./services.component.scss"],
})
export class ServicesComponent {
  @Input() head: boolean = true;

  serviceIndex = 0;
  services = Services;
  service = this.services[0];

  handleServiceClick(i) {
    this.serviceIndex = i;
    this.service = this.services[i];
  }
}
