//initialisation
const reponse = document.querySelector('.reponse');
const personage = document.querySelector('.personage');


reponse.addEventListener('click', resultat);

function resultat(){
  if(!document.getElementById('avengers').checked &&!document.getElementById('batman').checked &&!document.getElementById('harry_potter').checked){
    personage.textContent="Pas de Resultat...";
  }
  else{
  personage.textContent="Chargement encours...";
  }
  listePersonage();

}

function listePersonage(){



}
