let script=document.createElement("script");
  script.src="https://unpkg.com/sweetalert/dist/sweetalert.min.js";
  script.type="text/javascript";
let Alldata=JSON.parse( localStorage.getItem("Alldata"));
console.log(Alldata);
let cartdata=JSON.parse(localStorage.getItem("cart_Data"))||[];
let container=document.getElementById("products_list");
Alldata.map(function(el)
{  
    let div=document.createElement("div");
      div.setAttribute("class","p_grid");
    let p=document.createElement("p");
    p.innerText=el.title;
    let pric=document.createElement("p");
    pric.innerText="$"+el.price;
    let image=document.createElement("img");
    image.src=el.url;
    let cart_div=document.createElement("div");
   cart_div.style.display="flex";
   cart_div.setAttribute("class","cart_div")
    
    let cart=document.createElement("img");
    cart.src="./images/cart.png";
    cart.style.width="50px";
    cart.style.height="40px";
    let cart_btn=document.createElement("button");
     cart_btn.append(cart);
     cart-cart_btn.setAttribute("class","cart_button")
     cart_btn.addEventListener("mouseover",()=>{
            cart_btn.innerText="Add To Cart";
             cart_btn.style.backgroundColor="gray";
     });
     cart_btn.addEventListener("mouseleave",()=>{
       cart_btn.innerText=""
       cart_btn.style.backgroundColor="";
      cart_btn.append(cart);
     });
     cart_btn.addEventListener("click",()=>{
        cartdata.push(el);
       localStorage.setItem("cart_Data",JSON.stringify(cartdata));
       swal({
        title: "WOw",
        text: "Addedd scuessfully",
        type: "success",
        button: "View Cart",
      }).then(okay => {
        if (okay) {
         window.location.href = "cart.html";
        }
    });
       
})
    cart_div.append(cart_btn,pric);
    div.append(image,p,cart_div);
  container.append(div);
})