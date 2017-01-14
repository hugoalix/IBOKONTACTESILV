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