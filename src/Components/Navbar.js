import React,{ useState ,useEffect } from "react";
import Cookies from "universal-cookie";
import style from "./Navbar.module.css";

function Navbar() {
  let Cookie = new Cookies()
  const [User, setUser ] = useState(false)

  let shopname = localStorage.getItem('shopname')
  useEffect(()=>{
    if(Cookie.get("Merchant_token")){
      if(shopname){
        setUser(shopname)
      }
    }
  })
 
  const Logout = ()=>{
    Cookie.remove("Merchant_token")
    localStorage.clear()
    window.location.href = "/merchant/login"
  }

  return (
    <div>
      <div className={style.nav}>
        <div className={style.nav_header}>
          <div className={style.nav_title}>ShopNear.</div>
        </div>
        <div className={style.nav_btn}>
          <label htmlFor={style.nav_check}>
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>

        <div className={style.nav_links}>
          {User?
          <a className={style.accName} href="//" >
            {User}
          </a>
          :
          <a className={style.accName} href="//" >
            Account
          </a>
          }
          <a href="/merchant" >
            Home
          </a>
          <a href="/merchant/product" >
            Products
          </a>
          <a href="https://" >
            Contact
          </a>
          <a href="https://" >
            About
          </a>
        </div>
        
        <div style={{color:'white',marginTop:'10px'}}  className={style.dropdown}>
        <a
          className={style.AccountName}
          style={{ color: "rgba(255, 238, 0, 0.849)", textDecoration: "none" }}
          href="https://"
        >
          <i style={{marginRight:'10px',marginTop:'4px'}} class="fas fa-user "></i> 
         {User?<a> {User}</a>:" Account"} 
        </a>
        <div class={style.dropdown_content}>
          {User?
         <a style={{cursor:"pointer",color:'black',textAlign:'center'}} onClick={Logout}>Logout</a>
         :
         <a href="/merchant/login">Login</a>
          }
        </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
