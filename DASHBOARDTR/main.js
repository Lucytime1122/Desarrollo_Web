const API_KEY = "e634615c56a56c36aaaf96bfd8e103e0";

const ciudades = [
    { nombre: "Madrid", pais: "España" },
    { nombre: "Buenos Aires", pais: "Argentina" },
    { nombre: "México City", pais: "México" },
    { nombre: "París", pais: "Francia" },
    { nombre: "Tokio", pais: "Japón" },
    { nombre: "Sídney", pais: "Australia" },
    { nombre: "Toronto", pais: "Canadá" },
    { nombre: "Berlín", pais: "Alemania" },
    { nombre: "Londres", pais: "Reino Unido" },
    { nombre: "Nueva York", pais: "EE.UU." }
];

async function obtenerDatos() {

    const ciudadAleatoria = ciudades[Math.floor(Math.random() * ciudades.length)];

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudadAleatoria.nombre}&appid=${API_KEY}&units=metric&lang=es`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        const humedad = data.main.humidity || 0;
        const nubosidad = data.clouds.all || 0;
        const lluvia = data.rain ? data.rain["1h"] : 0;

        document.getElementById("paisSeleccionado").textContent = `🌍 Clima en ${ciudadAleatoria.nombre}, ${ciudadAleatoria.pais}`;

        actualizarGrafico(humedad, nubosidad, lluvia);
    } catch (error) {
        console.error("Error obteniendo los datos:", error);
    }
}

let chart;
function actualizarGrafico(humedad, nubosidad, lluvia) {
    const ctx = document.getElementById("weatherChart").getContext("2d");

    if (chart) chart.destroy();

    const total = humedad + nubosidad + lluvia;
    const humedadPorcentaje = (humedad / total) * 100;
    const nubosidadPorcentaje = (nubosidad / total) * 100;
    const lluviaPorcentaje = (lluvia / total) * 100;

    chart = new Chart(ctx, {
        type: "pie",
        data: {
            labels: ["Humedad", "Nubosidad", "Lluvia"],
            datasets: [{
                data: [humedadPorcentaje, nubosidadPorcentaje, lluviaPorcentaje],
                backgroundColor: ["#3498db", "#95a5a6", "#0A1C3A"],
                borderColor: "#222",
                borderWidth: 2,
                hoverOffset: 15
            }]
        },
        options: {
            plugins: {
                legend: {
                    labels: {
                        color: "white",
                        font: { size: 16 }
                    }
                },
                datalabels: {
                    color: "black",
                    font: { weight: "bold", size: 18 },
                    formatter: (value) => `${value.toFixed(1)}%`
                }
            }
        },
        plugins: [ChartDataLabels]
    });
}

obtenerDatos();
setInterval(obtenerDatos, 10000);