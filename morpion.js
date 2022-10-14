function estValide(button) {
    return button.innerHTML.length == 0;
  }
  
  
  //fonction creer pour definir le symbole utiliser
    function setSymbol(btn, symbole) {
    btn.innerHTML = symbole;
  }
  //(Calcul) la probaliter des chance de gagner
  //Avec un pseudo tableau (objet)
  function possibleVainqueur(pions, joueurs, tour) {
    if (
      pions[0].innerHTML == joueurs[tour] &&
      pions[1].innerHTML == joueurs[tour] &&
      pions[2].innerHTML == joueurs[tour]
    ) {
       
      pions[0].style.backgroundColor = "#9ACD32";
      pions[1].style.backgroundColor = "#9ACD32";
      pions[2].style.backgroundColor = "#9ACD32";
      return true;// ici c'est le vainqueur
    }
  
    if (
      pions[3].innerHTML == joueurs[tour] &&
      pions[4].innerHTML == joueurs[tour] &&
      pions[5].innerHTML == joueurs[tour]
    ) {

      pions[3].style.backgroundColor = "#9ACD32";
      pions[4].style.backgroundColor = "#9ACD32";
      pions[5].style.backgroundColor = "#9ACD32";
      return true;// ici c'est le vainqueur
    }
  
    if (
      pions[6].innerHTML == joueurs[tour] &&
      pions[7].innerHTML == joueurs[tour] &&
      pions[8].innerHTML == joueurs[tour]
    ) {
      pions[6].style.backgroundColor = "#9ACD32";
      pions[7].style.backgroundColor = "#9ACD32";
      pions[8].style.backgroundColor = "#9ACD32";
      return true;// ici c'est le vainqueur
    }
  
    if (
      pions[0].innerHTML == joueurs[tour] &&
      pions[3].innerHTML == joueurs[tour] &&
      pions[6].innerHTML == joueurs[tour]
    ) {
      pions[0].style.backgroundColor = "#9ACD32";
      pions[3].style.backgroundColor = "#9ACD32";
      pions[6].style.backgroundColor = "#9ACD32";
      return true;// ici c'est le vainqueur
    }
  
    if (
      pions[1].innerHTML == joueurs[tour] &&
      pions[4].innerHTML == joueurs[tour] &&
      pions[7].innerHTML == joueurs[tour]
    ) {
      pions[1].style.backgroundColor = "#9ACD32";
      pions[4].style.backgroundColor = "#9ACD32";
      pions[7].style.backgroundColor = "#9ACD32";
      return true;// ici c'est le vainqueur
    }
  
    if (
      pions[2].innerHTML == joueurs[tour] &&
      pions[5].innerHTML == joueurs[tour] &&
      pions[8].innerHTML == joueurs[tour]
    ) {
      pions[2].style.backgroundColor = "#9ACD32";
      pions[5].style.backgroundColor = "#9ACD32";
      pions[8].style.backgroundColor = "#9ACD32";
      return true;// ici c'est le vainqueur
    }
  
    if (
      pions[0].innerHTML == joueurs[tour] &&
      pions[4].innerHTML == joueurs[tour] &&
      pions[8].innerHTML == joueurs[tour]
    ) {
      pions[0].style.backgroundColor = "#9ACD32";
      pions[4].style.backgroundColor = "#9ACD32";
      pions[8].style.backgroundColor = "#9ACD32";
      return true;// ici c'est le vainqueur
    }
  
    if (
      pions[2].innerHTML == joueurs[tour] &&
      pions[4].innerHTML == joueurs[tour] &&
      pions[6].innerHTML == joueurs[tour]
    ) {
      pions[2].style.backgroundColor = "#9ACD32";
      pions[4].style.backgroundColor = "#9ACD32";
      pions[6].style.backgroundColor = "#9ACD32";
      return true;// ici c'est le vainqueur
    }
  }
  