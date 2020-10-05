import React, { PureComponent } from "react";

class Footer extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      // <footer>
      //   <div class="container-fluid p-4">
      //     <div class="row text-left">
      //       <div class="col-md-5 col-sm-5">
      //         <h4 class="text-light" on>
      //           About us
      //         </h4>
      //         <p class="text-muted">
      //         Arun T Supe (Proprietor) Gate No. 454/1, Moryacolony No. 6, Adarshanager, Moshi, Pune - 412105, Maharashtra, India
      //         </p>
      //         <p class="pt-4 text-muted">
      //           Copyright ©2019 All rights reserved | This template is made with
      //           by
      //           <span> Daily Tuition</span>
      //         </p>
      //       </div>
      //       <div class="col-md-5 col-sm-12">
      //         <h4 class="text-light">Newsletter</h4>
      //         <p class="text-muted">Stay Updated</p>
      //         <form class="form-inline">
      //           <div class="col pl-0">
      //             <div class="input-group pr-5">
      //               <input
      //                 type="text"
      //                 class="form-control bg-dark text-white"
      //                 id="inlineFormInputGroupUsername2"
      //                 placeholder="Email"
      //               />
      //               <div class="input-group-prepend">
      //                 <div class="input-group-text">
      //                   <i class="fas fa-arrow-right"></i>
      //                 </div>
      //               </div>
      //             </div>
      //           </div>
      //         </form>
      //       </div>
      //       <div class="col-md-2 col-sm-12">
      //         <h4 class="text-light" href = "mailto:info@gmail.com">info@gmail.com</h4>
      //         <p class="text-muted">Let us be social</p>
      //         <div class="column text-light">
      //           <i class="fab fa-facebook-f"></i>
      //           <i class="fab fa-instagram"></i>
      //           <i class="fab fa-twitter"></i>
      //           <i class="fab fa-youtube"></i>
      //         </div>
      //       </div>
      //     </div>
      //   </div>
      // </footer>


    
      <footer class="page-footer font-small unique-color-dark" >
      
        {/* <div style={{backgroundcolor: "black",marginTop:"-5%"}}>
          <div class="container">
      
            
            <div class="row py-4 d-flex align-items-center">
      
              
              <div class="col-md-6 col-lg-5 text-center text-md-left mb-4 mb-md-0">
                <h6 class="mb-0">Get connected with us on social networks!</h6>
              </div>
              
      
              
              <div class="col-md-6 col-lg-7 text-center text-md-right">
      
                
                <a class="fb-ic">
                  <i class="fab fa-facebook-f white-text mr-4"> </i>
                </a>
                
                <a class="tw-ic">
                  <i class="fab fa-twitter white-text mr-4"> </i>
                </a>
                
                <a class="gplus-ic">
                  <i class="fab fa-google-plus-g white-text mr-4"> </i>
                </a>
                
                <a class="li-ic">
                  <i class="fab fa-linkedin-in white-text mr-4"> </i>
                </a>
                
                <a class="ins-ic">
                  <i class="fab fa-instagram white-text"> </i>
                </a>
      
              </div>
              
      
            </div>

      
          </div>
        </div> */}
      
        
        <div class="container text-center text-md-left mt-1" >
      
          
          <div class="row mt-3" >  
      
            
            {/* <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
      
              
              <h6 class="text-uppercase font-weight-bold">Company name</h6>
              <hr class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: "60px"}}/>
              <p>Super Shell Industries Pune</p>
      
            </div>
        */}
            <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
      
              
              <h6 class="text-uppercase font-weight-bold">LINKS</h6>
              <hr class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: "60px"}}/>
              <p>
                <a href="aboutUs">About Us</a>
              </p>
              <p>
                <a href="page1">Products</a>
              </p>
              <p>
                <a href="distributorship">Distributorship</a>
              </p>
              <p>
                <a href="gallery">Gallery</a>
              </p>
              <p>
                <a href="contactUs">Contact Us</a>
              </p>
      
            </div>
         
            <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
      
              
              <h6 class="text-uppercase font-weight-bold">Products</h6>
              <hr class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: "60px"}}/>
              <p>
                <a href="page1">Automobile VRLA Battery</a>
              </p>
              <p>
                <a href="page2">Tubular Batter</a>
              </p>
              <p>
                <a href="page3">UPS Battery</a>
              </p>
              <p>
                <a href="page4">Battery Accessories</a>
              </p>
      
            </div>
          
            <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
      
              
              <h6 class="text-uppercase font-weight-bold">Contact</h6>
              <hr class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: "60px"}}/>
              <p>
                <i class="fas fa-home mr-3"></i> Arun T Supe (Proprietor) Gate No. 454/1, Moryacolony No. 6, Adarshanager, Moshi, Pune - 412105, Maharashtra, India</p>
              <p>
                <a href="mailto:supershell02@gmail.com"> <i class="fas fa-envelope mr-3"></i> supershell02@gmail.com</a> </p> 
                
                <p style={{marginLeft:"16%",marginTop:"-7%"}}> <a href="mailto:info@ssi-battery.com">info@ssi-battery.com</a> </p>
              <p>
                <i class="fas fa-phone mr-3"></i> +91 7038 83 8681</p>
              <p>
                <i class="fas fa-print mr-3"></i> +91 9270 12 5085</p>
      
            </div>
            
      
          </div>

      
        </div>
  
        <div class="footer-copyright text-center py-3" style={{marginBottom:"-8%"}}>© 2020 Copyright:
          <a href="/"> Super Shell Industries, Pune  </a>
        </div>
       
      
      </footer>
      

    );
  }
}

export default Footer;
