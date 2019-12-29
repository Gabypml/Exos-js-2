//const image1 = document.getElementById("image1");
image1.addEventListener("mouseover", () => {

    if (image1.getAttribute("src") === "images/image1.jpg") 
        image1.src = "images/image1_2.jpg";
    else 
        image1.src = "images/image1.jpg";     
});