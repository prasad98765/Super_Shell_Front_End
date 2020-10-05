import React, { PureComponent } from 'react'
import Info from "../Components/Home/info";
import About from "../Components/Home/about";
import Imges from "../Components/Home/sideShow";
import ShowProduct from "../Components/Home/DisplayProduct";
import Video from "../Components/Home/videodiv";
import Feedback from "../Components/Home/Feedback";

class Home extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <>
            {/* <Router></Router> */}
            <Imges></Imges>
              <Info></Info>
              <About></About>
              <Video></Video>
              <ShowProduct></ShowProduct>
              <Feedback></Feedback>
            </>
        )
    }
}

export default Home