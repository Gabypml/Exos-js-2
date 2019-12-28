const image = document.getElementById("image1");
image.addEventListener("mouseover", () => {
    let changement= document.getElementById("image1");
    let v = changement.getAttribute("src");
    //console.log(changement);
  if(v == "images/image1.jpg"){
    v = "images/image1_2.jpg";
  }else{
    v = "images/image1.jpg";
  changement.setAttribute("src", v);
  }
});