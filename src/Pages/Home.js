import React, { useEffect } from 'react'
// import AppSidebar from '../Components/AppSidebar'
import cookie from "universal-cookie";
import { useHistory } from "react-router-dom";
import Navbar from '../Components/Navbar';
import Body from '../Components/Body';
import Footer from '../Components/Footer';

function Home() {
    const Cookies = new cookie();
    var history = useHistory();
    console.log(history);
    useEffect(() => {
        const Merchant_token = Cookies.get("Merchant_token");
        if (Merchant_token) {
          history.push("/merchant");
    }else{
      window.location.href = "/merchant/login"
    }
  },[]);
    return (
        <div>
           <Navbar/>
           <Body/>
           <Footer/>
        </div>
    )
}

export default Home
