// Verifica se a API de geolocalização está disponível no navegador
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
        // Pega as coordenadas do dispositivo
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;

        // Inicializa o mapa com a localização atual
        var map = L.map('map').setView([latitude, longitude], 12);

        // Adiciona o tile layer do OpenStreetMap
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        // Adiciona um marcador na localização atual
        var marker = L.marker([latitude, longitude]).addTo(map)
            .bindPopup('Você está aqui!')
            .openPopup();
    }, function (error) {
        console.error('Erro ao acessar a geolocalização: ' + error.message);
    });
} else {
    alert("Geolocalização não é suportada pelo seu navegador.");
}
