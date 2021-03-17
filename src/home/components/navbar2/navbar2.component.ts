import { Component } from "@angular/core";

@Component({
  selector: "navbar2",
  templateUrl: "./navbar2.component.html",
  styleUrls: ["./navbar2.component.scss"],
})
export class Navbar2Component {
  show = false;

  toggleCollapse() {
    this.show = !this.show;
  }
}
