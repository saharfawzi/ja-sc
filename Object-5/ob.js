
document.images[0].src="../Object-5/jpg";
document.images[0].alt="lab";



let img = "../Object-5/jpg"
let i = 0;

do {
  img += "<br>The Image  " + i;
  i++;
}
while (i < 14);  

document.getElementById("img").innerHTML = text;