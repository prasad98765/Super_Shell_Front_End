import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FaAlignRight } from "react-icons/fa";
import "../../Components/navar.css";
import A1 from "../../images/slider/slide-1.jpg";
import A2 from "../../images/slider/slide-2.jpg";
import A3 from "../../images/slider/slide-3.jpg";
import A4 from "../../images/slider/slide-4.jpg";
import A5 from "../../images/slider/slide-5.jpg";

export default class Navbar extends Component {
  state = {
    isOpen: false,
  };
  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    return (
      <div style = {{ backgroundColor: "black",marginTop :"1%" }}>
        <div class="row" style={{ backgroundColor: "black" ,marginLeft : "4%" }}>
          <div
            class="col-sm-4 "
            style={{ marginTop: "10%", color: "white", fontFamily: "" }}
          >
            <h1
              class="h1-responsive font-weight-bold wow fadeInLeft"
              data-wow-delay="0.3s"
            >
              WELCOME TO <a style={{color:"red"}}> SUPER SHELL INDUSTRIES</a>  PUNE
            </h1>

            <a>
              
              Established in 2012, Super Shell Industries is the leading
              Manufacturer and Trader of Automobile VRLA Battery, Tubular
              Battery, Material Handling Equipment, VRLA Battery Group
            </a>
            <div>
            <a className="btn btn-light a" style={{fontSize:"100%"}} href="aboutUs">MORE INFO</a>

            </div>
          </div>
          <div class="col-sm-8" style={{ marginTop: "8%" , marginBottom : "1%"}}>
          <div id="carouselExampleControls" class="carousel slide" data-ride="carousel" data-pause="false" data-interval="10200" >
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src={A1} alt="First slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src={A2} alt="Second slide"/>
    </div>
    {/* <div class="carousel-item">
      <img class="d-block w-100" src={A3} alt="Third slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src={A4} alt="Third slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src={A5} alt="Third slide"/>
    </div> */}
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
          </div>
        </div>
      </div>
    );
  }
}
