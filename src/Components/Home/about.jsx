import React, { Component } from "react";
import '../../Components/mobile-style.css';
import '../../Components/Style.css';
import W from "../../images/slider/w.jpg"
export default class Info extends Component {
  render() {
    return (
      <section class="section-1" style={{marginTop:"-6%"}}>
                    <img
          src={W}
          class="img-fluid"
          style={{ marginTop: "4%", width: "140%",opacity:"70%" }}
          alt="Responsive Image"
        ></img>
        <div>
          <div>
            <div>
              <div>
                <div class="panel">
                  <p style={{marginTop:"8%"}}>
                    Established in 2012, Super Shell Industries is the leading
                    Manufacturer and Trader of Automobile VRLA Battery, Tubular
                    Battery, Material Handling Equipment, VRLA Battery Group
                    Burning Set, Pad Printing, Lead Melting Pot, UPS Battery and
                    Battery Accessories and many more. We are backed by a huge
                    production unit equipped with all the latest machines and
                    tools. The offered range is engineered using quality assured
                    raw material and is widely appreciated in various
                    commercial, industrial and residential establishments.
                  </p>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
       
           
      </section>
    );
  }
}
