//const e = require("express");

//initialisation
const reponse = document.querySelector('.reponse');
const personage = document.querySelector('.personage');
const list_perso = document.getElementById('liste_perso');
let tab = "<table><tr><th>Nom</th><th>Prénom</th></tr>";


reponse.addEventListener('click', resultat);

function resultat(){
  if(!document.getElementById('avengers').checked &&
      !document.getElementById('batman').checked &&!
      document.getElementById('harry_potter').checked){

    personage.textContent="Pas de Resultat...";
  }
  else{
  personage.textContent="Chargement encours...";
  let tableau =listePersonage;
  console.log(tableau);

  for(const elem of tableau){
    tab += '<tr><td>elem.lastName</td><td>elem.firstName</td></tr>';
  }
  tab += '</table>';
  }
  liste_perso.textContent = tab;

};

let listePersonage = async()=>{
  let tableau=[];
  if(document.getElementById('avengers').checked){

    try{
      let avengersList =  await fetch('avengers.json');
          avengersList = await avengersList.json(); //transforme le fichier json en tableau d'objet
        tableau.push(avengersList);
    }
   catch(e){
      console.log("probleme avec le fetch"+e.message)
    };

  }
  return tableau;
}

/*
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
*/

