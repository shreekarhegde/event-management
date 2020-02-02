import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  selected: string = "Home";
  constructor() {}

  ngOnInit() {}

  onClick(current: string) {
    console.log("current: onClick", current);
    this.selected = current;
  }
}
