import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-about-us",
  templateUrl: "./about-us.component.html",
  styleUrls: ["./about-us.component.css"]
})
export class AboutUsComponent implements OnInit {
  image = "../../assets/group1.jpg";

  image1 = "../../assets/professional1.jpg";
  image2 = "../../assets/professional2.jpg";
  image3 = "../../assets/professional3.jpg";
  image4 = "../../assets/professional4.jpg";

  constructor() {}

  ngOnInit() {}
}
