(() =>{
    document.getElementById("valider").addEventListener('click',()=>{
        let first = +document.getElementById("premier_nombre").value;
        let second = +document.getElementById("deuxieme_nombre").value; 

        let mod = first%second;
        alert(mod);
    });
})();