import { Component } from '@angular/core';

@Component({
  selector: "services",
  templateUrl: "./services.component.html",
  styleUrls: ["./services.component.scss"],
})
export class ServicesComponent {
  serviceIndex = 0;
  services = [
    {
      id: 1,
      name: "Best selling plans",
      icon: "fa-money",
      text:
        "At Janani, our goal is to help you find the best available internet plan for your home. For many, the cheapest internet plans or value-priced high-speed plans are best.",
      features: [
        "New connection with in 24 hours",
        "Pay optimum as your requirement",
        "One stop service",
      ],
    },
    {
      id: 2,
      name: "Broadband",
      icon: "fa-exchange",
      text:
        "Wide bandwidth data transmission which transports multiple signals and traffic types. The medium can be coaxial cable, optical fiber, radio or twisted pair.",
      features: [
        "Fiber",
        "Cable",
        "Connected 24/7 hrs",
        "Desired Bandwidth",
        "Enjoy the internet facility in its true sense",
      ],
    },
    {
      id: 3,
      name: "wifi zone",
      icon: "fa-wifi",
      text:
        "Getting unlimited WiFi saves your regular mobile data allowance for when you really need it. We have setup wifi networks offering hotspot access. Janani Technology Limited is your trusty guide.",
      features: [
        "No need for cabling",
        "Secure internet connection",
        "Scalable and Robust sytem",
      ],
    },
    {
      id: 4,
      name: "pay bills (all users)",
      icon: "fa-credit-card-alt",
      text:
        "Users can pay any amount of internet bill 24/7 from anywhere without any extra charge.",
      features: [
        "Hassel free",
        "Pay from home",
        "Digital invoice will be send",
      ],
    },
    {
      id: 5,
      name: "new connection",
      icon: "fa-plug",
      text:
        "Best internet service provider in Bangladesh which provides fully dedicated, super fast, cost-effective, secured internet connection. We’re promised to meeting your needs and delivering industry-leading customer service.",
      features: [
        "Corporate Internet",
        "Home Internet",
        "Hosting & Development",
        "IPTSP",
      ],
    },
    {
      id: 6,
      name: "secure service",
      icon: "fa-lock",
      text:
        "We offer a comprehensive range of protection for your online devices. While basic virus protection is the always the base feature, others that these packages might offer include ransomware protection, a VPN, and even a password manager. These really are all-singing all-dancing online security downloads for those wanting the best possible protection.",
      features: [
        "Tracks down and destroy any existing malware hiding in a PC",
        " Detects spyware threats and destroys each infection.",
        "Scans, detects & removes rootkits on your computer.",
        "Prevents malicious software turning your PC into a zombie.",
        "Enroll right away",
      ],
    },
  ];
  service = this.services[0];

  handleServiceClick(i) {
    this.serviceIndex = i;
    this.service = this.services[i];
  }
}
