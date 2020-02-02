import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-top-nav",
  templateUrl: "./top-nav.component.html",
  styleUrls: ["./top-nav.component.css"]
})
export class TopNavComponent implements OnInit {
  selected: string = "Home";

  constructor() {}

  ngOnInit() {}

  onClick(current: string) {
    console.log("current: onClick", current);
    this.selected = current;
  }
}
