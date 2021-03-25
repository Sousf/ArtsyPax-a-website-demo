import React from "react";
import { UncontrolledCarousel } from "reactstrap";
import img1 from "../resources/images/roof.jpeg";
import img2 from "../resources/images/fish.jpeg";
import img3 from "../resources/images/dude_beard.jpg";

const items = [
  {
    src: img1,
    altText: "Slide 1",
    caption: "Slide 1",
    header: "Slide 1 Header",
    key: "1"
  },
  {
    src: img2,
    altText: "Slide 2",
    caption: "Slide 2",
    header: "Slide 2 Header",
    key: "2"
  },
  {
    src: img3,
    altText: "Slide 3",
    caption: "Slide 3",
    header: "Slide 3 Header",
    key: "3"
  }
];

const Carousel = () => <UncontrolledCarousel items={items} />;

export default Carousel;
