import React, { PureComponent } from "react";
import Media from "../../images/slider/post.jpg";
import { withRouter } from 'react-router-dom';
var CallAPI = require("../../congfi/callAPI");

class PostProduct extends PureComponent {
  documentData;
  constructor(props) {
    super(props);

    this.state = {
      Battery_Accessories : "",
      UPS_Battery : "",
      Tubular_Battery : "",
      VRLA_Battery : "",
      TYPE : "",
      NAME : "",
      upsBattery : [
        "12 Volt 7.2Ah UPS Battery",
        "12 Volt 4.5 AH VRLA Battery",
        "6 Volt 4.5 Ah VRLA Battery Sunaka Type"
      ],
      tubularBattery : [
        "Tubular Battery",
        "Solar Tubular Battery"
      ],
      vrlaBattery : [
        "12 Volt 12 Ah Battery",
        "12 Volt 2.5 LC VRLA Battery",
        "12 Volt 4 LB VRLA Battery",
        "12 Volt 5 LB VRLA Battery",
        "12 Volt 7 LB VRLA Battery",
        "12 Volt 9 LB VRLA Battery",
        "4V Rechargeable Battery"
      ],
      selectProduct : [
        "select type first"
      ]

    };
  }

  componentWillMount = () => {
    // this.setState({selectProduct :  })
    if (this.props.history.location.state == "ssi") {
      this.documentData = JSON.parse(localStorage.getItem("document"));    
      if (localStorage.getItem("document")) {
        this.setState({
          Battery_Accessories: this.documentData.Battery_Accessories,
          UPS_Battery: this.documentData.UPS_Battery,
          Tubular_Battery: this.documentData.Tubular_Battery,
          VRLA_Battery: this.documentData.VRLA_Battery
        });
      } else {
        this.setState({
          Battery_Accessories: "",
          UPS_Battery: "",
          Tubular_Battery: "",
          VRLA_Battery: ""
        });
      }
   
    } else {
      this.props.history.push({ pathname: "/error" });
    }

  };


  handleValueChange = event => {
    this.setState({ [event.target.name]: event.target.value });
    this.setState({ divHide: false });
 
    
  };


  delete = () => {
    var deleteProduct = {
        type : this.state.TYPE,
        name : this.state.NAME
    }
    

    CallAPI.delectProduct(deleteProduct).then(res => {
      console.log(res.data.data);
    });

  }
  

  update = () => {
    var UpdateProduct = {
        type : this.state.TYPE,
        name : this.state.NAME
    }
    

    CallAPI.findProduct(UpdateProduct).then(res => {
      console.log("got find data ",res.data.data);
      this.props.history.push({ pathname: "/update" , state :res.data.data});

    });


  }

   getProduct = async (event) => {
  
    this.setState({ TYPE : await event.target.value });

    switch(this.state.TYPE){
      case "VRLA Battery" : 
      console.log("VRLA Battery");
      
      this.setState({selectProduct : this.state.vrlaBattery})
      break;
      case "Tubular Battery" : 
      console.log("Tubular Battery");
      
      this.setState({selectProduct : this.state.tubularBattery})
      break;
      case "UPS Battery" : 
      console.log("UPS Battery");
      
      this.setState({selectProduct : this.state.upsBattery})
      break;
    }
  }

  process = () => {
    var manage = {
      VRLA_Battery : this.state.VRLA_Battery,
      Tubular_Battery : this.state.Tubular_Battery,
      UPS_Battery : this.state.UPS_Battery,
      Battery_Accessories : this.state.Battery_Accessories,
      
    }
    localStorage.setItem("document", JSON.stringify(manage));

  }

