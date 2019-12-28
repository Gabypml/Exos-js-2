(() =>{
    document.getElementById("valider").addEventListener('click',()=>{
        let pointure = +document.getElementById("pointure").value;
        let annee = +document.getElementById("annee").value;

        /*let mult= pointure*2;
        let ajout= mult+5;
        let remult= ajout*50;
        let sous= remult-annee
        let add= sous+1766
         console.log(add)*/
        let result= (((pointure*2 +5)*50)-annee)+1766
        alert(result);
    })
})();