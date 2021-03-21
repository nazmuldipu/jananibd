import { Component, OnInit } from "@angular/core";
import { TVServers } from "src/data/data";

@Component({
  selector: "app-live-tvs",
  templateUrl: "./live-tvs.component.html",
  styleUrls: ["./live-tvs.component.scss"],
})
export class LiveTvsComponent {
  tvServers = TVServers;
}
