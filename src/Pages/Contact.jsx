import React, { PureComponent } from 'react'
import Contact from "../Components/ContactUs/Contactus"
import { withRouter } from "react-router-dom";

class ContactUs extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    abc = (value) => {
        console.log('====================================');
        console.log("abbabababbababbabab",value);
        console.log('====================================');
        this.props.history.push({ pathname: "/" });
    }

    render() {
        return (
            <Contact value = {this.abc} ></Contact>
        )
    }
}

export default withRouter(ContactUs)