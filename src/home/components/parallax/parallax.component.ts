import { Component } from "@angular/core";
import { CompanyInfo } from "src/data/data";

@Component({
  selector: "parallax",
  templateUrl: "./parallax.component.html",
  styleUrls: ["./parallax.component.scss"],
})
export class ParallaxComponent {
  _companyInfo = CompanyInfo;
}
