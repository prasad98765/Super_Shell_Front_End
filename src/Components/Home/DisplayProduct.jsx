import React, { PureComponent } from "react";
import { Card } from "react-bootstrap";
import "../../Components/mobile-style.css";
import "../../Components/Style.css";
import A1 from "../../images/slider/Products/one.jpg";
import A2 from "../../images/slider/Products/two.jpg";
import A3 from "../../images/slider/Products/three.jpg";
import A4 from "../../images/slider/Products/four.jpg";
import A5 from "../../images/slider/Products/five.jpg";
import A6 from "../../images/slider/Products/six.jpg";
import Bat from "../../images/slider/bat-s.png"
class DisplayProduct extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <>
      <div className="Products">
        <div class="container text-center">
          <h1
            class="h1-responsive font-weight-bold wow fadeInLeft"
            data-wow-delay="0.3s"
          >
            OUR PRODUCTS
          </h1>
          <hr class="hr-light wow fadeInLeft" data-wow-delay="0.3s" />
          <p class="wow fadeInLeft" data-wow-delay="0.3s">
            Super Shell Industries is the leading Maunfacturer and Trader of
            Automobile VRLA Battery, Tubular Battery, Material Handling
            Equipment, VRLA Battery Group Burning Set, Pad Printing, Lead
            Melting Pot, UPS Battery, Battery Accessories
          </p>
        </div>
        <div
          class="card-deck"
          style={{ marginLeft: "10%", marginRight: "10%" }}
        >
          <div class="card">
            <img class="card-img-top" src={A1} alt="Card image cap" />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <a
                className="btn btn-light btn-lg btn-block a"
                style={{ marginTop: "-1%" }}
                href="Page1"
                onClick={this.process}
              >
                More Info
              </a>
            </div>
            <div class="card-footer">
              <small class="text-muted"></small>
            </div>
          </div>
          <div class="card">
            <img class="card-img-top" src={A2} alt="Card image cap" />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <a
                className="btn btn-light btn-lg btn-block a"
                style={{ marginTop: "-1%" }}
                href="Page2"
                onClick={this.process}
              >
                More Info
              </a>
            </div>
            <div class="card-footer">
              <small class="text-muted"></small>
            </div>
          </div>
          <div class="card">
            <img class="card-img-top" src={A6} alt="Card image cap" />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <a
                className="btn btn-light btn-lg btn-block a"
                style={{ marginTop: "-1%" }}
                href="Page4"
                onClick={this.process}
              >
               More Info
              </a>
            </div>
            <div class="card-footer">
              <small class="text-muted"></small>
            </div>
          </div>
        </div>
      </div>

</>
    );
  }
}

export default DisplayProduct;
