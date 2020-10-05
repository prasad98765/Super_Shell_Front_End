import React, { PureComponent } from "react";
import "../../Components/mobile-style.css";
import "../../Components/Style.css";

class Videodiv extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <>
        <section class="view intro-video">
    <div class="hm-gradient">
      <div class="full-bg-img">
        <div class="container flex-center">
          <div class="row pt-5 mt-3">
            <div class="col-lg-6 wow fadeIn mb-5 text-center text-lg-left">
              <div class="white-text">
                <h1 class="h1-responsive font-weight-bold wow fadeInLeft" data-wow-delay="0.3s" style = {{color :"black"}}>A VALUED PARTNER SINCE 2012</h1>
                <hr class="hr-light wow fadeInLeft" data-wow-delay="0.3s" />
                <p class="wow fadeInLeft" data-wow-delay="0.3s" style = {{color :"black"}}>Lorem ipsum dolor sit amet, consectetur
                  adipisicing elit. Rem repellendus quasi fuga nesciunt dolorum nulla magnam veniam sapiente,
                  fugiat! Commodi sequi non animi ea dolor molestiae, quisquam iste, maiores. Nulla.</p>
                {/* <br> */}
                <a class="btn btn-outline-black wow fadeInLeft" style = {{color :"black"}}>Just do it!</a>
              </div>
            </div>

            <div class="col-lg-6 wow fadeIn" style = {{marginTop :"-27%"}}>
              <div class="embed-responsive embed-responsive-16by9 wow fadeInRight">
                {/* <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/IQyauRAxvjI"
                  allowfullscreen></iframe> */}
                  <video class="video-fluid z-depth-1" autoplay loop controls muted>
  <source src="https://mdbootstrap.com/img/video/Sail-Away.mp4" type="video/mp4" />
</video>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
 

      </>
    );
  }
}

export default Videodiv;
