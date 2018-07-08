/* Exercice d'entrainement : Touché-coulé en javascript/jquery 
* Règles simplifiées : 
* Le premier joueur à couler le dernier bateau a gagné
*/


// changer la couleur : $('#'+position_tir).css('background-color', 'red')
// couleur rouge : 255,0,0

const COLORBLUE = "rgb(0, 0, 255)";
const COLORRED = "rgb(255, 0, 0)";

function jouerUnTour() {
    let playerName = $("#moi").val();
    let position_tir = $("#canon").val().toLowerCase();

    let message = "";
    let degats_bateau_1 = 0;
    let degats_bateau_2 = 0;
  
    let boats = {
        boat1: ['b4', 'b5', 'b6'],
      boat2: ['d9', 'e9', 'f9']
    };

  // si le champ du nom du joueur contient quelque chose
  if (playerName.length > 0) {
    // si le champ de tir n'est pas vide
    if (position_tir.length > 0) {
        message = "<li>" + playerName + " attaque en " + position_tir + "...</li><br />";
        // on ajoute le contenu du message dans une liste
        $("#history ul").append(message);
        //si la case existe
        if($("#"+position_tir).length){
            // si la case est en bleu
            if($('#'+position_tir).css('background-color') == COLORBLUE)
            {
                // si le joueur vise un bateau
                if ($('#' + position_tir).text() === "X") {
                    // si c'est sur le premier bateau
                    if (boats.boat1.indexOf(position_tir) > -1) {
                        if(degats_bateau_1 < 3){
                        // On touche bateau 1, reste message + changement css
                        degats_bateau_1++;
                        $('#'+position_tir).css('background-color', COLORRED);
                        alert("touche !" + playerName + " a touche le bateau 1");
                        message = "<li>" + playerName + " a touche le premier bateau en position " + position_tir + "...</li><br />";
                        $("#history ul").append((message));
                        }
                        else {
                        // bateau 1 coulé
                            if(degats_bateau_2 === 3)
                            {
                                $('#'+position_tir).css('background-color', COLORRED);
                                alert("Bravo Moussaillon ! " + playerName + "gagnant") ;
                                message = "<li>" + playerName + " a gagné la partie ! " + position_tir + "</li><br />";
                                $("#history ul").append((message));
                            }
                        }

                    }
                    if (boats.boat2.indexOf(position_tir) > -1) {
                        if(degats_bateau_2 < 3){
                            degats_bateau_2++;
                            $('#'+position_tir).css('background-color', COLORRED);
                            alert("touche !" + playerName + " a touche le bateau 2");
                            message = "<li>" + playerName + " a touche le second bateau en position " + position_tir + "...</li><br />";
                            $("#history ul").append((message));
                        }
                        else {
                            if(degats_bateau_1 === 3) {
                                $('#'+position_tir).css('background-color', COLORRED);
                                alert("Bravo Moussaillon ! " + playerName + "gagnant") ;
                                message = "<li>" + playerName + " a gagné la partie ! " + position_tir + "</li><br />";                                
                                $("#history ul").append((message));
                            }
                        }
                    }
                }
                else {
                    $('#'+position_tir).css('background-color', COLORRED);
                    message = "<li>" + playerName + " a tire dans l'eau " + position_tir + "</li><br />";
                    $("#history ul").append((message));
                }
            }
            else{
                alert("Moussaillon ! Cette coordonnee a deja ete attaquee !");
            }
        }
        // sinon si la case n'existe pas
        else {
            alert("Moussaillon ! Ne tirez pas n'importe ou !");
        }
    }
    else {
        message = "<li>" + playerName + ": il manque une coordonnee de tir</li>";
        $("#history ul").append(message);
        }
    }     
else  {
    message = "<li> En attente d'un joueur</li>";
    $("#history ul").append(message);
}

}
