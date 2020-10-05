import React, { PureComponent } from "react";
import Products from "../images/slider/products-banner.jpg";
import ReactSnackBar from "react-js-snackbar";
var CallAPI = require("../congfi/callAPI");

class Distributorship extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      FIRSTNAME : "",
      LASTNAME :"",
      EMAIL : "",
      CONTACT : "",
      NAMEOFTHEFIRM:"",
      ADDRESSOFFIRM :"",
      YEAROFESTABLISHMENT : "",
      CITY : "",
      STATE : "",
      PINCODE : "",
      ABOUTCOMPANY : ""
    };
  }

  Register = () => {
    var form = {
      firstname : this.state.FIRSTNAME,
      lastname : this.state.LASTNAME,
      email : this.state.EMAIL,
      contact  :this.state.CONTACT,
      nameofthefirm : this.state.NAMEOFTHEFIRM,
      addreddoffirm : this.state.ADDRESSOFFIRM,
      yearofestablishment : this.state.YEAROFESTABLISHMENT,
      city : this.state.CITY,
      state : this.state.STATE,
      pincode : this.state.PINCODE,
      aboutcompany : this.state.ABOUTCOMPANY
    }

    CallAPI.Distrubutorshipform(form).then((res) => {
        if (this.state.Showing) return;

    this.setState({ Show: true, Showing: true });
    setTimeout(() => {
      this.setState({ Show: false, Showing: false });
      this.props.history.push("/");
    }, 3000);
    });
    
  }

  handleValueChange = event => {
    this.setState({ [event.target.name]: event.target.value });
    this.setState({ divHide: false });
 
    
  };

  render() {
    return (
      <>
        <img
          src={Products}
          class="img-fluid"
          style={{ marginTop: "4%", width: "100%" }}
          alt="Responsive Image"
        ></img>

        <div class="card" style={{ marginLeft: "10%", marginRight: "10%" }}>
          <h5 class="card-header info-color white-text text-center py-4">
            <strong>Distributorship From</strong>
          </h5>

          <div class="card-body px-lg-5 pt-0">
            <h6 style={{ marginTop: "3%", textAlign: "left", opacity: "70%" }}>
              <strong>
                If you are interested in becoming a distributor for Super Shell
                Industries products, please complete the fields below and submit
                online. This will be reviewed and we will contact you at the
                earliest to discuss your application.
              </strong>
            </h6>
            <h6 style={{ textAlign: "left", opacity: "70%" }}>
              <strong> * All Fields are mandatory.</strong>
            </h6>
            <form
              style={{ marginTop: "2%" }}
              id="myForm1"
              class="needs-validation"
            >
              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="inputEmail4">FirstName</label>
                  <input
                    name="FIRSTNAME"
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

                <div class="form-group col-md-6">
                  <label for="inputEmail4">LastName</label>
                  <input
                    name="LASTNAME"
                    id="lastNameId"
                    type="text"
                    class="form-control"
                    pattern="^[a-zA-Z]{3,15}$"
                    onChange={event => this.handleValueChange(event)}
                    placeholder="LastName"
                    required
                    autofocus
                  />
                  <div class="valid-feedback">Valid</div>
                  <div class="invalid-feedback">
                    Please Enter Valid LastName
                  </div>
                </div>
              </div>
              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="inputEmail4">Email</label>
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
                    Please Enter Valid Email-Id
                  </div>
                </div>
                <div class="form-group col-md-6">
                  <label for="inputEmail4">Phone number</label>
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
                    Please Enter Valid PhoneNumber
                  </div>
                </div>
              </div>

              <div class="form-group">
                <label for="inputAddress2">Name of the Firm *</label>
                <input
                  name="NAMEOFTHEFIRM"
                  id="firmId"
                  type="text"
                  class="form-control"
                  pattern="^[a-zA-Z]{3,}$"
                  onChange={event => this.handleValueChange(event)}
                  required
                  autofocus
                  placeholder="Enter the Name of the Firm"
                />
                <div class="valid-feedback">Valid</div>
                <div class="invalid-feedback">
                  Please Enter Valid Name of the Firm
                </div>
              </div>
              <div class="form-group">
                <label for="inputAddress2">Full Address of the Firm *</label>
                <input
                  name="ADDRESSOFFIRM"
                  id="adderssId"
                  type="text"
                  class="form-control"
                  pattern="^[a-zA-Z]{3,}$"
                  onChange={event => this.handleValueChange(event)}
                  autofocus
                  placeholder="Enter the Full Address of the Firm"
                  required
                />
                <div class="valid-feedback">Valid</div>
                <div class="invalid-feedback">
                  Please Enter Valid Full Address of the Firm
                </div>
              </div>
              <div class="form-group">
                <label for="inputAddress2">Year of Establishment *</label>
                <input
                  name="YEAROFESTABLISHMENT"
                  id="yearId"
                  type="text"
                  class="form-control"
                  pattern="^[a-zA-Z]{3,}$"
                  onChange={event => this.handleValueChange(event)}
                  autofocus
                  placeholder="Enter the Year of Establishment"
                  required
                />
                <div class="valid-feedback">Valid</div>
                <div class="invalid-feedback">
                  Please Enter Valid Year of Establishment
                </div>
              </div>
              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="inputCity">City</label>
                  <input
                    name="CITY"
                    id="cityId"
                    type="text"
                    class="form-control"
                    pattern="^[a-zA-Z]{3,}$"
                    onChange={event => this.handleValueChange(event)}
                    placeholder="Enter the Year of City"
                    required
                    autoFocus
                  />
                  <div class="valid-feedback">Valid</div>
                  <div class="invalid-feedback">
                    Please Enter Valid City
                  </div>
                </div>
                <div class="form-group col-md-4">
                  <label for="inputState">State</label>
                  <select id="inputState" class="form-control"
                  name = "STATE"
                  onChange={event => this.handleValueChange(event)}
                  required
                    autoFocus>
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
                    Please Enter Valid pin code
                  </div>
                </div>
              </div>
              <div>
                <div class="form-group">
                  <label for="inputAddress2">
                    Brief background of the Company *
                  </label>
                </div>
                <textarea
                  type="text"
                  name="ABOUTCOMPANY"
                  id="briefId"
                  class="form-control"
                  style={{ marginTop: "-2%", width: "100%", height: "80px" }}
                  pattern="^[a-zA-Z0-9]{5}$"
                  onChange={event => this.handleValueChange(event)}
                  minlength="10"
                  required
                ></textarea>
                <div class="valid-feedback">Valid</div>
                <div class="invalid-feedback">Min 20 letter</div>
              </div>
              {/* <button
                id="submitBtn"
                type="submit"
                class="btn btn-secondary"
                onClick = {this.Register}
                disabled
              >
                Register
              </button> */}
                {this.state.FIRSTNAME !== "" &&
                            this.state.LASTNAME !== "" &&
                            this.state.EMAIL !== "" &&
                            this.state.CONTACT !== "" && 
                            this.state.NAMEOFTHEFIRM !== "" && 
                            this.state.ADDRESSOFFIRM !== "" && 
                            this.state.YEAROFESTABLISHMENT !== "" && 
                            this.state.CITY !== "" && 
                            this.state.STATE !== ""  &&
                            this.state.PINCODE !== "" &&
                            this.state.ABOUTCOMPANY !== "" 

                             ? (
                              <a
                                id="submitBtn"
                                type="submit"
                                className="btn btn-secondary"
                                // style={{ marginTop: "-1%" }}
                                // href="card"
                                onClick={this.Register}
                              >
                                Submit
                              </a>
                            ) : (
                              <button
                                id="submitBtn"
                                type="submit"
                                class="btn btn-secondary"
                                // style={{ marginTop: "-1%" }}
                                disabled
                              >
                                Submit
                              </button>
                            )}
                               <div>
            <ReactSnackBar
              Icon={<span>🦄</span>}
              style={{ width: "70%" }}
              Show={this.state.Show}
            >
              Thank You !!! We will contact you
            </ReactSnackBar>
          </div>
            </form>
          </div>
        </div>
        {/* </form> */}

       
      </>
    );
  }
}

export default Distributorship;