  render() {
    console.log('====================================');
    console.log("get name",this.state.NAME);
    console.log('====================================');
    return (
      <>
        <img
          src={Media}
          class="img-fluid"
          style={{ marginTop: "4%", width: "100%" }}
          alt="Responsive Image"
        ></img>

        <div class="card" style={{ marginTop: "5%", alignItems: "center" }}>
          <div class="container">
            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4">
              <div class="col">
                <a
                  className="btn btn-light btn-lg btn-block a"
                  style={{ marginTop: "-1%" }}
                  href="postProduct"
                >
                  New Post
                </a>
              </div>
              <div class="col">
                <a
                  className="btn btn-light btn-lg btn-block a"
                  style={{ marginTop: "-1%", color: "black" }}
                  data-toggle="modal"
                  data-target="#myModal"
                >
                  Delete
                </a>
                <div class="container">
                  <div class="modal fade" id="myModal" role="dialog">
                    <div class="modal-dialog">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h4>Delect Product{this.state.product} </h4>
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
                            <div class="form-group">
                              <label for="inputState">Select Product *</label>
                              <select id="inputState" class="form-control" name = "TYPE" onChange={event => this.getProduct(event)} >
                                <option>Select Type</option>
                                <option>VRLA Battery</option>
                                <option>Tubular Battery</option>
                                <option>UPS Battery</option>
                              </select>
                            </div>
                            <div class="form-group">
                              <label for="inputState">Select Product *</label>
                              <select id="inputState" class="form-control" name = "NAME"
                                onChange={event => this.handleValueChange(event)} >
                               {
                                 this.state.selectProduct.map((value,index) => {
                                 return (
                                 
                                 <option>{value}</option>)
                                 })
                               }
                              </select>
                            </div>
                            <a
                              className="btn"
                              style={{ marginTop: "-1%" }}
                              onClick={this.delete}
                            >
                              Delete
                            </a>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col">
                <a
                  className="btn btn-light btn-lg btn-block a"
                  style={{ marginTop: "-1%", color: "black" }}
                  data-toggle="modal"
                  data-target="#myModal1"
                >
                  Update
                </a>
                <div class="container">
                  <div class="modal fade" id="myModal1" role="dialog">
                    <div class="modal-dialog">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h4>Update the Product{this.state.product} </h4>
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
                            <div class="form-group">
                              <label for="inputState">Select Product *</label>
                              <select id="inputState" class="form-control" name = "TYPE" onChange={event => this.getProduct(event)}>
                                <option>select option</option>
                                <option>VRLA Battery</option>
                                <option>Tubular Battery</option>
                                <option>UPS Battery</option>
                              </select>
                            </div>
                            <div class="form-group">
                              <label for="inputState">Select Product *</label>
                              <select id="inputState" class="form-control" name = "NAME"
                                onChange={event => this.handleValueChange(event)} >
                               {
                                 this.state.selectProduct.map((value,index) => {
                                 return (
                                 
                                 <option>{value}</option>)
                                 })
                               }
                              </select>
                            </div>
                            {/* <div class="form-group">
                              <label for="inputAddress2">Name *</label>
                              <input
                                type="text"
                                class="form-control"
                                id="inputAddress2"
                                
                                placeholder="Apartment, studio, or floor"
                              />
                            </div> */}
                            <a
                              className="btn"
                              style={{ marginTop: "-1%" }}
                              href = "update"
                              onClick={ this.update}
                              
                            >
                              Update
                            </a>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* <div class="col">
                <a
                  className="btn btn-light btn-lg btn-block a"
                  style={{ marginTop: "-1%", color: "black" }}
                  data-toggle="modal"
                  data-target="#myModal2"
                >
                  Manage
                </a>
                <div class="container">
                  <div class="modal fade" id="myModal2" role="dialog">
                    <div class="modal-dialog">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h4>Select Option{this.state.product} </h4>
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
                            <div class="form-group">
                              <div class="custom-control custom-checkbox">
                                <input
                                  type="checkbox"
                                  class="custom-control-input"
                                  id="VRLA_Battery"
                                  name = "VRLA_Battery"
                                  checked = {this.state.VRLA_Battery} 
                                  onChange={event => this.handleValueChange(event)}
                                />
                                <label
                                  class="custom-control-label"
                                  for="VRLA_Battery"
                                >
                                  Automobile VRLA Battery
                                </label>
                              </div>
                            </div>

                            <div class="form-group">
                              <div class="custom-control custom-checkbox">
                                <input
                                  type="checkbox"
                                  class="custom-control-input"
                                  id="defaultUnchecked1"
                                  name = "Tubular_Battery"
                                  checked={this.state.Tubular_Battery} 
                                  onChange={event => this.handleValueChange(event)}
                                />
                                <label
                                  class="custom-control-label"
                                  for="defaultUnchecked1"
                                >
                                  Tubular Battery
                                </label>
                              </div>
                            </div>

                            <div class="form-group">
                              <div class="custom-control custom-checkbox">
                                <input
                                  type="checkbox"
                                  class="custom-control-input"
                                  id="defaultUnchecked2"
                                  name = "UPS_Battery"
                                  checked={this.state.UPS_Battery}
                                  onChange={event => this.handleValueChange(event)}
                                />
                                <label
                                  class="custom-control-label"
                                  for="defaultUnchecked2"
                                >
                                  UPS Battery
                                </label>
                              </div>
                            </div>

                            <div class="form-group">
                              <div class="custom-control custom-checkbox">
                                <input
                                  type="checkbox"
                                  name = "Battery_Accessories"
                                  class="custom-control-input"
                                  checked={this.state.Battery_Accessories}
                                  onChange={event => this.handleValueChange(event)}
                                  id="defaultUnchecked3"
                                />
                                <label
                                  class="custom-control-label"
                                  for="defaultUnchecked3"
                                >
                                  Battery Accessories
                                </label>
                              </div>
                            </div>
                            <a
                              className="btn"
                              style={{ marginTop: "-1%" }}
                              
                              onClick={this.process}
                            >
                              Update
                            </a>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default withRouter(PostProduct);
