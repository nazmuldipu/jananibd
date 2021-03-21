import { Component, OnInit } from "@angular/core";
import { TorrentServers } from "./../../../data/data";

@Component({
  selector: "app-torrent-servers",
  templateUrl: "./torrent-servers.component.html",
  styleUrls: ["./torrent-servers.component.scss"],
})
export class TorrentServersComponent {
  torrentSevers = TorrentServers;
}
