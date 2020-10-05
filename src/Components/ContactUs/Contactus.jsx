import React, { PureComponent } from "react";
import "../Aboutus/Aboutus.css";
// import "../Aboutus/agency.min.css"
import Contact from "../../images/slider/countact.jpg";
import ReactSnackBar from "react-js-snackbar";
import { withRouter } from "react-router-dom";

var CallAPI = require("../../congfi/callAPI");

class ContactusPage extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      FUllNAME: "",
      EMAIL: "",
      SUBJECT: "",
      MESSAGE: "",
      Show: false,
      Showing: false,
    };
  }
  handleValueChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
    this.setState({ divHide: false });
  };

  sendEmail = () => {
    console.log("abc");

    var EmailMessage = {
      FUllNAME: this.state.FUllNAME,
      EMAIL: this.state.EMAIL,
      SUBJECT: this.state.SUBJECT,
      MESSAGE: this.state.MESSAGE,
    };
    CallAPI.Sendmessage(EmailMessage).then((res) => {
      if (this.state.Showing) return;

      this.setState({ Show: true, Showing: true });
      setTimeout(() => {
        this.setState({ Show: false, Showing: false });
        // this.props.history.push("/contactUs");
        this.props.value("abc")
      }, 3000);
    });
  };

  show = () => {};
  render() {
    console.log("====================================");
    console.log(this.state.FUllNAME);
    console.log("====================================");
    return (
      <>
        <img
          src={Contact}
          class="img-fluid"
          style={{ marginTop: "4%", width: "100%" }}
          alt="Responsive Image"
        ></img>

        <section class="mb-4" style={{ marginLeft: "3%", marginRight: "3%" }}>
          <h2 class="h1-responsive font-weight-bold text-center my-4">
            Get in touch with us
          </h2>
          <div class="row">
            <div class="col-md-9 mb-md-0 mb-5">
              <form id="myForm1" class="needs-validation">
                <div class="row">
                  <div class="col-md-6">
                    <div class="md-form mb-0">
                      <input
                        name="FUllNAME"
                        id="ContactfullName"
                        type="text"
                        class="form-control"
                        pattern="^[a-zA-Z]{3,}$"
                        placeholder="FirstName"
                        onChange={(event) => this.handleValueChange(event)}
                        required
                        autofocus
                      />
                      <div class="valid-feedback">Valid</div>
                      <div class="invalid-feedback">
                        Please Enter Valid firstName (min 3)
                      </div>
                    </div>
                  </div>

                  <div class="col-md-6">
                    <div class="md-form mb-0">
                      <input
                        type="text"
                        id="Contactemail"
                        name="EMAIL"
                        class="form-control"
                        placeholder="Your Email"
                        pattern="^[a-zA-Z0-9]{1,}[._+-]?[a-zA-Z0-9]{1,}[@][a-zA-Z0-9]{1,}([.][a-zA-Z]{2,4}){1,2}$"
                        onChange={(event) => this.handleValueChange(event)}
                        required
                        autofocus
                      />
                      <div class="valid-feedback">Valid</div>
                      <div class="invalid-feedback">
                        Please Enter Valid email
                      </div>
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="col-md-12">
                    <div class="md-form mb-0">
                      <input
                        type="text"
                        id="Contactsubject"
                        name="SUBJECT"
                        class="form-control"
                        placeholder="Your Subject"
                        pattern="^[a-zA-Z]{3,}$"
                        onChange={(event) => this.handleValueChange(event)}
                        required
                        autofocus
                      />
                      <div class="valid-feedback">Valid</div>
                      <div class="invalid-feedback">
                        Please Enter Valid Subject(min 3)
                      </div>
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="col-md-12">
                    <div class="md-form">
                      <textarea
                        type="text"
                        id="Contactmessage"
                        name="MESSAGE"
                        rows="2"
                        class="form-control md-textarea"
                        placeholder="Your Message"
                        minlength="10"
                        onChange={(event) => this.handleValueChange(event)}
                        required
                      ></textarea>
                      <div class="valid-feedback">Valid</div>
                      <div class="invalid-feedback">
                        Please Enter Valid massage (min 10 word)
                      </div>
                    </div>
                  </div>
                </div>

                <div class="text-center text-md-left">
                  {this.state.FUllNAME !== "" ? (
                    // this.state.MESSAGE !== "" &&
                    // this.state.SUBJECT !== "" &&
                    // this.state.EMAIL !== ""
                    <a
                      id="submitBtn"
                      type="submit"
                      className="btn btn-secondary"
                      style={{ marginTop: "-1%" }}
                      onClick={this.sendEmail}
                      // href = "contactUs"
                    >
                      Submit
                    </a>
                  ) : (
                    <button
                      id="submitBtnabc"
                      type="submit"
                      class="btn btn-secondary"
                      style={{ marginTop: "-1%" }}
                      disabled
                    >
                      Submit
                    </button>
                  )}
                </div>
              
              </form>

              <div>
                <ReactSnackBar
                  Icon={<span>🦄</span>}
                  style={{ width: "70%" }}
                  Show={this.state.Show}
                >
                  Thank You !!! We will contact you
                </ReactSnackBar>
              </div>

              <div class="status"></div>
            </div>

            <div class="col-md-3 text-center">
              <ul class="list-unstyled mb-0">
                <li>
                  <i class="fas fa-map-marker-alt fa-2x"></i>
                  <p>
                    Arun T Supe (Proprietor) Gate No. 454/1, Moryacolony No. 6,
                    Adarshanager, Moshi, Pune - 412105, Maharashtra, India
                  </p>
                </li>

                <li>
                  <i class="fas fa-phone mt-4 fa-2x"></i>
                  <p>+91 7038 83 8681/ 9270 12 5085</p>
                </li>

                <li>
                  <i class="fas fa-envelope mt-4 fa-2x"></i>
                  <p>
                    {" "}
                    <a
                      href="mailto:supershell02@gmail.com"
                      style={{ color: "rgb(66, 59, 59)" }}
                    >
                      supershell02@gmail.com
                    </a>
                  </p>
                  <p style={{ marginTop: "-4%" }}>
                    {" "}
                    <a
                      style={{ color: "rgb(66, 59, 59)" }}
                      href="mailto:info@ssi-battery.com"
                    >
                      info@ssi-battery.com
                    </a>{" "}
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default withRouter(ContactusPage);
