// Pour obtenir une présentation du modèle Vide, consultez la documentation suivante :
// http://go.microsoft.com/fwlink/?LinkID=397704
// Pour déboguer du code durant le chargement d'une page dans Ripple ou sur les appareils/émulateurs Android, lancez votre application, définissez des points d'arrêt, 
// puis exécutez "window.location.reload()" dans la console JavaScript.
(function () {
    "use strict";

    document.addEventListener( 'deviceready', onDeviceReady.bind( this ), false );

    function onDeviceReady() {
        // Gérer les événements de suspension et de reprise Cordova
        document.addEventListener( 'pause', onPause.bind( this ), false );
        document.addEventListener( 'resume', onResume.bind( this ), false );
            var d = new Date();
            var days = ["Dimanche","Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi"];
            var day = d.getDate();
            var months = ["Janvier","Fevrier","Mars","Avril","Mai","Juin","Juillet","Aout","Septembre","Octobre","Novembre","Decembre"];
            var year = d.getFullYear();
            var currentDate = days[d.getDay()]+'/'+ day+'/'+ months[d.getMonth()]+'/'+year;;
            $('#caseDate').val(currentDate);
    };

    function onPause() {
        // TODO: cette application a été suspendue. Enregistrez l'état de l'application ici.
    };

    function onResume() {
        // TODO: cette application a été réactivée. Restaurez l'état de l'application ici.
    };
} );

//compteur de nombre de jour suivi
/*
function compteur(){
    var derniereVisite = new Date();
    var dateDerniereVisite;
    var auj = new Date();
    var aujourdhui = auj.getDate();
    var nombreJours = document.getElementsByClassName("nombreJours");
    for(var i = 0; i < nombreJours.length(); i++ ){
        nombreJours[0].innerHTML=2 + aujourdhui;
    }
}
*/

//selon le bouton choisi, champ1 est affiché alors que champ2 et champ3 reste caché
function afficher(btn,champ1,champ2,champ3){
    if (btn.checked)
   {
        document.getElementById(champ1).style.display="inline";
        document.getElementById(champ2).style.display="none";
        document.getElementById(champ3).style.display="none";
   }
}

//dans les inputs, affiche le texte par défaut
function afficherTexte(input){
if (input.value == '') input.value = input.defaultValue;
}
//dans les inputs, supprime le texte par défaut
function supprimerTexte(input){
    if (input.value == input.defaultValue) input.value = '';
}

//dans la page Perdu de Vue, filtre la liste "Visite du jour" pour obtenir la page Perdu de Vue
function perduDeVueFilte(){
    var personneContact = document.getElementsByClassName("personneContact");
    var joursSuivi = document.getElementsByClassName("jourSuivi");
    //var nombreJours = compteur();
    for(var i = 0; i < personneContact.length; i++){
        if(joursSuivi[i].innerHTML >= "J+<span class=\"nombreJours\">1</span>"){
            document.getElementById("listePerdu").innerHTML += '<li data-icon="false" class="personnePerdu">'+ personneContact[i].innerHTML + "</li>";
        }
    }
 }

//dans l'onglet Historique, affiche les div correspondant aux onglets Visite,Medical, Viste/Medical
function openOnglet(evt, nomOnglet) {
    var tabcontent = document.getElementsByClassName("tabcontent");
    var tablinks = document.getElementsByClassName("tablinks");
    for (var i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    for (var i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(nomOnglet).style.display = "block";
    evt.currentTarget.className += " active";
}