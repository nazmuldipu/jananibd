import { Component } from "@angular/core";
import { CompanyInfo } from "src/data/data";

@Component({
  selector: "navbar2",
  templateUrl: "./navbar2.component.html",
  styleUrls: ["./navbar2.component.scss"],
})
export class Navbar2Component {
  show = false;

  _companyInfo = CompanyInfo;

  toggleCollapse() {
    this.show = !this.show;
  }
}
