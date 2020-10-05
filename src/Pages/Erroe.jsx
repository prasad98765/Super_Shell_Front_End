import React, { PureComponent } from "react";
import Error from "../../src/images/slider/error.png";
class Erroe extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <>
        <img
          src={Error}
          class="img-fluid"
          style={{ marginTop: "4%", width: "100%" }}
          alt="Responsive Image"
        ></img>
      </>
    );
  }
}

export default Erroe;
