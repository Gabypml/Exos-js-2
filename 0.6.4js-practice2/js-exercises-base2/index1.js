function surfaceRectagle(largeur, longueur) {

    largeur = +prompt("largeur")
    longueur = +prompt("longueur")
    alert('Surface:'+(longueur*largeur)); 
 }
function perimetreRectangle(lar, long){
    largeur = parseInt(prompt("lar"))
    longueur = parseInt(prompt("long"))
    let reponse= +(long+lar)*2
    console.log(reponse)
    alert(reponse)
}

(() =>{

    document.getElementById("valider").addEventListener('click', ()=> {

        surfaceRectagle()
    })


    document.getElementById("perimetre").addEventListener('click', ()=> {

        perimetreRectangle()
    })


})()