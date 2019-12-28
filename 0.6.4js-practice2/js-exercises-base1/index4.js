/// EXO4
(() => {
 
    document.getElementById("valider").addEventListener('click',()=>{

        let first = parseInt(document.getElementById("premier_nombre").value);
        let second = +document.getElementById("deuxieme_nombre").value; 
    
        let test = Math.trunc(first)
        let test2 = test * second
        alert(test2);



    })

   
    
//// Utiliser  Math.round
})();