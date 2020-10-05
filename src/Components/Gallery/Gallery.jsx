import React, { PureComponent } from 'react'
import "../../Components/Gallery/Gallery.css"
import $ from "jquery"
import A1 from "../../images/slider/Products/one.jpg";
import A2 from "../../images/slider/Products/two.jpg";
import A3 from "../../images/slider/Products/three.jpg";
import A4 from "../../images/slider/Products/four.jpg";
import A5 from "../../images/slider/Products/five.jpg";
import A6 from "../../images/slider/Products/six.jpg";
import Media from "../../images/slider/media.jpg"
import A from "../../images/ssi/avb/1.jpg"
import B from "../../images/ssi/avb/2.jpg"
import C from "../../images/ssi/avb/3.jpg"
import D from "../../images/ssi/avb/5.jpg"
import E from "../../images/ssi/avb/7.jpg"
import F from "../../images/ssi/avb/9.jpg"
import G from "../../images/ssi/ba/1.jpg"
import H from "../../images/ssi/ba/2.jpg"
import I from "../../images/ssi/tb/1.jpg"
import J from "../../images/ssi/tb/2.jpg"
import K from "../../images/ssi/ups/1.jpg"
import L from "../../images/ssi/ups/2.jpg"
import M from "../../images/ssi/ups/3.jpg"
import N from "../../images/ssi/one.png"
import O from "../../images/ssi/two.png"
import P from "../../images/ssi/three.png"


class Gallery extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }
    componentDidMount() {
      // $(".container").on("click", '[data-toggle="lightbox"]', function(event) {
      //    // $(this).ekkoLightbox();
      //    // event.preventDefault();
      //  });
    }
    render() {
        return (
           <>
                 <img
          src={Media}
          class="img-fluid"
          style={{ marginTop: "4%", width: "100%" }}
          alt="Responsive Image"
        ></img>
           

<div class="row">

  
  <div class="col-md-12 d-flex justify-content-center mb-5">

    <button type="button" class="btn btn-outline-black waves-effect filter" data-rel="all">All</button>
    <button type="button" class="btn btn-outline-black waves-effect filter" data-rel="1">Certificate</button>
    <button type="button" class="btn btn-outline-black waves-effect filter" data-rel="2">Products</button>
    <button type="button" class="btn btn-outline-black waves-effect filter" data-rel="2">Compnay</button>


  </div>
  

</div>

<div class="gallery" id="gallery"style = {{marginLeft:"2%",marginRight:"2%"}}>

  
  <div class="mb-3 pics animation all 2">
  <a href = "/Page1">
    <img class="img-fluid" src={A} alt="Card image cap" />
    </a>
  </div>

  <div class="mb-3 pics animation all 2">
    <img class="img-fluid" src={B} alt="Card image cap"/>
  </div>

  <div class="mb-3 pics animation all 2">
    <img class="img-fluid" src={C} alt="Card image cap"/>
  </div>

  <div class="mb-3 pics animation all 2">
    <img class="img-fluid" src={D} alt="Card image cap"/>
  </div>

  <div class="mb-3 pics animation all 2">
    <img class="img-fluid" src={E} alt="Card image cap"/>
  </div>

  <div class="mb-3 pics animation all 2">
    <img class="img-fluid" src={F} alt="Card image cap"/>
  </div>
  <div class="mb-3 pics animation all 2">
    <img class="img-fluid" src={G} alt="Card image cap"/>
  </div>

  <div class="mb-3 pics animation all 2">
    <img class="img-fluid" src={H} alt="Card image cap"/>
  </div>
  <div class="mb-3 pics animation all 2">
    <img class="img-fluid" src={I} alt="Card image cap"/>
  </div>
  <div class="mb-3 pics animation all 2">
    <img class="img-fluid"  src={J} alt="Card image cap"/>
  </div>
  <div class="mb-3 pics animation all 2">
    <img class="img-fluid" src={K} alt="Card image cap"/>
  </div>
  <div class="mb-3 pics animation all 2">
    <img class="img-fluid" src={L} alt="Card image cap"/>
  </div>
  <div class="mb-3 pics animation all 2">
    <img class="img-fluid" src={M} alt="Card image cap"/>
  </div>
  <div class="mb-3 pics animation all 1">
    
    <img class="img-fluid" src={N} alt="Card image cap" title = "OHSAS 45001:2018 certificate" />
    
  </div>
  <div class="mb-3 pics animation all 1">
    <img class="img-fluid" src={O} alt="Card image cap" title = "ISO 9001:2015 certificate"/>
  </div>
  
  <div class="mb-3 pics animation all 1">
    <img class="img-fluid" src={P} alt="Card image cap"title="cc certificate" />
  </div>
  
  

</div>
 
                    
             
{/* <a target="_blank" href="https://twitter.com/kamildyrek"><svg style={{width:"2em",height:"2em",position:"fixed",top:"1em",left:"1em",opacity:".8"}} viewBox="0 0 24 24"><path fill="#fff" d="M17.71,9.33C18.19,8.93 18.75,8.45 19,7.92C18.59,8.13 18.1,8.26 17.56,8.33C18.06,7.97 18.47,7.5 18.68,6.86C18.16,7.14 17.63,7.38 16.97,7.5C15.42,5.63 11.71,7.15 12.37,9.95C9.76,9.79 8.17,8.61 6.85,7.16C6.1,8.38 6.75,10.23 7.64,10.74C7.18,10.71 6.83,10.57 6.5,10.41C6.54,11.95 7.39,12.69 8.58,13.09C8.22,13.16 7.82,13.18 7.44,13.12C7.81,14.19 8.58,14.86 9.9,15C9,15.76 7.34,16.29 6,16.08C7.15,16.81 8.46,17.39 10.28,17.31C14.69,17.11 17.64,13.95 17.71,9.33M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2Z" /></svg></a> */}
  
            {/* <div class="container" style = {{marginTop : "8%"}}>
  <div class="row">
    <a href="" data-toggle="lightbox" data-gallery="gallery" class="col-md-4">
      <img src={A1} class="img-fluid rounded"/>
    </a>
    <a href="https://unsplash.it/1200/768.jpg?image=252" data-toggle="lightbox" data-gallery="gallery" class="col-md-4">
      <img src={A2} class="img-fluid rounded"/>
    </a>
    <a href="https://unsplash.it/1200/768.jpg?image=253" data-toggle="lightbox" data-gallery="gallery" class="col-md-4">
      <img src={A3} class="img-fluid rounded"/>
    </a>
  </div>
  <div class="row">
    <a href="https://unsplash.it/1200/768.jpg?image=254" data-toggle="lightbox" data-gallery="gallery" class="col-md-4">
      <img src={A4} class="img-fluid rounded"/>
    </a>
    <a href="https://unsplash.it/1200/768.jpg?image=255" data-toggle="lightbox" data-gallery="gallery" class="col-md-4">
      <img src={A5} class="img-fluid rounded"/>
    </a>
    <a href="https://unsplash.it/1200/768.jpg?image=256" data-toggle="lightbox" data-gallery="gallery" class="col-md-4">
      <img src={A6} class="img-fluid rounded"/>
    </a>
  </div>
</div> */}

       </>
        )
    }
}
export default Gallery