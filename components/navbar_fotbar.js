
 import {navbar,footbar} from "./navbar.js";
console.log(navbar);
console.log(footbar);
let header=document.getElementById("header");
let footer=document.getElementById("footer");
header.innerHTML=navbar();
 footer.innerHTML=footbar();
