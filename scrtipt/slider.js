let left=1;
let right=4;

function show() {
  

  for (let i = left; i <= right; i++) {
    document.getElementById("c" + i).style.display = "inline-block";
    document.getElementById("s" + i).style.display = "inline-block";
    console.log("hii");
  }

}
function moveleft() {

  if (left >= 2 && right >= 6) {
    document.getElementById("c" + right).style.display = "none";
    left--;
    right--;
    for (i = left; i <= right; i++) {
          document.getElementById("c" + i).style.display = "inline-block";
   
        }
    }
  else {
    return;
  }
}
function moveright() {

  // console.log("before",left,right)
  if (left <= 3 && right <= 6) {
    document.getElementById("c" + left).style.display = "none";

    left+=1;//left=2
    right+=1;//right=6
    for (i= left; i <= right; i++) {
      document.getElementById("c" + i).style.display = "inline-block";
  
    }
    
  }
  else {
    return;
  }
   console.log(left,right);
}
// for (let index = 1; index <1000; index++) {
//   document.getElementById("s" + index).style.display = "none";
//   for (let i = index+1; i <8; i++) {
   
//     document.getElementById("s" + i).style.display = "inline-block";
//   }
  
// }

