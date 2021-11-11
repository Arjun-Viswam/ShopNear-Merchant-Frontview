import React from 'react'
import style from './Footer.module.css'

function Footer() {
    return (
        <div>
            
<footer class={style.footer}>

<div class="container">
<div class="row">
<div class="col-lg-3 col-md-3">
<div class={style.about_jobby}>
{/* <a href="index-2.html"><img src="" alt=""/></a> */}
<h2 style={{color:"rgba(255, 238, 0, 0.849)"}}>Shop Near</h2>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu purus et diam blandit vehicula sit amet sed metus. Fusce condimentum non neque at fringilla. Aenean malesuada aliquet tincidunt.</p>
</div>
</div>
<div class="col-lg-3 col-md-3">
<div class={style.footer_links}>
<h4 style={{paddingLeft:"2rem",color:"rgba(255, 238, 0, 0.849)"}}>About</h4>
<ul>
<li><a href="about.html">About Us</a></li>
<li><a href="sign_in.html">Login</a></li>
<li><a href="my_freelancer_profile.html">My Account</a></li>
<li><a href="contact_us.html">Contact</a></li>
<li><a href="privacy_policy.html">Privacy Policy</a></li>
<li><a href="Terms.html">Terms of Use</a></li>
</ul>
</div>
</div>
<div class="col-lg-3 col-md-3">
<div class={style.footer_links}>
<h4 style={{paddingLeft:"2rem",color:"rgba(255, 238, 0, 0.849)"}}>For Shops</h4>
<ul>
<li><a href="browse_freelancers.html">Add Products</a></li>
<li><a href="post_a_job.html">Get Orders</a></li>
<li><a href="post_a_project.html">Get easy payments</a></li>
<li><a href="pricing_plans.html">Update Products</a></li>
</ul>
</div>
</div>
<div class="col-lg-3 col-md-3">
<div class={style.footer_links}>
<h4 style={{paddingLeft:"2rem",color:"rgba(255, 238, 0, 0.849)"}}>For Users</h4>
<ul>
<li><a href="browse_jobs.html">Browese Shops</a></li>
<li><a href="my_freelancer_jobs.html">Give Orders</a></li>
<li><a href="my_freelancer_jobs.html">Payments</a></li>
<li><a href="my_freelancer_bookmarks.html">Easy buy</a></li>
</ul>
</div>
</div>
</div>
</div>
<div class={style.copy_social}>
<div class="container">
<div class="row">
<div class="col-lg-6 col-md-6">
<div class={style.copyright}>
<i class="far fa-copyright"></i>Copyright 2021 <span>Shop Near</span> . All Right Reserved.
</div>
</div>
<div class="col-lg-6 col-md-6">
<div class={style.social_icons}>
<ul>
<li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
<li><a href="#"><i class="fab fa-twitter"></i></a></li>
<li><a href="#"><i class="fab fa-google-plus-g"></i></a></li>
<li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
</ul>
</div>
</div>
</div>
</div>
</div>
</footer>

        </div>
    )
}

export default Footer
