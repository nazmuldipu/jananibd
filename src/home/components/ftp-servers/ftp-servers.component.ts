import { Component } from "@angular/core";
import { FTPServers } from "src/data/data";

@Component({
  selector: "app-ftp-servers",
  templateUrl: "./ftp-servers.component.html",
  styleUrls: ["./ftp-servers.component.scss"],
})
export class FtpServersComponent {
  ftp_servers = FTPServers
}
