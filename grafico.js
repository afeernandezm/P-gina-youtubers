
const $grafica = document.querySelector("#grafica");

const etiquetas = ["AuronPlay", "ElRubius", "ibai", "illoJuan"]

const datosIngresos = {
    data: [29.2, 11.8, 9.73, 1.34],
    backgroundColor: [
        'rgba(163,221,203)',
        'rgba(232,233,161)',
        'rgba(230,181,102)',
        'rgba(229,112,126)',
    ],
    borderColor: [
        'rgba(163,221,203)',
        'rgba(232,233,161)',
        'rgba(230,181,102)',
        'rgba(229,112,126)',
    ],
    borderWidth: 1,
};
new Chart($grafica, {
    type: 'pie',
    data: {
        labels: etiquetas,
        datasets: [
            datosIngresos,

        ]
    },
});