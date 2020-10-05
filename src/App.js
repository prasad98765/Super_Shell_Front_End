import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home"
import Contact from "./Pages/Contact"
import Products from "./Pages/Products"
import Gallery from "./Pages/Gallery"
import Distributorship from "./Pages/Distributorship"
import Footer from "./Components/Footer";
import Page1 from "./Components/Products/ProductPage1"
import Page2 from "./Components/Products/ProductPage2"
import Page3 from "./Components/Products/ProductPage3"
import Page4 from "./Components/Products/ProductPage4"
import Card from "./Components/CheckOut/addToCart"
import Payment from "./Components/Payment/Payment"
import Error from "./Pages/Erroe"
import Login from "./Components/Login/Login"
import Postproduct from "./Components/Login/PostProduct"
import Post from "./Components/Login/post"
import Aboutus from "./Pages/AboutUs"
import Update from "./Components/Login/update"

import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar></Navbar>
        <Switch>
          <Route path="/" component={Home} exact = {true} />
          <Route path="/aboutUs" component={Aboutus} />
          <Route path="/contactUs" component={Contact} />
          <Route path="/products" component={Products} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/page1" component={Page1} />
          <Route path="/page2" component={Page2} />
          <Route path="/page3" component={Page3} />
          <Route path="/page4" component={Page4} />
          <Route path="/card" component={Card} />
          <Route path="/payment" component={Payment} />
          <Route path="/distributorship" component={Distributorship} />
          <Route path="/Error" component={Error} />
          <Route path="/login" component={Login} />
          <Route path="/post" component={Postproduct} />
          <Route path="/postProduct" component={Post} />
          <Route path="/update" component={Update} />

        </Switch>
        <Footer></Footer>
      </BrowserRouter>
      </>
  );
}

export default App;
