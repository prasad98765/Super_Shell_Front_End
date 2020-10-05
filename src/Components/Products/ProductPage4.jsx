import React, { PureComponent } from "react";
import A1 from "../../images/ssi/ba/1.jpg";
import A3 from "../../images/ssi/ba/2.jpg";
import A4 from "../../images/ssi/ba/3.jpg";
import A2 from "../../images/slider/banner.jpg";
import Products from "../Products/products";
import { withRouter } from 'react-router-dom';

import "../Products/Products.css";
import "../../Components/mobile-style.css";
var CallAPI = require("../../congfi/callAPI");
class ProductPage1 extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      ALLPRODUCTS: [],
      LIST: [],
      product: "",
      price: "",
      NoOfOrder: "",
      image: "",
      FULLNAME : "",
      MESSAGE : "",
      FIRSTNAME: "",
      LASTNAME: "",
      EMAIL: "",
      CONTACT: "",
      ADDRESS: "",
      CITY: "",
      STATE: "",
      PINCODE: "",
      set: "",
      setfix: "abc",
      errors: {},
    };
  }
  async getProdct(name, price, NoofOrder,image) {
    this.setState({ image: `${image}` });
    this.setState({ product: `${name}` });
    this.setState({ price: `${price}` });
    this.setState({ NoOfOrder: `${NoofOrder}` });
  }
  handleValueChange = event => {
    this.setState({ [event.target.name]: event.target.value });
    this.setState({ divHide: false });

  };

  sendEmail = () => {
    console.log("abc");

    var EmailMessage = {
      PRODUCT : this.state.product,
      FUllNAME: this.state.FULLNAME,
      EMAIL: this.state.EMAIL,
      CONTACT: this.state.CONTACT,
      MESSAGE: this.state.MESSAGE,
    };
    CallAPI.Sendenquiry(EmailMessage).then((res) => {
      // setTimeout(() => {
      //   this.props.history.push({ pathname: "/page1" });
      // }, 2000);
    });

    // if (this.state.Showing) return;

    // this.setState({ Show: true, Showing: true });
    // setTimeout(() => {
    //   this.setState({ Show: false, Showing: false });
    //   // this.props.history.push("/page1");
    // }, 3000);

  };

  process = () => {
    var a = {
      image : this.state.image,
      name: this.state.product,
      price: this.state.price,
      order: this.state.NoOfOrder,
      firstname :this.state.FIRSTNAME,
      lastname :this.state.LASTNAME,
      email:this.state.EMAIL,
      contact : this.state.CONTACT,
      address : this.state.ADDRESS,
      city : this.state.CITY,
      state : this.state.STATE,
      pincode : this.state.PINCODE
    };
    this.props.history.push({ pathname: "/card", state: a });
  };
  componentWillMount() {
    CallAPI.Getproducts().then((res) => {
      // console.log('====================================');
      // console.log(res.data);
      // console.log('====================================');
      this.setState({ ALLPRODUCTS: res.data });
    });
  }

  render() {
    return (
      <>
        <img
          src={A2}
          class="img-fluid"
          style={{ marginTop: "4%" }}
          alt="Responsive Image"
        ></img>

        <div class="row">
          <div class="col-12 col-md-8 ">
            <h5 style={{ fontWeight: "bold", marginTop: "3%" }}>
            BATTERY ACCESSORIES
            </h5>
            <p style={{ opacity: "80%" }}>
            We “Super Shell Industries” are involved as the Manufacturer of Our product range includes a wide range of F Series F2 Battery Terminal, F1 Series Terminal and F Series F2 terminal and much more. These products are offered by us most affordable rates.
            </p>
            {/* {products} */}
            <div class="card-deck">
          <div class="card mb-3" style={{ maxwidth: "840%" }}>
            <div class="row no-gutters">
              <div class="col-md-4">
                <img
                  name  = "image"
                  class="card-img-top"
                  src={A1}
                  alt="Card image cap"
                />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title" style={{ fontWeight: "bold" }}>
                  F Series F2 Battery Terminal
                  </h5>
                  <h6 class="card-title">
                    Approx Price :{" "}
                    <a style={{ color: "red" }}> Rs Rs 1.5 / Piece</a>{" "}
                  </h6>
                  <h6 class="card-title">
                    Minimum Order Quantity :{" "}
                    <a style={{ color: "red" }}> 2000 Piece Pices </a>{" "}
                  </h6>
                </div>

                <table class="table table-striped">
                  <tbody>
                    <tr>
                      <td style={{ fontWeight: "bold" }}>Brand</td>
                      <td style={{ fontSize: "100%" }}>Super Shell</td>
                    </tr>
                    <tr>
                      <td style={{ fontWeight: "bold" }}>Material	</td>
                      <td style={{ fontSize: "100%" }}>Brass</td>
                    </tr>
                    <tr>
                      <td style={{ fontWeight: "bold" }}>size</td>
                      <td style={{ fontSize: "100%" }}>F2</td>
                    </tr>
                    <tr>
                      <td style={{ fontWeight: "bold" }}>usage</td>
                      <td style={{ fontSize: "100%" }}>
                        Battery
                      </td>
                    </tr>
                  </tbody>
                </table>

                <button
                  type="button"
                  class="btn btn-light btn-lg btn-block a"
                  data-toggle="modal"
                  data-target="#myModal"
                  id="abc"
                  onClick={() => this.getProdct("F Series F2 Battery Terminal")}
                >
                  Send Enquiry
                </button>
                <div class="container">
                  <div class="modal fade" id="myModal" role="dialog">
                    <div class="modal-dialog">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h4>
                            Your Are Enquiring about {this.state.product}{" "}
                          </h4>
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
                            <div class="form-row">
                              <div class="form-group col-md-6">
                                <label for="inputEmail4">FullName</label>
                                <input
                                  name="FULLNAME"
                                  id="ContactfisrtNameId"
                                  type="text"
                                  class="form-control"
                                  placeholder="FullName"
                                  onChange={(event) =>
                                    this.handleValueChange(event)
                                  }
                                  required
                                  // autofocus
                                />
                                <div class="valid-feedback">Valid</div>
                                <div class="invalid-feedback">
                                  Please Enter Valid FirstName
                                </div>
                              </div>
                              <div class="form-group col-md-6">
                                <label for="inputPassword4">Phone *</label>
                                <input
                                  name="CONTACT"
                                  id="ContactfisrtNameId"
                                  type="text"
                                  class="form-control"
                                  pattern="^[0-9]{10}$"
                                  onChange={(event) =>
                                    this.handleValueChange(event)
                                  }
                                  required
                                  placeholder="Contact"
                                />
                                <div class="valid-feedback">Valid</div>
                                <div class="invalid-feedback">
                                  Please Enter Valid FirstName
                                </div>
                              </div>
                            </div>
                            <div class="form-group">
                              <label for="inputAddress">Email *</label>
                              <input
                                name="EMAIL"
                                id="ContactemailId"
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
                              <label for="inputAddress">Message *</label>

                              <textarea
                                type="text"
                                name="MESSAGE"
                                id="Page1briefId"
                                class="form-control"
                                style={{
                                  marginTop: "-2%",
                                  marginBottom: "-7%",
                                  width: "100%",
                                  height: "80px",
                                }}
                                pattern="^[a-zA-Z0-9]{5}$"
                                onChange={(event) =>
                                  this.handleValueChange(event)
                                }
                                minlength="10"
                                required
                              ></textarea>
                            </div>

                            <button
                              id="submitBtn"
                              type="submit"
                              class="btn btn-primary"
                              onClick = {this.sendEmail}
                              enable
                            >
                              Register
                            </button>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <h1></h1> */}
                {/* <a className="btn btn-light btn-lg btn-block a" href="Card">
                Purchase
              </a> */}
                <button
                  type="button"
                  class="btn btn-light btn-lg btn-block a"
                  data-toggle="modal"
                  data-target="#myModal1"
                  onClick={() =>
                    this.getProdct("F Series F2 Battery Terminal","1.5","2000",A1)
                  }
                >
                  Parchase
                </button>
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
                          <form>
                            <h6 style={{ opacity: "70%" }}>
                              All <a style={{ color: "red" }}> (*)</a> marked
                              fields are required.{" "}
                            </h6>
                            <div class="form-row">
                              <div class="form-group col-md-6">
                                <label for="inputEmail4">FirstName *</label>
                                <input
                                  name="FIRSTNAME"
                                  id="fisrtNameId"
                                  type="text"
                                  class="form-control"
                                  placeholder="FirstName"
                                  onChange={event => this.handleValueChange(event)}
                                  autofocus
                                />
                              </div>
                              <div class="form-group col-md-6">
                                <label for="inputPassword4">LastName *</label>
                                <input
                                  name="LASTNAME"
                                  id="lastNameId"
                                  type="text"
                                  class="form-control"
                                  placeholder="LastName"
                                  onChange={event => this.handleValueChange(event)}
                                  autofocus
                                />
                              </div>
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
                                onChange={event => this.handleValueChange(event)}
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
                                onChange={event => this.handleValueChange(event)}
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
                                onChange={event => this.handleValueChange(event)}
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
                                  onChange={event => this.handleValueChange(event)}
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
                                  onChange={event => this.handleValueChange(event)}
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
                                  id="pinId"
                                  type="text"
                                  class="form-control"
                                  pattern="^[0-9]{3,}$"
                                  onChange={event => this.handleValueChange(event)}
                                  placeholder="Enter the Pin Code"
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
              </div>
            </div>
          </div>
        </div>
        

        <div class="card-deck">
          <div class="card mb-3" style={{ maxwidth: "840%" }}>
            <div class="row no-gutters">
              <div class="col-md-4">
                <img
                  name  = "image"
                  class="card-img-top"
                  src={A3}
                  alt="Card image cap"
                />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title" style={{ fontWeight: "bold" }}>
                  F1 Series Terminal
                  </h5>
                  <h6 class="card-title">
                    Approx Price :{" "}
                    <a style={{ color: "red" }}>  Rs 1.35 / Piece</a>{" "}
                  </h6>
                  <h6 class="card-title">
                    Minimum Order Quantity :{" "}
                    <a style={{ color: "red" }}> 2000 Piece Pices </a>{" "}
                  </h6>
                </div>

                <table class="table table-striped">
                  <tbody>
                    <tr>
                      <td style={{ fontWeight: "bold" }}>Brand</td>
                      <td style={{ fontSize: "100%" }}>Super Shell</td>
                    </tr>
                    <tr>
                      <td style={{ fontWeight: "bold" }}>Material	</td>
                      <td style={{ fontSize: "100%" }}>Brass</td>
                    </tr>
                    <tr>
                      <td style={{ fontWeight: "bold" }}>size</td>
                      <td style={{ fontSize: "100%" }}>F1</td>
                    </tr>
                    <tr>
                      <td style={{ fontWeight: "bold" }}>usage</td>
                      <td style={{ fontSize: "100%" }}>
                        Battery
                      </td>
                    </tr>
                  </tbody>
                </table>

                <button
                  type="button"
                  class="btn btn-light btn-lg btn-block a"
                  data-toggle="modal"
                  data-target="#myModal"
                  id="abc"
                  onClick={() => this.getProdct("F1 Series Terminal")}
                >
                  Send Enquiry
                </button>
                <div class="container">
                  <div class="modal fade" id="myModal" role="dialog">
                    <div class="modal-dialog">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h4>
                            Your Are Enquiring about {this.state.product}{" "}
                          </h4>
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
                            <div class="form-row">
                              <div class="form-group col-md-6">
                                <label for="inputEmail4">FullName</label>
                                <input
                                  name="FULLNAME"
                                  id="ContactfisrtNameId"
                                  type="text"
                                  class="form-control"
                                  placeholder="FullName"
                                  onChange={(event) =>
                                    this.handleValueChange(event)
                                  }
                                  required
                                  // autofocus
                                />
                                <div class="valid-feedback">Valid</div>
                                <div class="invalid-feedback">
                                  Please Enter Valid FirstName
                                </div>
                              </div>
                              <div class="form-group col-md-6">
                                <label for="inputPassword4">Phone *</label>
                                <input
                                  name="CONTACT"
                                  id="ContactfisrtNameId"
                                  type="text"
                                  class="form-control"
                                  pattern="^[0-9]{10}$"
                                  onChange={(event) =>
                                    this.handleValueChange(event)
                                  }
                                  required
                                  placeholder="Contact"
                                />
                                <div class="valid-feedback">Valid</div>
                                <div class="invalid-feedback">
                                  Please Enter Valid FirstName
                                </div>
                              </div>
                            </div>
                            <div class="form-group">
                              <label for="inputAddress">Email *</label>
                              <input
                                name="EMAIL"
                                id="ContactemailId"
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
                              <label for="inputAddress">Message *</label>

                              <textarea
                                type="text"
                                name="MESSAGE"
                                id="Page1briefId"
                                class="form-control"
                                style={{
                                  marginTop: "-2%",
                                  marginBottom: "-7%",
                                  width: "100%",
                                  height: "80px",
                                }}
                                pattern="^[a-zA-Z0-9]{5}$"
                                onChange={(event) =>
                                  this.handleValueChange(event)
                                }
                                minlength="10"
                                required
                              ></textarea>
                            </div>

                            <button
                              id="submitBtn"
                              type="submit"
                              class="btn btn-primary"
                              onClick = {this.sendEmail}
                              enable
                            >
                              Register
                            </button>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <h1></h1> */}
                {/* <a className="btn btn-light btn-lg btn-block a" href="Card">
                Purchase
              </a> */}
                <button
                  type="button"
                  class="btn btn-light btn-lg btn-block a"
                  data-toggle="modal"
                  data-target="#myModal1"
                  onClick={() =>
                    this.getProdct("F1 Series Terminal","1.5","2000",A3)
                  }
                >
                  Parchase
                </button>
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
                          <form>
                            <h6 style={{ opacity: "70%" }}>
                              All <a style={{ color: "red" }}> (*)</a> marked
                              fields are required.{" "}
                            </h6>
                            <div class="form-row">
                              <div class="form-group col-md-6">
                                <label for="inputEmail4">FirstName *</label>
                                <input
                                  name="FIRSTNAME"
                                  id="fisrtNameId"
                                  type="text"
                                  class="form-control"
                                  placeholder="FirstName"
                                  onChange={event => this.handleValueChange(event)}
                                  autofocus
                                />
                              </div>
                              <div class="form-group col-md-6">
                                <label for="inputPassword4">LastName *</label>
                                <input
                                  name="LASTNAME"
                                  id="lastNameId"
                                  type="text"
                                  class="form-control"
                                  placeholder="LastName"
                                  onChange={event => this.handleValueChange(event)}
                                  autofocus
                                />
                              </div>
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
                                onChange={event => this.handleValueChange(event)}
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
                                onChange={event => this.handleValueChange(event)}
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
                                onChange={event => this.handleValueChange(event)}
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
                                  onChange={event => this.handleValueChange(event)}
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
                                  onChange={event => this.handleValueChange(event)}
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
                                  id="pinId"
                                  type="text"
                                  class="form-control"
                                  pattern="^[0-9]{3,}$"
                                  onChange={event => this.handleValueChange(event)}
                                  placeholder="Enter the Pin Code"
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
              </div>
            </div>
          </div>
        </div>

        <div class="card-deck">
          <div class="card mb-3" style={{ maxwidth: "840%" }}>
            <div class="row no-gutters">
              <div class="col-md-4">
                <img
                  name  = "image"
                  class="card-img-top"
                  src={A4}
                  alt="Card image cap"
                />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title" style={{ fontWeight: "bold" }}>
                  F Series F2 Terminal
                  </h5>
                  <h6 class="card-title">
                    Approx Price :{" "}
                    <a style={{ color: "red" }}> Rs 1.5 / Piece</a>{" "}
                  </h6>
                  <h6 class="card-title">
                    Minimum Order Quantity :{" "}
                    <a style={{ color: "red" }}> 2000 Piece Pices </a>{" "}
                  </h6>
                </div>

                <table class="table table-striped">
                  <tbody>
                    <tr>
                      <td style={{ fontWeight: "bold" }}>Brand</td>
                      <td style={{ fontSize: "100%" }}>Super Shell</td>
                    </tr>
                    <tr>
                      <td style={{ fontWeight: "bold" }}>Material	</td>
                      <td style={{ fontSize: "100%" }}>Brass</td>
                    </tr>
                    <tr>
                      <td style={{ fontWeight: "bold" }}>size</td>
                      <td style={{ fontSize: "100%" }}>F2</td>
                    </tr>
                    <tr>
                      <td style={{ fontWeight: "bold" }}>Usage</td>
                      <td style={{ fontSize: "100%" }}>12 volt 7.2 ah Battery</td>
                    </tr>
                    <tr>
                      <td style={{ fontWeight: "bold" }}>usage</td>
                      <td style={{ fontSize: "100%" }}>
                        Battery
                      </td>
                    </tr>
                  </tbody>
                </table>

                <button
                  type="button"
                  class="btn btn-light btn-lg btn-block a"
                  data-toggle="modal"
                  data-target="#myModal"
                  id="abc"
                  onClick={() => this.getProdct("F Series F2 Terminal")}
                >
                  Send Enquiry
                </button>
                <div class="container">
                  <div class="modal fade" id="myModal" role="dialog">
                    <div class="modal-dialog">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h4>
                            Your Are Enquiring about {this.state.product}{" "}
                          </h4>
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
                            <div class="form-row">
                              <div class="form-group col-md-6">
                                <label for="inputEmail4">FullName</label>
                                <input
                                  name="FULLNAME"
                                  id="ContactfisrtNameId"
                                  type="text"
                                  class="form-control"
                                  placeholder="FullName"
                                  onChange={(event) =>
                                    this.handleValueChange(event)
                                  }
                                  required
                                  // autofocus
                                />
                                <div class="valid-feedback">Valid</div>
                                <div class="invalid-feedback">
                                  Please Enter Valid FirstName
                                </div>
                              </div>
                              <div class="form-group col-md-6">
                                <label for="inputPassword4">Phone *</label>
                                <input
                                  name="CONTACT"
                                  id="ContactfisrtNameId"
                                  type="text"
                                  class="form-control"
                                  pattern="^[0-9]{10}$"
                                  onChange={(event) =>
                                    this.handleValueChange(event)
                                  }
                                  required
                                  placeholder="Contact"
                                />
                                <div class="valid-feedback">Valid</div>
                                <div class="invalid-feedback">
                                  Please Enter Valid FirstName
                                </div>
                              </div>
                            </div>
                            <div class="form-group">
                              <label for="inputAddress">Email *</label>
                              <input
                                name="EMAIL"
                                id="ContactemailId"
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
                              <label for="inputAddress">Message *</label>

                              <textarea
                                type="text"
                                name="MESSAGE"
                                id="Page1briefId"
                                class="form-control"
                                style={{
                                  marginTop: "-2%",
                                  marginBottom: "-7%",
                                  width: "100%",
                                  height: "80px",
                                }}
                                pattern="^[a-zA-Z0-9]{5}$"
                                onChange={(event) =>
                                  this.handleValueChange(event)
                                }
                                minlength="10"
                                required
                              ></textarea>
                            </div>

                            <button
                              id="submitBtn"
                              type="submit"
                              class="btn btn-primary"
                              onClick = {this.sendEmail}
                              enable
                            >
                              Register
                            </button>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <h1></h1> */}
                {/* <a className="btn btn-light btn-lg btn-block a" href="Card">
                Purchase
              </a> */}
                <button
                  type="button"
                  class="btn btn-light btn-lg btn-block a"
                  data-toggle="modal"
                  data-target="#myModal1"
                  onClick={() =>
                    this.getProdct("F Series F2 Terminal","1.5","2000",A4)
                  }
                >
                  Parchase
                </button>
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
                          <form>
                            <h6 style={{ opacity: "70%" }}>
                              All <a style={{ color: "red" }}> (*)</a> marked
                              fields are required.{" "}
                            </h6>
                            <div class="form-row">
                              <div class="form-group col-md-6">
                                <label for="inputEmail4">FirstName *</label>
                                <input
                                  name="FIRSTNAME"
                                  id="fisrtNameId"
                                  type="text"
                                  class="form-control"
                                  placeholder="FirstName"
                                  onChange={event => this.handleValueChange(event)}
                                  autofocus
                                />
                              </div>
                              <div class="form-group col-md-6">
                                <label for="inputPassword4">LastName *</label>
                                <input
                                  name="LASTNAME"
                                  id="lastNameId"
                                  type="text"
                                  class="form-control"
                                  placeholder="LastName"
                                  onChange={event => this.handleValueChange(event)}
                                  autofocus
                                />
                              </div>
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
                                onChange={event => this.handleValueChange(event)}
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
                                onChange={event => this.handleValueChange(event)}
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
                                onChange={event => this.handleValueChange(event)}
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
                                  onChange={event => this.handleValueChange(event)}
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
                                  onChange={event => this.handleValueChange(event)}
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
                                  id="pinId"
                                  type="text"
                                  class="form-control"
                                  pattern="^[0-9]{3,}$"
                                  onChange={event => this.handleValueChange(event)}
                                  placeholder="Enter the Pin Code"
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
              </div>
            </div>
          </div>
        </div>
        
        
          </div>
          <div class="col-6 col-md-4" style={{ marginTop: "1%" }}>
            <Products></Products>
          </div>
        </div>
      </>
    );
  }
}

export default withRouter(ProductPage1);
