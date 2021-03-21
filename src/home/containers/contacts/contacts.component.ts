import { Component } from "@angular/core";
import { CompanyInfo } from "src/data/data";

@Component({
  selector: "contacts",
  templateUrl: "./contacts.component.html",
  styleUrls: ["./contacts.component.scss"],
})
export class ContactsComponent {
  _companyInfo = CompanyInfo;
}
