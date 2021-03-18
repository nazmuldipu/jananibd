import { Component } from "@angular/core";

@Component({
  selector: "app-ftp-servers",
  templateUrl: "./ftp-servers.component.html",
  styleUrls: ["./ftp-servers.component.scss"],
})
export class FtpServersComponent {
  ftp_servers = [
    {
      name: "Today`s Upload",
      slug: "todays_upload",
      link: "http://server3.ftpbd.net/FTP-3/%5BToday%27s%20Upload%5D/",
    },
    {
      name: "English Movies",
      slug: "english_movies",
      link: "http://server3.ftpbd.net/FTP-3/Foreign%20Language%20Movies/",
    },
    {
      name: "Foreign Movies",
      slug: "foreign_movies",
      link:
        "http://server4.ftpbd.net/FTP-4/English%20%26%20Foreign%20TV%20Series/",
    },
    {
      name: "4K Movies",
      slug: "4k_movies",
      link:
        "http://server4.ftpbd.net/FTP-4/English%20%26%20Foreign%20TV%20Series/",
    },
    {
      name: "Anime & Cartoon TV Series",
      slug: "anime_&_cartoon_tv_series",
      link:
        "http://server5.ftpbd.net/FTP-5/Anime%20%26%20Cartoon%20TV%20Series/",
    },
    {
      name: "WWE Wrestling",
      slug: "wwe_wrestling",
      link:
        "http://server3.ftpbd.net/FTP-3/WWE%20Wrestling/",
    },
    {
      name: "All Elite Wrestling (AEW)",
      slug: "all_elite_wrestling_(aew)",
      link:
        "http://server3.ftpbd.net/FTP-3/All%20Elite%20Wrestling%20%28AEW%29/",
    },
    {
      name: "English Movie [Dual Audio]",
      slug: "english_movie_[dual_audio]",
      link:
        "http://server2.ftpbd.net/FTP-2/English%20Movies/Dual-Audio/",
    },
    {
      name: "3D Movies",
      slug: "3d_movies",
      link:
        "http://server2.ftpbd.net/FTP-2/3D%20Movies/",
    },
    {
      name: "Animation Movies",
      slug: "animation_movies",
      link:
        "http://server5.ftpbd.net/FTP-5/Animation%20Movies/",
    },
    {
      name: "IMDb Top-250",
      slug: "imdb_top_250",
      link:
        "http://server2.ftpbd.net/FTP-2/English%20Movies/IMDB%20TOP%20250/",
    },
    {
      name: "Documentary",
      slug: "documentary",
      link:
        "http://server3.ftpbd.net/FTP-3/Documentary/",
    },
    {
      name: "Hindi Movies",
      slug: "hindi_movies",
      link:
        "http://server3.ftpbd.net/FTP-3/Hindi%20Movies/",
    },
    {
      name: "Hindi Tv Series",
      slug: "hindi_tv_series",
      link:
        "http://server3.ftpbd.net/FTP-3/Hindi%20Movies/Hindi%20Tv%20Series/",
    },
    {
      name: "South Indian Movies",
      slug: "south_indian_movies",
      link:
        "http://server3.ftpbd.net/FTP-3/South%20Indian%20Movies/",
    },
    {
      name: "Awards & TV Shows",
      slug: "awards_&_tv_shows",
      link:
        "http://server3.ftpbd.net/FTP-3/Awards%20%26%20TV%20Shows/",
    },
    {
      name: "Bangla Collection",
      slug: "bangla_collection",
      link:
        "http://server3.ftpbd.net/FTP-3/Bangla%20Collection/BANGLA/",
    },
    {
      name: "Bengali Tv Series",
      slug: "bengali_tv_series",
      link:
        "http://server3.ftpbd.net/FTP-3/Bangla%20Collection/BANGLA/Web%20Series/",
    },
    {
      name: "Software Collection",
      slug: "software_collection",
      link:
        "http://server3.ftpbd.net/FTP-3/SOFTWARE%20-%20COLLECTION/",
    },
    {
      name: "Mix Tutorial",
      slug: "mix_tutorial",
      link:
        "http://server3.ftpbd.net/FTP-3/Tutorial/",
    },
    {
      name: "PC Games",
      slug: "pc_games",
      link:
        "http://server1.ftpbd.net/FTP-1/PC%20Games/",
    },
    {
      name: "Android Games",
      slug: "android_games",
      link:
        "http://server1.ftpbd.net/FTP-1/Android/",
    },
    {
      name: "Console Games",
      slug: "console_games",
      link:
        "http://server1.ftpbd.net/FTP-1/Console%20Games/",
    },
  ];
}
