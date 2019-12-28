//// EXO 4

(() => {

    document.getElementById('valider').addEventListener('click', ()=>{
        let nom= document.getElementById('nom').value;
        let prenom = document.getElementById('prenom').value;
        let ville = document.getElementById('ville').value;
        alert(nom + prenom + ville);
    })
    
})();

