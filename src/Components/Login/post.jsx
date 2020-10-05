import React, { PureComponent } from "react";
var CallAPI = require("../../congfi/callAPI");

class Post extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      TYPE : "",
      NAME : "",
      PRICE: "",
      NOOFORDER : "",
      DECRIPTION :"",
      IMAGEPATH : "",
      BRAND :"Super Shell",
      BATTERYTYPE :"",
      CAPACITY : "",
      VOLTAGE :"",
      VTYPE :"",
      WARRANTY :""
    };
  }

  process = () => {
    var product = {
      type :this.state.TYPE,
      name :this.state.NAME,
      price :this.state.PRICE,
      nooforder :this.state.NOOFORDER,
      decription :this.state.DECRIPTION,
      imagepath :this.state.IMAGEPATH,
      moreinfo :{
        first : this.state.BRAND,
        secound : this.state.BATTERYTYPE,
        third : this.state.CAPACITY,
        forth : this.state.VOLTAGE,
        five : this.state.VTYPE,
        six : this.state.WARRANTY,
      }
    }

    console.log(product.moreinfo);
    CallAPI.postProduct(product).then(res => {
      console.log(res.data.data);
      
    });

  };

  handleValueChange = event => {
    this.setState({ [event.target.name]: event.target.value });
    this.setState({ divHide: false });

  };
  

  getfile = async event => {
    this.setState({ FILE: event.target.files[0] });
    const formData = new FormData();
    formData.append("filePath", event.target.files[0]);
    CallAPI.getImagePath(formData).then(res => {
      this.setState({ IMAGEPATH: res.data.url });
    });
  };

  render() {
    console.log(this.state.TYPE);
    
    
    return (
      <>
        <div
          class="card"
          style={{ marginLeft: "10%", marginRight: "10%", marginTop: "5%" }}
        >
          <h5 class="card-header info-color white-text text-center py-4">
            <strong>New Product</strong>
          </h5>

          <div class="card-body px-lg-5 pt-0">
            <h6 style={{ marginTop: "3%", textAlign: "left", opacity: "70%" }}>
              <strong>* All Fields are mandatory.</strong>
            </h6>

            <form style={{ marginTop: "2%" }}>
              <div class="form-group">
                <label for="inputState">Select Product *</label>
                <select id="inputState" class="form-control" name = "TYPE" onChange={event => this.handleValueChange(event)}>
                <option>select type</option>
                  <option>VRLA Battery</option>
                  <option>Tubular Battery</option>
                  <option>UPS Battery</option>
                  <option>Battery Accessories</option>
                </select>
              </div>

              <div class="form-group">
                <label for="inputAddress2">Name *</label>
                <input
                  type="text"
                  class="form-control"
                  id="inputAddress2"
                  name = "NAME"
                  onChange={event => this.handleValueChange(event)}
                  placeholder="Apartment, studio, or floor"
                />
              </div>
              <div class="form-group">
                <label for="inputAddress2">Price *</label>
                <input
                  type="Number"
                  class="form-control"
                  id="inputAddress2"
                  name = "PRICE"
                  onChange={event => this.handleValueChange(event)}
                  placeholder="Apartment, studio, or floor"
                />
              </div>
              <div class="form-group">
                <label for="inputAddress2">No. of Order *</label>
                <input
                  type="Number"
                  class="form-control"
                  id="inputAddress2"
                  name = "NOOFORDER"
                  onChange={event => this.handleValueChange(event)}
                  placeholder="Apartment, studio, or floor"
                />
              </div>
              <div>
                <div class="form-group">
                  <label for="inputAddress2">Product Decription *</label>
                </div>
                <textarea
                  name="comment"
                  form="usrform"
                  placeholder="Apartment, studio, or floor"
                  name = "DECRIPTION"
                  onChange={event => this.handleValueChange(event)}
                  style={{ marginTop: "-2%", width: "100%", height: "80px" }}
                ></textarea>
              </div>

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

              <label for="inputAddress2">More Info *</label>
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  id="inputAddress2"
                  value="Super Shell"
                  placeholder="Brand"
                />
              </div>
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  id="inputAddress2"
                  name = "BATTERYTYPE"
                  onChange={event => this.handleValueChange(event)}
                  placeholder="Battery Type"
                />
              </div>
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  id="inputAddress2"
                  name = "CAPACITY"
                  onChange={event => this.handleValueChange(event)}
                  placeholder="Capacity (A)"
                />
              </div>
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  id="inputAddress2"
                  name = "VOLTAGE"
                  onChange={event => this.handleValueChange(event)}
                  placeholder="Nominal Voltage"
                />
              </div>
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  id="inputAddress2"
                  name = "VTYPE"
                  onChange={event => this.handleValueChange(event)}
                  placeholder="Vehicle Type"
                />
              </div>
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  id="inputAddress2"
                  name ="WARRANTY"
                  onChange={event => this.handleValueChange(event)}
                  placeholder="Warranty"
                />
              </div>

              <a
                className="btn btn-primary"
                style={{ marginTop: "3%"}}
                onClick={this.process}
              >
                Submit
              </a>
            </form>
          </div>
        </div>
      </>
    );
  }
}

export default Post;
