import React, { PureComponent } from 'react'
import "../../Components/mobile-style.css";
import "../Products/Products.css"
class Products extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
          <>
            <div className="card mobileCard" style = {{textAlign : "center"}} >
              <p style={{fontSize:"130%",marginTop:"3%",color:"red"}}>PRODUCT CATEGORIES</p>
            <a href="page1" class="btn-link btn-lg btn-block" style={{marginTop:"-4%"}} >
            VRLA BATTERY
                  </a>
                  <a href="page2" class="btn-link btn-lg">
                  TUBULAR BATTERY
                  </a>
                  <a href="page3" class="btn-link btn-lg">
                  UPS BATTERY
                  </a>
                  <a href="page4" class="btn-link btn-lg">
                  BATTERY ACCESSORIES
                  </a>
            </div>
          </>
        )
    }
}

export default Products