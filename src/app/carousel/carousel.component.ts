import { Component, OnInit } from "@angular/core";
import { NgxCarousel } from "ngx-carousel";

@Component({
  selector: "app-carousel",
  templateUrl: "./carousel.component.html",
  styleUrls: ["./carousel.component.css"]
})
export class CarouselComponent implements OnInit {
  public carouselTileItems: Array<any>;
  public carouselTile: NgxCarousel;

  constructor() {}

  ngOnInit() {
    this.carouselTileItems = [
      "../../assets/image3.jpeg",
      "../../assets/image5.jpeg",
      "../../assets/image5.jpeg",
      "../../assets/image5.jpeg",
      "../../assets/image5.jpeg",
      "../../assets/image5.jpeg",
      "../../assets/image5.jpeg",
      "../../assets/image5.jpeg",
      "../../assets/image5.jpeg",
      "../../assets/image5.jpeg",
      "../../assets/image5.jpeg"
    ];

    this.carouselTile = {
      grid: { xs: 2, sm: 3, md: 3, lg: 5, all: 0 },
      slide: 2,
      speed: 400,
      animation: "lazy",
      point: true,
      load: 2,
      touch: true,
      easing: "ease"
    };
  }

  public carouselTileLoad(evt: any) {
    const len = this.carouselTileItems.length;
    if (len <= 30) {
      for (let i = len; i < len; i++) {
        this.carouselTileItems.push(i);
      }
    }
  }
}
