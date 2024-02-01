function find_cards() {
    let trouv = null;
    for (let i = 0; i < wrak_machine.length; i++) {
        trouv = wrak_louta.find(elt => elt.valeur === wrak_machine[i].valeur);
        if (trouv) {
            return [wrak_machine[i], trouv];
        }
    }
    return null;
}

async function tour_machine() {
    var card_mekla = find_cards();
    if (card_mekla && card_mekla.length > 0) {
        let index = wrak_louta.indexOf(card_mekla[1]);
        wrak_louta.splice(index, 1);

        let index2 = wrak_machine.indexOf(card_mekla[0]);
        wrak_machine.splice(index2, 1);

        let contenu_carte = '';
        let contenu_joueur = '';

        var joueur = document.getElementById("machine");
        var louta = document.getElementById("chkoba");

        louta.innerHTML = '';
        for (let i = 0; i < wrak_louta.length; i++) {
            contenu_carte +=`<div class="card" id="${wrak_louta[i].nom}" onclick="manger_louta('${wrak_louta[i].nom}')" style=" background: url(${wrak_louta[i].image}) ;
            background-size: cover;
            background-position: center;">
            <div class="bg"></div>
           
           
    </div>`;
        }
        louta.innerHTML = contenu_carte;
        await pause(800);
        joueur.innerHTML = '';
        for (let i = 0; i < wrak_machine.length; i++) {
            contenu_joueur +=  `<div class="card" id="${wrak_machine[i].nom}">
            <div class="bg-back"></div>
            
            </div>`;
        }
        joueur.innerHTML = contenu_joueur;
        if(wrak_louta.length==0){
            alert("chkoba!!");
        }
    }
    else{
           
        let jetter_card = document.getElementById(wrak_machine[wrak_machine.length - 1].nom);

        if (jetter_card) {
            
            
        
          
            wrak_louta.push(wrak_machine[wrak_machine.length - 1]);
            wrak_machine.pop();
            
            let contenu_carte = '';
        let contenu_joueur = '';

        var joueur = document.getElementById("machine");
        var louta = document.getElementById("chkoba");

        louta.innerHTML = '';
        for (let i = 0; i < wrak_louta.length; i++) {
            contenu_carte +=`<div class="card" id="${wrak_louta[i].nom}" onclick="manger_louta('${wrak_louta[i].nom}')" style=" background: url(${wrak_louta[i].image}) ;
            background-size: cover;
            background-position: center;">
            <div class="bg"></div>
           
           
    </div>`;
        }
        louta.innerHTML = contenu_carte;
        await pause(800);
        joueur.innerHTML = '';
        for (let i = 0; i < wrak_machine.length; i++) {
            contenu_joueur +=`<div class="card" id="${wrak_machine[i].nom}">
            <div class="bg-back"></div>
            
            </div>` ;
        }
        joueur.innerHTML = contenu_joueur;
            
        
            
        }
        

          
       
    }
    if(wrak_machine.length==0 && cards.length>0){
        await pause(800);
        repeter_jeu();
        
    }
    if(wrak_machine.length==0 && cards.length==0){
        
        document.getElementById("chkoba").innerHTML="";
        await pause(800);
        document.body.style.backgroundColor="green";
        alert("joueur 3 - 1 machine");
        
    }


}


