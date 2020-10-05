import React, { PureComponent } from "react";
import "../Components/Style.css";
import Gallery from "../Components/Gallery/Gallery"
// import A1 from "../images/slider/slide1.png";
// import A2 from "../images/slider/slide-2.jpg";
// import A3 from "../images/slider/slide-3.jpg";
// import A4 from "../images/slider/slide-4.jpg";
// import A5 from "../images/slider/slide-5.jpg";

class Gallerya extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <>
        <Gallery></Gallery>
      </>
    );
  }
}

export default Gallerya;
