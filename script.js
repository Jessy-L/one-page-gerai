var cartes = document.querySelectorAll('.carte')

var back = document.querySelectorAll('.back')

cartes.forEach( carte => {

    carte.addEventListener('mouseover', changementCartes )
    carte.addEventListener('mouseout', changementCartesOut )

})


function changementCartes(){

    var nom = this.children[0];
    var offre = this.children[1];
    var back = this.children[2];

    var price = offre.children[0];
    var detail = offre.children[1];
    var btn_carte = offre.children[2]
    
    back.style.height = "120%"
    back.style.background = "linear-gradient(180deg, #227AFF 0%, #5FD5FB 105.95%)"
    back.style.borderRadius = "0"
    back.style.color = "white"

    // offre.style.color = "white"
    price.style.color = "white"
    detail.style.color = "white"
    btn_carte.style.color = "#227AFF";
    btn_carte.style.backgroundColor = "white";

    nom.style.color = "#227AFF"
    nom.style.background = "white"
    // offre.style.color = "white"

    
    
    console.log(this.children[0])


}

function changementCartesOut(){

    var nom = this.children[0]
    var offre = this.children[1]
    var back = this.children[2]

    var price = offre.children[0];
    var detail = offre.children[1];
    var btn_carte = offre.children[2]

    nom.style.background = "linear-gradient(180deg, #227AFF 0%, #5FD5FB 105.95%)"
    nom.style.color = "white"

    price.style.color = "black"
    detail.style.color = "black"
    btn_carte.style.color = "white"
    btn_carte.style.backgroundColor = "#227AFF";

    back.style.height = "0%"
    back.style.background = "white"
    back.style.color = "black"
    back.style.borderRadius = "0% 0% 100% 100%"

}
