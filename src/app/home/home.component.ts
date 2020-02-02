import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  images = ["../../assets/WhatsApp Image 2020-01-30 at 10.46.59 PM(1).jpeg"];
  constructor() {}

  ngOnInit() {}
}
