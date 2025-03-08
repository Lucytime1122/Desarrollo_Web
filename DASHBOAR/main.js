const ctx = document.getElementById("myChart").getContext("2d");

new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Enero', 'Febrero', 'Marzo'],
        datasets: [{
            label: 'ventas',
            data: [120, 125, 130],
            backgroundColor: "green"
        }]
    }
});