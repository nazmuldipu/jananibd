import { Component } from "@angular/core";
import { CompanyInfo } from "src/data/data";

@Component({
  selector: "bottom",
  templateUrl: "./bottom.component.html",
  styleUrls: ["./bottom.component.scss"],
})
export class BottomComponent {
  _companyInfo = CompanyInfo;
}
