const navbar=()=>{
   return ` <div class="head1">
    <div>
        <h3>FREE SHIPPING ON ALL ORDERS OVER 35$</h3>
    </div>
</div>
<div class="head2">
    <div class="logo">
       <a href="index.html"><img
            src="https://cdn.shopify.com/s/files/1/0399/1728/9633/files/new-logo.png?height=628&pad_color=ffffff&v=1591028951&width=1200"></a>
    </div>
    <div id="">
        <a href="shop.html">
            <h3>Shop</h3>
        </a>
    </div>
    <div id="">
        <a href="#">
            <h3>About</h3>
        </a>

    </div>
    <div class="store">
        <a href="#">
            <h3>Store Locator</h3>
        </a>

    </div>
    <div class="search"><img src="./images/search.png" width="50px" height="50px"></div>
    <div class="account"><img src="./images/account.png" width="50px" height="50px"></div>
    <div class="cart"><a href="cart.html"><img src="./images/cart.png" width="50px" height="50px"></a></div>
</div>`;
};
const footbar=()=>{
    return ` <div class="footer_content">
    <div class="footer_details">
        <h2>Info</h2>
       <p><a>Contact Us</a></p> 
        <p><a>FAQ</a></p> 
        <p><a>Blog</a></p> 
        <p><a>Store Locator </a></p>
        <p><a>Careers</a></p>
    
    </div>
    <div class="footer_details">
        <h2>Policies</h2>
        <p><a href="#">Shipping & Returns</a></p>
        <p><a href="#">Terms & Conditions</a></p>
        <p><a href="#">Privacy</a></p>
        <p><a href="#">CCPA</a></p>
        <p><a href="#">Accessibility</a></p>
    </div>
    <div class="footer_details">
        <h2>Contact Us</h2>
        <h3>Email</h3>
        <a href="">writetous@himalayausa.com</a>
        <h3>Phone:</h3>
        <a href="#">1-800-869-4640</a>
        <p>Mon-Fri, 8am-5pm CT</p>
        <h3>Mail:</h3>
        <p>Himalaya Wellness</p>
        <a href="">1101 Gillingham Lane
            Sugar Land, TX 77478​</a>
    </div>
     
    <div class="footer_details">
        <h2>Subscribe to Our Newsletter!</h2>
       <div class="terms" >
        <input type="text" placeholder="Enter Your E-mail">
        <img src="https://flyclipart.com/thumb2/free-icons-mail-18588.png" width="50px" height="50px">
         </div>
         <div>
          <p>By entering your email, you agree to our</p>
          <a href="#">Terms & Conditions and Privacy Policy.</a>
          </div>
          <div class="fotter_social">
              <h3>Follow Us</h3>
        <a href="#" class="soc"><img src="https://img.freepik.com/free-vector/instagram-icon_1057-2227.jpg"></a>
        <a href="#" class="soc"><img src="https://icons-for-free.com/iconfiles/png/512/fb+logo+social+social+media+social+network+icon-1320191784115198611.png"></a>
    </div>

    </div>
</div>`;
}
export {navbar,footbar};