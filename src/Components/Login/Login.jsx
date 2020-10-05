import React, { PureComponent } from "react";

class Login extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
        password : ""
    };
  }

  login = () => {
        if(this.state.password === "supershell"){
          this.props.history.push( { pathname : "/post", state :"ssi"})
            
        }else{
          this.props.history.push( { pathname : "/error"})
            
        }
  }
  handleValueChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
      console.log(this.state.password);
      
    return (
      <>
        
          <div
            class="modal-dialog cascading-modal modal-avatar modal-sm"
            role="document"
          >
            <div class="modal-content" style={{ marginTop: "42%" }}>
              <div class="modal-header">
                <img
                  src="https://mdbootstrap.com/img/Photos/Avatars/img%20%281%29.jpg"
                  alt="avatar"
                  class="rounded-circle img-responsive"
                />
              </div>

              <div class="modal-body text-center mb-1">
                <h5 class="mt-1 mb-2" style={{fontWeight :"bold"}}>Arun Supe</h5>

                <div class="md-form ml-0 mr-0">
                  <input
                    type="password"
                    type="password"
                    name = "password"
                    lable = "password"
                    id="form29"
                    placeholder="Enter Your Password"
                    onChange={event => this.handleValueChange(event)}
                    class="form-control form-control-sm validate ml-0"
                  />
                </div>

                <div class="text-center mt-4">
                  <button class="btn btn-cyan mt-1" onClick={this.login}>
                    Login <i class="fas fa-sign-in ml-1"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        
      </>
    );
  }
}

export default Login;
