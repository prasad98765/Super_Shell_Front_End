import React, { Component } from "react";
import "../Components/navar.css";
import "../Components/mobile-style.css";
import A from "../images/ssi/avb/1.jpg";
import B from "../images/ssi/tb/1.jpg";
import C from "../images/ssi/avb/5.jpg";

export default class Navbar extends Component {
  state = {
    isOpen: false,
  };
  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    return (
      <header>
        <div class="container-fluid p-0">
          <nav
            class="navbar navbar-expand-lg"
            style={{
              backgroundColor: "rgb(134, 11, 11)",
              marginBottom: "-4%",
              marginTop: "1%",
            }}
          >
            <a
              class="navbar-brand"
              href="/"
              style={{ marginLeft: "-5%", color: "white" }}
            >
              Super Shell Industries
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i class="fas fa-align-right text-light"></i>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <div class="mr-auto"></div>
              <ul class="navbar-nav">
                <li class="nav-item active">
                  <a class="nav-link" href="/">
                    HOME
                    <span class="sr-only">(current)</span>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="aboutUs">
                    ABOUT US
                  </a>
                </li>
                <div class="nav-item dropdown">
                  <a
                    href="Page1"
                    class="nav-link"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    PRODUCTS
                  </a>

                  <div
                    class="dropdown-menu"
                    // aria-labelledby="dropdownMenuButton"
                    style={{ backgroundColor: "rgb(134, 11, 11)" }}
                  >
                    <div class="row">
                      <div class="col-md-6 col-xl-3 sub-menu mb-xl-0 mb-5 ">
                        <ul class="list-unstyled">
                          <li class="sub-title text-uppercase">
                            <a
                              class="menu-item pl-1 mt-2"
                              href="Page1"
                              style={{ color: "white", fontWeight: "bold" }}
                            >
                              VRLA BATTERY
                            </a>
                          </li>
                          <li
                            class="sub-title text-uppercase"
                            style={{ marginTop: "7%" }}
                          >
                            <a
                              class="menu-item pl-1 mt-2"
                              href="Page2"
                              style={{ color: "white", fontWeight: "bold" }}
                            >
                              TUBULAR BATTERY
                            </a>
                          </li>
                          <li
                            class="sub-title text-uppercase"
                            style={{ marginTop: "7%" }}
                          >
                            <a
                              class="menu-item pl-1 mt-2"
                              href="Page3"
                              style={{ color: "white", fontWeight: "bold" }}
                            >
                              UPS BATTERY
                            </a>
                          </li>
                          <li
                            class="sub-title text-uppercase"
                            style={{ marginTop: "7%" }}
                          >
                            <a
                              class="menu-item pl-1 mt-2"
                              href="Page4"
                              style={{ color: "white", fontWeight: "bold" }}
                            >
                              BATTERY ACCESSORIES
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div class="col-md-6 col-xl-3 sub-menu mb-xl-0 mb-4">
                        <a class="view overlay z-depth-1 p-0 mb-3" style={{ color: "white", fontWeight: "bold" }}
>
                          <img
                            src={A}
                            class="img-fluid"
                            alt="First sample image"
                          />
                        </a>
                        <h4 class="mb-2">
                          <a
                            class="news-title font-weight-bold pl-0"
                            href="Page1"
                            style={{ color: "white", fontWeight: "bold" }}
                          >
                            12 Volt 12 Ah Battery
                          </a>
                        </h4>
                      </div>

                      <div class="col-md-6 col-xl-3 sub-menu mb-md-0 mb-xl-0 mb-4">
                        <a href="#!" class="view overlay z-depth-1 p-0 mb-3">
                          <img
                            src={B}
                            class="img-fluid"
                            alt="First sample image"
                          />

                        </a>
                        <h4 class="mb-2">
                          <a
                            class="news-title font-weight-bold pl-0"
                            href="Page1"
                            style={{ color: "white", fontWeight: "bold" }}
                          >
                            Tubular Battery
                          </a>
                        </h4>
                      </div>
                      <div class="col-md-6 col-xl-3 sub-menu mb-0">
                        <a href="#!" class="view overlay z-depth-1 p-0 mb-3">
                          <img
                            src={C}
                            class="img-fluid"
                            alt="First sample image"
                          />
                        </a>
                        <h4 class="mb-2">
                          <a
                            class="news-title font-weight-bold pl-0"
                            href="Page1"
                            style={{ color: "white", fontWeight: "bold" }}
                          >
                            12 Volt 5 LB VRLA Battery
                          </a>
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
                <li class="nav-item">
                  <a class="nav-link" href="distributorship">
                    DISTRIBUTORSHIP
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="gallery">
                    GALLERY
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="contactUs">
                    CONTACT
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    );
  }
}
