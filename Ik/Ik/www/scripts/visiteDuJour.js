var OpenWeatherAppKey = "3ed691fa06d1e0e011e4264e05d25e24";
 
(function () {
    "use strict";

    document.addEventListener('deviceready', onDeviceReady.bind(this), false);

    function onDeviceReady() {
        // Gérer les événements de suspension et de reprise Cordova
        document.addEventListener('pause', onPause.bind(this), false);
        document.addEventListener('resume', onResume.bind(this), false);


        $('#get-weather-btn').click(getWeatherWithZipCode);
    };
    function goToVisiteDuJour() {
        window.location.href = "visiteDujour.html";
    };

    function onPause() {
        // TODO: cette application a été suspendue. Enregistrez l'état de l'application ici.
    };

    function onResume() {
        // TODO: cette application a été réactivée. Restaurez l'état de l'application ici.
    };
})();
