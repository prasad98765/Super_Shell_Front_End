import React, { Component } from "react";
import '../../Components/mobile-style.css';
import '../../Components/Style.css';
import A1 from "../../images/slider/certificate-banner.jpg"
import A2 from "../../images/slider/certificate-banner1.jpg"
import A3 from "../../images/slider/certificate-banner2.jpg"
import A4 from "../../images/slider/certificate-banner3.jpg"

export default class Info extends Component {
  render() {
    return (
    <section class="section-2 container-fluid p-0" >
      <div class="cover">
        <div class="overlay"></div>
        <div class="content text-center" >
          <h1 >Commitment to Quality</h1>     
              </div>
           
      </div>
      <div class="container-fluid text-center">
        <div class="numbers d-flex flex-md-row flex-wrap justify-content-center">
          <div class="rect">
            <img
                class="w-100"
                src={A1}
                alt="Third slide"
              />
          </div>
          <div class="rect">
          <img
                class="d-block w-100"
                src={A2}
                alt="Third slide"
              />
          </div>
          <div class="rect">
          <img
                class="d-block w-100"
                src={A3}
                alt="Third slide"
              />
          </div>
          <div class="rect">
          <img
                class="d-block w-100"
                src={A4}
                alt="Third slide"
              />
          </div>
        </div>
      </div>
    </section>
    );
  }
}
