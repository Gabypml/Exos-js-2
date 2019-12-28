(()=>{
    document.getElementById("valider").addEventListener('click',()=>{

        let age = +document.getElementById("age").value;
        if (age>=18){
            alert("Vous êtes majeur");
        }
        else{
            alert("MINEUR");
        }

    })
})();