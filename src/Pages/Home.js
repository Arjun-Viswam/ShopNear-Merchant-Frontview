import React, { useEffect } from 'react'
import style from './Home.module.css'
import cookie from "universal-cookie";
import { useHistory } from "react-router-dom";
import Navbar from '../Components/Navbar';
import Body from '../Components/Body';
import Footer from '../Components/Footer';

function Home() {
    const Cookies = new cookie();
    var history = useHistory();
    useEffect(() => {
        const Merchant_token = Cookies.get("Merchant_token");
        if (Merchant_token) {
          history.push("/merchant");
    }else{
      window.location.href = "/merchant/login"
    }
  },[]);
    return (
      <div className={style.merchant_body}>
      <Navbar/>
      <div  className={` row ${style.row}`}>
      
      <div className="col-md-6">
        <div className={style.bodyImg}>
        <img src="images/E-Commerce-Data-Entry.gif"/>
        </div>
      </div>
      <div className="col-md-5">
      <div className={style.orderDiv}>
        <h3 className={style.title}>All orders</h3>
      <Body  />
      
      </div>
      </div>
     </div>
      <Footer/>
   </div>
    )
}

export default Home
