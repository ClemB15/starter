function toggleClass() {
    let couleur = document.getElementById("madiv");

    if(couleur.className === "pink"){
        couleur.className = "black";
    }else{
        couleur.className = "pink";
    }
}