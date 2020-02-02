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
      "../../assets/image1.jpeg",
      "../../assets/image2.jpeg",
      "../../assets/image3.jpeg",
      "../../assets/image4.jpeg",
      "../../assets/image5.jpeg",
      "../../assets/imagex.jpeg",
      "../../assets/WhatsApp Image 2020-01-30 at 10.46.58 PM(2).jpeg",
      "../../assets/WhatsApp Image 2020-01-30 at 10.46.59 PM(1).jpeg",
      "../../assets/WhatsApp Image 2020-01-30 at 10.46.59 PM(2).jpeg",
      "../../assets/WhatsApp Image 2020-01-30 at 10.46.59 PM.jpeg",
      "../../assets/WhatsApp Image 2020-01-30 at 10.47.00 PM(1).jpeg",
      "../../assets/WhatsApp Image 2020-01-30 at 10.47.00 PM.jpeg",
      "../../assets/WhatsApp Image 2020-01-30 at 10.46.59 PM.jpeg"
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
      for (let i = len; i < len + 10; i++) {
        this.carouselTileItems.push("");
      }
    }
  }
}
