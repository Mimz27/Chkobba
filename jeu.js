
var wrak_joueur=[];
var wrak_machine=[];
var wrak_louta=[];



var manger_card;


var somme_card=0;
var cards_a_manger=[];



function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}


function repeter_jeu(){
    let content_machine = '';
    let content_moi = '';
    let machine = document.getElementById("machine");
    let moi = document.getElementById("joueur");
    
for(let i =0; i<3; i++) {
    wrak_machine.push(cards[i]);
    content_machine += `<div class="card" id="${cards[i].nom}">
    <div class="bg-back"></div>
    
    </div>`

    
}
machine.innerHTML=content_machine;
cards.splice(0,3);


for(let i =0; i<3; i++) {
    wrak_joueur.push(cards[i]);
    content_moi+=`<div class="card" onclick="selectionner_card('${cards[i].nom}')" id="${cards[i].nom}" style=" background: url(${cards[i].image}) ;
    background-size: cover;
    background-position: center;">
    <div class="bg"></div>
    <button class="button" onclick="jetter_card('${cards[i].nom}')">Jetter</button>
    </div>`
         
    
}
moi.innerHTML=content_moi;
cards.splice(0,3);

}


function pause(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


function start_jeu() {
    shuffle(cards);
    let contenu_machine='';
    let contenu_joueur='';
    let contenu_louta='';
    var machine = document.getElementById("machine");
    var joueur = document.getElementById("joueur");
    var louta = document.getElementById("chkoba");

    for (let i = 0; i < 3; i++) {
        wrak_machine.push(cards[i]);
        contenu_machine+=`<div class="card" id="${cards[i].nom}">
        <div class="bg-back"></div>
        
        </div>`
       
    }
    machine.innerHTML=contenu_machine;
    cards.splice(0,3);
    for (let i = 0; i < 3; i++) {
        wrak_joueur.push(cards[i]);
        contenu_joueur+=`<div class="card" onclick="selectionner_card('${cards[i].nom}')" id="${cards[i].nom}" style=" background: url(${cards[i].image}) ;
        background-size: cover;
        background-position: center;">
        <div class="bg"></div>
        <button class="button" onclick="jetter_card('${cards[i].nom}')">Jetter</button>
        
        
</div>`
       
    }
    joueur.innerHTML=contenu_joueur;
    cards.splice(0,3);
    for (let i = 0; i <4 ; i++) {
        wrak_louta.push(cards[i]);
        contenu_louta+=`<div class="card" id="${cards[i].nom}" onclick="manger_louta('${cards[i].nom}')" style=" background: url(${cards[i].image}) ;
        background-size: cover;
        background-position: center;">
        <div class="bg"></div>
       
       
</div>`
       
    }
    cards.splice(0,4);
    louta.innerHTML=contenu_louta;


    console.log(wrak_joueur);
    console.log(wrak_machine);
    console.log(wrak_louta);
    
    

}

function selectionner_card(nom){
    manger_card = wrak_joueur.find(elt => elt.nom == nom);
    let buttons= document.getElementsByClassName("button");
    for(let j = 0;j<buttons.length;j++){
        buttons[j].style.display='none';
    }
    let card=document.getElementById(nom);
    card.children[1].style.display='block';
    
    


}

function jetter_card(id) {
    let cardIndex = wrak_joueur.findIndex(elt => elt.nom === id);
    somme_card=0;
    cards_a_manger=[];
    if (cardIndex !== -1) {
        let card = wrak_joueur[cardIndex];
        wrak_joueur.splice(cardIndex, 1);
        console.log(wrak_joueur);
        wrak_louta.push(card);
        console.log(wrak_louta);

        let contenu_louta = '';
        let contenu_joueur = '';

        var joueur = document.getElementById("joueur");
        var louta = document.getElementById("chkoba");

        louta.innerHTML = '';
        for (let i = 0; i < wrak_louta.length; i++) {
            contenu_louta+=`<div class="card" id="${wrak_louta[i].nom}" onclick="manger_louta('${wrak_louta[i].nom}')" style=" background: url(${wrak_louta[i].image}) ;
            background-size: cover;
            background-position: center;">
            <div class="bg"></div>
           
           
    </div>`;
        }
        louta.innerHTML = contenu_louta;

        joueur.innerHTML = '';
        for (let i = 0; i < wrak_joueur.length; i++) {
            contenu_joueur += `<div class="card" onclick="selectionner_card('${wrak_joueur[i].nom}')" id="${wrak_joueur[i].nom}" style="background: url(${wrak_joueur[i].image});
                background-size: cover;
                background-position: center;">
                <div class="bg"></div>
                <button class="button" onclick="jetter_card('${wrak_joueur[i].nom}')">Jeter</button>
            </div>`;
        }
        joueur.innerHTML = contenu_joueur;
        tour_machine();
    }
}


function manger_louta(id) {

    let cardIndex = wrak_louta.findIndex(elt => elt.nom === id);
    cards_a_manger.push(wrak_louta[cardIndex]);
    somme_card+=wrak_louta[cardIndex].valeur;
    console.log(somme_card);
    console.log(cards_a_manger);

    
    if (manger_card && manger_card.valeur === wrak_louta[cardIndex].valeur) {
        somme_card=0;
        cards_a_manger=[];
        wrak_louta.splice(cardIndex, 1);
        let joueurIndex = wrak_joueur.indexOf(manger_card);

        if (joueurIndex !== -1) {
            wrak_joueur.splice(joueurIndex, 1);
        }

        console.log(wrak_louta);
        let contenu_louta = '';
        let contenu_joueur = '';

        var joueur = document.getElementById("joueur");
        var louta = document.getElementById("chkoba");

        louta.innerHTML = '';
        for (let i = 0; i < wrak_louta.length; i++) {
            contenu_louta+=`<div class="card" id="${wrak_louta[i].nom}" onclick="manger_louta('${wrak_louta[i].nom}')" style=" background: url(${wrak_louta[i].image}) ;
            background-size: cover;
            background-position: center;">
            <div class="bg"></div>
           
           
    </div>`;
        }
        louta.innerHTML = contenu_louta;

        joueur.innerHTML = '';
        for (let i = 0; i < wrak_joueur.length; i++) {
            contenu_joueur += `<div class="card" onclick="selectionner_card('${wrak_joueur[i].nom}')" id="${wrak_joueur[i].nom}" style="background: url(${wrak_joueur[i].image});
                background-size: cover;
                background-position: center;">
                <div class="bg"></div>
                <button class="button" onclick="jetter_card('${wrak_joueur[i].nom}')">Jeter</button>
            </div>`;
        }
        joueur.innerHTML = contenu_joueur;
        tour_machine();
    }
    else if(manger_card && manger_card.valeur===somme_card ){
        var joueur = document.getElementById("joueur");
        var louta = document.getElementById("chkoba");
        let contenu_louta = '';
        let contenu_joueur = '';
        somme_card=0;
        let joueurIndex = wrak_joueur.indexOf(manger_card);

        if (joueurIndex !== -1) {
            wrak_joueur.splice(joueurIndex, 1);
        }
      
        joueur.innerHTML = '';
        for (let i = 0; i < wrak_joueur.length; i++) {
            contenu_joueur += `<div class="card" onclick="selectionner_card('${wrak_joueur[i].nom}')" id="${wrak_joueur[i].nom}" style="background: url(${wrak_joueur[i].image});
                background-size: cover;
                background-position: center;">
                <div class="bg"></div>
                <button class="button" onclick="jetter_card('${wrak_joueur[i].nom}')">Jeter</button>
            </div>`;
        }
        joueur.innerHTML = contenu_joueur;
        for (let j = 0; j < cards_a_manger.length; j++) {
            let index_supp = wrak_louta.findIndex(elt => elt.nom === cards_a_manger[j].nom);
            if (index_supp !== -1) {
                wrak_louta.splice(index_supp, 1);
            }
        }
        cards_a_manger=[];
        somme_card=0;
        

        louta.innerHTML = '';
        for (let i = 0; i < wrak_louta.length; i++) {
            contenu_louta+=`<div class="card" id="${wrak_louta[i].nom}" onclick="manger_louta('${wrak_louta[i].nom}')" style=" background: url(${wrak_louta[i].image}) ;
            background-size: cover;
            background-position: center;">
            <div class="bg"></div>
           
           
    </div>`;
        }
        louta.innerHTML = contenu_louta;
        tour_machine();



    }
}






window.onload=function(){
    start_jeu();
}