import React, { PureComponent } from "react";
import { withRouter } from 'react-router-dom';
import "../../Components/CheckOut/addToCart.css";
import A1 from "../../images/slider/Products/one.jpg";
// import PDF from "../../Components/SSI Catlog.pdf"
import PDF from "../../Components/Catlog.pdf"
var APICall = require("../../congfi/callAPI");
class AddToCart extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      product:this.props.history.location.state,
      purchaseBookIndividualCount: [],
      totalPrice: 0
    };
  }
  process = () => {
   var Details = {
    firstname : this.state.firstname,
     lastname : this.state.lastname,
     email : this.state.email,
     contact : this.state.contact,
     address : this.state.address,
     city : this.state.city,
     state : this.state.state,
     pincode : this.state.pincode,
   }

   APICall.Customerdetails(Details).then(res => {

   })
  }
  
  // decrement = (i, price) => {
  //   // if (this.state.purchaseBookIndividualCount[i] !== undefined) {
  //   // if (this.state.purchaseBookIndividualCount[i] > 1) {
  //   // this.state.purchaseBookIndividualCount[i]--;
  //   // this.setState({
  //   //   purchaseBookIndividualCount: this.state.purchaseBookIndividualCount,
  //   // });
  //   // this.state.totalPrice = this.state.totalPrice - parseInt(price);
  //   this.setState({ totalPrice: this.state.totalPrice - 1 });
  //   // }
  //   // }
  // };

  // increment = (i, price) => {
  //   // if (this.state.purchaseBookIndividualCount[i] !== undefined) {
  //   // this.state.purchaseBookIndividualCount[i]++;
  //   // this.setState({
  //   //   purchaseBookIndividualCount: this.state.purchaseBookIndividualCount,
  //   // });
  //   // this.state.totalPrice = this.state.totalPrice + parseInt(price);
  //   this.setState({ totalPrice: this.state.totalPrice + 1 });
  //   // }
  // };
  componentWillMount() {
    if(!this.props.history.location.state){
      this.setState({product : ""})
      this.props.history.push( { pathname : "/Error"})

    }else{
      // this.setState({product : ""})
      // this.props.history.push( { pathname : "/Error"})
    }
  }

  render() {
    console.log("abbbbbbbbbbbbbbbbbbbbbbbbbb",this.state.product.image);

    return (
      <>
        <div
          class="card"
          style={{ marginLeft: "10%", marginRight: "10%", marginTop: "10%" }}
        >
          <div class="card-header" style={{ textAlign: "center" }}>
            <img
              class="card-img-top"
              style={{ width: "30%" }}
              src={this.state.product.image}
              alt="Card image cap"
            />
  <h5 class="card-title" > Name :<a style={{color:"red"}} >{this.state.product.name}</a> </h5>
            <h5 class="card-title"> No of Order: <a style={{color:"red"}}>{this.state.product.order}</a> </h5>
            <h5 class="card-title"> Per Product Price : <a style={{color:"red"}}>{this.state.product.price }</a> </h5>
            <h5 class="card-title"> Total Price : <a style={{color:"red"}}>{this.state.product.price * this.state.product.order} /- </a> </h5>
            {/* <div>
              <button
                className="plus"
                onClick={() => {
                  this.decrement(1, 1);
                }}
              >
                -
              </button>
              <input className="text" value={this.state.totalPrice}></input>
              <button
                className="plus"
                onClick={() => {
                  this.increment(1, 1);
                }}
              >
                +
              </button>
            </div> */}
          </div>
          <div class="card-body">
            <blockquote class="blockquote mb-0">
              <table class="table table-striped">
                <tbody>
                  <tr>
                    <td>Name</td>
                    <td>{this.state.product.firstname}</td>
                  </tr>
                  <tr>
                    <td>Surname</td>
                    <td>{this.state.product.lastname}</td>
                  </tr>
                  <tr>
                    <td>Email</td>
                    <td>{this.state.product.email}</td>
                  </tr>
                  <tr>
                    <td>Contact</td>
                    <td>{this.state.product.contact}</td>
                  </tr>
                  <tr>
                    <td>Address</td>
                    <td>{this.state.product.address}</td>
                  </tr>
                  <tr>
                    <td>City</td>
                    <td>{this.state.product.city}</td>
                  </tr>
                  <tr>
                    <td>State</td>
                    <td>{this.state.product.state}</td>
                  </tr>
                  <tr>
                    <td>Pin Code</td>
                    <td>{this.state.product.pincode}</td>
                  </tr>
                </tbody>
              </table>
              <p>
             Check Your All Deatils
              </p>
              <p>
              Note :- After Click on submit one Email has been send follow the details of make the payment process after payment this order is confome
              </p>
              <a href={PDF} download class="btn btn-primary" onClick = {this.process}>
                submit
              </a>
            </blockquote>
          </div>
        </div>
      </>
    );
  }
}

export default withRouter(AddToCart);
