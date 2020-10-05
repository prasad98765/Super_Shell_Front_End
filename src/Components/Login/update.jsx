import React, { PureComponent } from "react";
import { withRouter } from 'react-router-dom';

var CallAPI = require("../../congfi/callAPI");

class Post extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
    //   TYPE : this.props.history.location.state.TYPE,
      NAME : this.props.history.location.state.NAME,
      PRICE: this.props.history.location.state.PRICE,
      NOOFORDER : this.props.history.location.state.ORDER,
      DECRIPTION :this.props.history.location.state.DECRIPTION,
      BRAND :"Super Shell",
      BATTERYTYPE :this.props.history.location.state.LIST.secound,
      CAPACITY : this.props.history.location.state.LIST.third,
      VOLTAGE :  this.props.history.location.state.LIST.forth,
      VTYPE : this.props.history.location.state.LIST.five,
      WARRANTY :this.props.history.location.state.LIST.six
    };
    this.state.value = this.props.history.location.state;
    console.log("in update class",this.props.history.location.state);
    
  }

  process = () => {
    var product = {
    _id : this.state.value._id,
      type :this.state.value.TYPE,
      name :this.state.NAME,
      price :this.state.PRICE,
      nooforder :this.state.NOOFORDER,
      decription :this.state.DECRIPTION,
      moreinfo :{
        first : this.state.BRAND,
        secound : this.state.BATTERYTYPE,
        third : this.state.CAPACITY,
        forth : this.state.VOLTAGE,
        five : this.state.VTYPE,
        six : this.state.WARRANTY,
      }
    }

    console.log(product);
    CallAPI.updateProduct(product).then(res => {
      console.log(res.data.data);
      
    });

  };

  handleValueChange = event => {
    this.setState({ [event.target.name]: event.target.value });
    this.setState({ divHide: false });

  };
  

//   getfile = async event => {
//     this.setState({ FILE: event.target.files[0] });
//     const formData = new FormData();
//     formData.append("filePath", event.target.files[0]);
//     CallAPI.getImagePath(formData).then(res => {
//       this.setState({ IMAGEPATH: res.data.url });
//     });
//   };

componentWillMount = () => {
  var manage = {

  }
  localStorage.setItem("document", JSON.stringify(manage));
  
}

  render() {
    console.log("abc",this.state.value._id);
    
    return (
      <>
        <div
          class="card"
          style={{ marginLeft: "10%", marginRight: "10%", marginTop: "5%" }}
        >
          <h5 class="card-header info-color white-text text-center py-4">
            <strong>Update the Product</strong>
          </h5>

          <div class="card-body px-lg-5 pt-0">
            <h6 style={{ marginTop: "3%", textAlign: "left", opacity: "70%" }}>
              <strong>* All Fields are mandatory.</strong>
            </h6>

            <form style={{ marginTop: "2%" }}>
            <div class="form-group">
                <label for="inputAddress2">Type *</label>
                <input
                  type="text"
                  class="form-control"
                  id="inputAddress2"
                  name = "TYPE"
                  value={this.state.value.TYPE}
                  onChange={event => this.handleValueChange(event)}
                  placeholder="Apartment, studio, or floor"
                />
              </div>

              <div class="form-group">
                <label for="inputAddress2">Name *</label>
                <input
                  type="text"
                  class="form-control"
                  id="inputAddress2"
                  name = "NAME"
                  ref={(value) => {
                    this.input = value;
                  }}
                  defaultValue={this.state.value.NAME}
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
                  ref={(value) => {
                    this.input = value;
                  }}
                  defaultValue={this.state.value.PRICE}
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
                  ref={(value) => {
                    this.input = value;
                  }}
                  defaultValue={this.state.value.ORDER}
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
                  ref={(value) => {
                    this.input = value;
                  }}
                  defaultValue={this.state.value.DECRIPTION}
                  onChange={event => this.handleValueChange(event)}
                  style={{ marginTop: "-2%", width: "100%", height: "80px" }}
                ></textarea>
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
                  ref={(value) => {
                    this.input = value;
                  }}
                  defaultValue={this.state.value.LIST.secound}
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
                  ref={(value) => {
                    this.input = value;
                  }}
                  defaultValue={this.state.value.LIST.third}
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
                  ref={(value) => {
                    this.input = value;
                  }}
                  defaultValue={this.state.value.LIST.forth}
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
                  ref={(value) => {
                    this.input = value;
                  }}
                  defaultValue={this.state.value.LIST.five}
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
                  ref={(value) => {
                    this.input = value;
                  }}
                  defaultValue={this.state.value.LIST.six}
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

export default withRouter(Post);
