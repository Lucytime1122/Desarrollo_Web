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

async function obtenerDatosTemperatura() {
    const ciudadAleatoria = ciudades[Math.floor(Math.random() * ciudades.length)];
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudadAleatoria.nombre}&appid=${API_KEY}&units=metric&lang=es`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        const tempMin = data.main.temp_min; // Temperatura mínima
        const tempMax = data.main.temp_max; // Temperatura máxima
        document.getElementById("paisSeleccionadoLluvia").textContent = `🌡️ Temperatura en ${ciudadAleatoria.nombre}, ${ciudadAleatoria.pais}`;
        actualizarGraficoTemperatura(tempMin, tempMax);
    } catch (error) {
        console.error("Error obteniendo los datos:", error);
    }
}

let chartTemperatura;
function actualizarGraficoTemperatura(tempMin, tempMax) {
    const ctx = document.getElementById("rainChart").getContext("2d");
    if (chartTemperatura) chartTemperatura.destroy();
    chartTemperatura = new Chart(ctx, {
        type: "bar", // Gráfico de barras
        data: {
            labels: ["Temperatura Mínima", "Temperatura Máxima"],
            datasets: [{
                label: 'Temperatura (°C)',
                data: [tempMin, tempMax],
                backgroundColor: ["#3498db", "#e74c3c"],
                borderColor: "#222",
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Temperatura (°C)'
                    }
                }
            },
            plugins: {
                legend: { labels: { color: "white", font: { size: 16 } } },
                datalabels: { color: "black", font: { weight: "bold", size: 18 }, formatter: (value) => `${value}°C` }
            }
        },
        plugins: [ChartDataLabels]
    });
}

obtenerDatosTemperatura();
setInterval(obtenerDatosTemperatura, 10000);