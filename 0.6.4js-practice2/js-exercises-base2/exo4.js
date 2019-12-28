//1. Créez un tableau nommé `tab` dont le premier élément est -2, le deuxième 1 et le troisième 4
//2. Créez une fonction `additionne` prenant un argument x et renvoyant le résultat de l'addition de x à 2
//3. Créez une fonction `affiche`, appelée au clic sur un bouton, qui affiche dans des boîtes d'alerte successivement le résultat de `additionne` appliqué au premier élément, puis au dernier élément du tableau (en utilisant la propriété `length`).


/*function additionne( x ) {

    x = +prompt("chiffre");
    let rep= x + 2
    console.log(rep)
            
        }*/


const additionne = (x) =>{
    x = +prompt("chiffre");
        let rep= x + 2
        console.log(rep)
}        

function affiche() {

    let tab = [-2, 1, 4];

    additionne
    for (let i = 0; i < tab.length; i++) {
            if(i == tab[0]){
              console.log(additionne + tab[i])
              
          }else if(i == tab[-1]){
            console.log(additionne + tab[i])
        }     
    }
}



(() =>{

    document.getElementById("valider").addEventListener('click', ()=> {

        additionne();
        affiche();
        
    });


})()