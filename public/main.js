//const e = require("express");

//initialisation
const reponse = document.querySelector('.reponse');
const personage = document.querySelector('.personage');
const list_perso = document.getElementById('liste_perso');


reponse.addEventListener('click', resultat);

function resultat(){
  if(!document.getElementById('avengers').checked &&
      !document.getElementById('batman').checked &&!
      document.getElementById('harry_potter').checked){

    personage.textContent="Pas de Resultat...";
  }
  else{
  personage.textContent="Chargement encours...";
  }
  listePersonage();


}

async function listePersonage(){

  if(document.getElementById('avengers').checked){
    let reponse =  await fetch('avengers.json');

    try{
      let resultat = await reponse.json(); //transforme le fichier json en tableau d'objet
      if(document.getElementById('nom').checked){

        let tab_perso = []
      for(i=0; i<resultat.length; i++){
          tab_perso.push(resultat[i]);

      }
      console.log(tab_perso);
      list_perso.textContent= tab_perso;

    }

  }
   catch(e){
      console.log("probleme avec le fetch"+e.message)
    };
    return resultat;
  }


  if(document.getElementById('batman').checked){
    let reponse =  await fetch('batman.json');

    try{
      let resultat = await reponse.json(); //transforme le fichier json en tableau d'objet
    console.log(resultat);
    }

   catch(e){
      console.log("probleme avec le fetch"+e.message)
    };

  }

    if(document.getElementById('harry_potter').checked){
      let reponse =  await fetch('harry_potter.json');

      try{
        let resultat = await reponse.json(); //transforme le fichier json en tableau d'objet
      console.log(resultat);
      }

     catch(e){
        console.log("probleme avec le fetch"+e.message)
      };

    }
  }


