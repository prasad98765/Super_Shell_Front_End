import React, { PureComponent } from "react";
import "../../Components/mobile-style.css";
import "../../Components/Style.css";
import A1 from "../../images/slider/certificate-banner.jpg";

import Dealer from "../../images/slider/find-your-dealer.jpg";
import Dealer1 from "../../images/slider/query-pic1.jpg";
class Feedback extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <>
        <section class="section-4">
          <div class="container text-center">
            <h1 class="text-dark">What our Customer Say about us</h1>
            <p class="text-secondary">Lorem ipsum dolor sit amet.</p>
          </div>
          <div class="team row ">
            <div class="col-md-4 col-12 text-center">
              <div class="card mr-2 d-inline-block shadow-lg">
                <div class="card-img-top">
                  <img src={A1} class="img-fluid border-radius p-4" alt="" />
                </div>
                <div class="card-body">
                  <h3 class="card-title">Blalock Jolene</h3>
                  <p class="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sint iure autem recusandae, veniam, 
                  </p>
                  <a href="#" class="text-secondary text-decoration-none">
                    Rating
                  </a>
                  <p class="text-black-50">
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-4 col-12">
              <div
                id="carouselExampleControls"
                class="carousel slide "
                data-ride="carousel"
              >
                <div class="carousel-inner text-center">
                  <div class="carousel-item active">
                    <div class="card mr-2 d-inline-block shadow">
                      <div class="card-img-top">
                        <img
                          src={A1}
                          class="img-fluid border-radius p-4"
                          alt=""
                        />
                      </div>
                      <div class="card-body">
                        <h3 class="card-title">Allen Agnes</h3>
                        <p class="card-text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sint iure autem recusandae, veniam, 
                        </p>
                        <a href="#" class="text-secondary text-decoration-none">
                          Rating
                        </a>
                        <p class="text-black-50">
                          <span class="fa fa-star checked"></span>
                          <span class="fa fa-star checked"></span>
                          <span class="fa fa-star checked"></span>
                          <span class="fa fa-star"></span>
                          <span class="fa fa-star"></span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <div class="card  d-inline-block mr-2 shadow">
                      <div class="card-img-top">
                        <img
                          src={A1}
                          class="img-fluid border-radius p-4"
                          alt=""
                        />
                      </div>
                      <div class="card-body">
                        <h3 class="card-title">Amiel Barbara</h3>
                        <p class="card-text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sint iure autem recusandae, veniam, 
                        </p>
                        <a href="#" class="text-secondary text-decoration-none">
                          Rating
                        </a>
                        <p class="text-black-50">
                          <span class="fa fa-star checked"></span>
                          <span class="fa fa-star checked"></span>
                          <span class="fa fa-star checked"></span>
                          <span class="fa fa-star"></span>
                          <span class="fa fa-star"></span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4 col-12 text-center feedback">
              <div class="card mr-2 d-inline-block shadow-lg">
                <div class="card-img-top">
                  <img src={A1} class="img-fluid border-radius p-4" alt="" />
                </div>
                <div class="card-body">
                  <h3 class="card-title">Olivia Louis</h3>
                  
                  <p class="card-text"  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sint iure autem recusandae, veniam, 
                  </p>
                  
                  <a href="#" class="text-secondary text-decoration-none" style={{marginTop:"60%"}}>
                    Rating
                  </a>
                  <p class="text-black-50">
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <a
                                id="submitBtn"
                                type="submit"
                                // class="btn"
                                // href= "/"
                                data-toggle="modal"
                                data-target="#myModal1"
                                style={{ marginLeft:"80%",fontFamily:"cursive" }}
                                disabled
                              >
                                Click To Submit Your Review
                              </a>

                              <div class="container">
                  <div class="modal fade" id="myModal1" role="dialog">
                    <div class="modal-dialog">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h4>{this.state.product}</h4>{" "}
                          <button
                            type="button"
                            class="close"
                            data-dismiss="modal"
                          >
                            &times;
                          </button>
                        </div>
                        <div class="modal-body">
                          <form id="myForm1" class="needs-validation">
                            <h6 style={{ opacity: "70%" }}>
                              All <a style={{ color: "red" }}> (*)</a> marked
                              fields are required.{" "}
                            </h6>
                            <div class="form-group">
                <div>
                  <label for="inputAddress2">Select Product Image *</label>
                </div>
                <input
                  type="file"
                  accept="image/*"
                  class="form-control"
                  id="inputGroupFile01"
                  placeholder="Apartment, studio, or floor"
                  onChange={this.getfile}
                />
              </div>

                            <div class="form-group">
                              <label for="inputAddress">Email-Id *</label>
                              <input
                                name="EMAIL"
                                id="emailId"
                                type="text"
                                class="form-control"
                                placeholder="Email"
                                pattern="^[a-zA-Z0-9]{1,}[._+-]?[a-zA-Z0-9]{1,}[@][a-zA-Z0-9]{1,}([.][a-zA-Z]{2,4}){1,2}$"
                                onChange={(event) =>
                                  this.handleValueChange(event)
                                }
                                required
                              />
                              <div class="valid-feedback">Valid</div>
                              <div class="invalid-feedback">
                                Please Enter Valid FirstName
                              </div>
                            </div>
                            <div class="form-group">
                              <label for="inputAddress">Mobile Number *</label>
                              <input
                                name="CONTACT"
                                id="contactId"
                                type="text"
                                class="form-control"
                                pattern="^[0-9]{10}$"
                                placeholder="Contact"
                                minlength="10"
                                onChange={(event) =>
                                  this.handleValueChange(event)
                                }
                                required
                                autofocus
                              />
                              <div class="valid-feedback">Valid</div>
                              <div class="invalid-feedback">
                                Please Enter Valid FirstName
                              </div>
                            </div>
                            <div class="form-group">
                              <label for="inputAddress2">Address *</label>
                              <input
                                name="ADDRESS"
                                id="fisrtNameId"
                                type="text"
                                class="form-control"
                                pattern="^[a-zA-Z]{3,15}$"
                                placeholder="FirstName"
                                onChange={(event) =>
                                  this.handleValueChange(event)
                                }
                                required
                                autofocus
                              />
                              <div class="valid-feedback">Valid</div>
                              <div class="invalid-feedback">
                                Please Enter Valid FirstName
                              </div>
                            </div>
                            <div class="form-row">
                              <div class="form-group col-md-6">
                                <label for="inputCity">City *</label>
                                <input
                                  name="CITY"
                                  id="cityId"
                                  type="text"
                                  class="form-control"
                                  pattern="^[a-zA-Z]{3,}$"
                                  placeholder="Enter the Year of City"
                                  onChange={(event) =>
                                    this.handleValueChange(event)
                                  }
                                  required
                                  autoFocus
                                />
                                <div class="valid-feedback">Valid</div>
                                <div class="invalid-feedback">
                                  Please Enter Valid FirstName
                                </div>
                              </div>
                              <div class="form-group col-md-4">
                                <label for="inputState">State *</label>
                                <select
                                  name="STATE"
                                  class="form-control"
                                  id="inputState"
                                  class="form-control"
                                  onChange={(event) =>
                                    this.handleValueChange(event)
                                  }
                                  required
                                  autoFocus
                                >
                                  <option>Andaman</option>
                                  <option>Andhra Pradesh</option>
                                  <option>Arunachal Pradesh</option>
                                  <option>Assam</option>
                                  <option>Bihar</option>
                                  <option>Chandigarh</option>
                                  <option>Chhattisgarh</option>
                                  <option>Dadra</option>
                                  <option>Delhi</option>
                                  <option>Goa</option>
                                  <option>Gujarat</option>
                                  <option>Haryana</option>
                                  <option>Himachal Pradesh</option>
                                  <option>Jammu</option>
                                  <option>Jharkhand</option>
                                  <option>Karnataka</option>
                                  <option>Kerala</option>
                                  <option>Ladakha</option>
                                  <option>Lakshadweep</option>
                                  <option>Madhya Pradesh</option>
                                  <option>Maharashtra</option>
                                  <option>Manipuur</option>
                                  <option>Meghalaya</option>
                                  <option>Mizoram</option>
                                  <option>Nagaland</option>
                                  <option>Odisha</option>
                                  <option>Puducherry</option>
                                  <option>Punjab</option>
                                  <option>Rajasthan</option>
                                  <option>Sikkim</option>
                                  <option>Tamil Nadu</option>
                                  <option>Telangana</option>
                                  <option>Tripura</option>
                                  <option>Uttar Pradesh</option>
                                  <option>Uttarakhand</option>
                                  <option>Wesh Bengal</option>
                                </select>
                              </div>
                              <div class="form-group col-md-2">
                                <label for="inputZip">Pin Code</label>
                                <input
                                  name="PINCODE"
                                  id="pinIdCust"
                                  type="text"
                                  class="form-control"
                                  pattern="^[0-9]{3,}$"
                                  onChange={(event) =>
                                    this.handleValueChange(event)
                                  }
                                  placeholder="Enter the Pin Code"
                                  onClick={this.a}
                                  required
                                  autoFocus
                                />
                                <div class="valid-feedback">Valid</div>
                                <div class="invalid-feedback">
                                  Please Enter Valid FirstName
                                </div>
                              </div>
                            </div>

                            {this.state.CONTACT !== "" &&
                            this.state.EMAIL !== "" &&
                            this.state.STATE !== "" &&
                            this.state.PINCODE !== "" ? (
                              <a
                                id="submitBtn"
                                type="submit"
                                className="btn btn-secondary"
                                style={{ marginTop: "-1%" }}
                                href="card"
                                onClick={this.process}
                              >
                                Submit
                              </a>
                            ) : (
                              <button
                                id="submitBtn"
                                type="submit"
                                class="btn btn-secondary"
                                style={{ marginTop: "-1%" }}
                                disabled
                              >
                                Submit
                              </button>
                            )}
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
        </section>
      </>
    );
  }
}

export default Feedback;
