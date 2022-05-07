let cart_img=document.getElementById("ptn_cart_page");
let cartData=JSON.parse(localStorage.getItem("cart_Data"))||[];
cartData.map(function(el){
    let cart_div=document.createElement("div");
     cart_div.setAttribute("class","pt_item")
   let img=document.createElement("img");
    img.src=el.url;
    let name=document.createElement("p");
     name.innerText=el.title;
     let image=document.createElement("img");
     image.src="https://png.pngtree.com/element_our/20190528/ourmid/pngtree-delete-icon-image_1129289.jpg"
     image.style.width="50px";
     image.style.height="40px"; 
     let price=document.createElement("p");
     price.innerText=el.price; 
     let div=document.createElement("div");
      div.append(name,price)
    
        let btn=document.createElement("button");
        btn.style.height="50px";
        btn.append(image);
        btn.addEventListener("click",function()
        {
                let index=cartData.indexOf(el);
                console.log(index)
                cartData.splice(index,1); 
                console.log(cartData);
                localStorage.setItem("cart_Data",JSON.stringify(cartData));
                cart_div.style.display="none";
                document.location.reload(true);
        });
      cart_div.append(btn,img,div)  
      cart_img.append(cart_div);
 });

 console.log(cartData);
 let totalPrice=cartData.reduce(function(ac,cv)
{    console.log(cv);
    return ac+Number(cv.price);
    
},0);
console.log(totalPrice);
document.querySelector("#cart_total").innerText=" Total Price  "+totalPrice;