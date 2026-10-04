function updateClock() {

    const now = new Date();
    const time = now.toLocaleTimeString('pt-BR');
    const date = now.toLocaleDateString('pt-BR');
    document.getElementById("clock").textContent = time;
    document.getElementById("date").textContent = date;
}

updateClock();

setInterval(updateClock, 1000);


const settingsBtn = document.getElementById("settingsBtn");
const settingsBox = document.querySelector(".very-two");

settingsBtn.addEventListener("click", () => {
  // alterna entre mostrar e esconder
  settingsBox.style.display = 
    settingsBox.style.display === "block" ? "none" : "block";
});


//seletor de cores
function changeTheme(event) {

    const button = event.currentTarget;

    document
        .querySelectorAll(".theme-selector .btn")
        .forEach(el => el.classList.remove("active"));

    button.classList.add("active");

    document.body.classList.remove(
        "theme-default",
        "theme-blue",
        "theme-purple",
        "theme-red",
        "theme-green"
    );

    if (button.classList.contains("default")) {
        document.body.classList.add("theme-default");

    } else if (button.classList.contains("blue")) {
        document.body.classList.add("theme-blue");

    } else if (button.classList.contains("purple")) {
        document.body.classList.add("theme-purple");
    
    } else if (button.classList.contains("red")) {
        document.body.classList.add("theme-red");
    
    } else if (button.classList.contains("green")) {
        document.body.classList.add("theme-green");
    }
}

//comando chart de cores, manipulação  e outros
const trafficCanvas =
    document.getElementById("trafficChart");

const accent =
    getComputedStyle(document.body)
        .getPropertyValue("--accent")
        .trim();


const trafficGradient =
    trafficCanvas
        .getContext("2d")
        .createLinearGradient(0, 0, 0, 220);

trafficGradient.addColorStop(
    0,
    "rgba(255, 116, 28, 0.22)"
);

trafficGradient.addColorStop(
    1,
    "rgba(255, 116, 28, 0)"
);


const trafficChart = new Chart(
    trafficCanvas,
    {
        type: "line",

        data: {

            labels: [
                "08:00",
                "09:00",
                "10:00",
                "11:00",
                "12:00",
                "13:00"
            ],

            datasets: [

                {
                    label: "Entrada",

                    data: [
                        30, 45, 28, 50,
                        42, 60, 35, 55,
                        48, 70, 40, 65,
                        52, 75, 45, 80,
                        50, 85, 55, 90,
                        60, 95, 65, 100
                    ],

                    borderColor: "#ff600a",

                    backgroundColor:
                        trafficGradient,

                    fill: true,

                    borderWidth: 1.5,

                    tension: 0.45,

                    pointRadius: 0,

                    pointHoverRadius: 3
                },

                {
                    label: "Saída",

                    data: [
                        14, 24, 18, 30,
                        22, 34, 20, 32,
                        28, 42, 26, 38,
                        30, 46, 28, 50,
                        32, 54, 36, 58,
                        40, 62, 44, 66
                    ],

                    borderColor: "#bdbdbd",

                    backgroundColor:
                        "transparent",

                    fill: false,

                    borderWidth: 1.2,

                    tension: 0.45,

                    pointRadius: 0,

                    pointHoverRadius: 3
                }
            ]
        },

        options: {

            responsive: true,

            maintainAspectRatio: false,

            animation: {
                duration: 800
            },

            plugins: {

                legend: {
                    display: false
                },

                tooltip: {
                    enabled: true
                }

            },

            scales: {

                x: {

                    grid: {
                        color:
                            "rgba(255,255,255,0.035)",

                        drawTicks: false
                    },

                    border: {
                        display: false
                    },

                    ticks: {
                        color: "#858585",

                        font: {
                            family: "Unica One",
                            size: 10
                        },

                        padding: 7
                    }

                },

                y: {

                    min: 0,

                    max: 100,

                    ticks: {

                        stepSize: 25,

                        color: "#858585",

                        font: {
                            family: "Unica One",
                            size: 10
                        },

                        padding: 5
                    },

                    grid: {

                        color:
                            "rgba(255,255,255,0.035)"
                    },

                    border: {
                        display: false
                    }
                }
            }
        }
    }
);

data: [
    31,
    32,
    35,
    32,
    35,
    39,
    37,
    42,
    48,
    44,
    35,
    42,
    46,
    39,
    51,
    43,
    48,
    45,
    55,
    49,
    61,
    54,
    67,
    58,
    64,
    57,
    72
]

labels: [
    "08:00",
    "",
    "",
    "",
    "09:00",
    "",
    "",
    "",
    "10:00",
    "",
    "",
    "",
    "11:00",
    "",
    "",
    "",
    "12:00",
    "",
    "",
    "",
    "13:00",
    "",
    "",
    ""
]

$(document).ready(function () {

    $('.colums li .colums-one').each(function () {

        var percentage = $(this).data('percentage');

        var height = (percentage / 100) * 200;

        $(this).animate({
            height: height + 'px'
        }, 1000);

    });

});


//grafico com zoom
const mapContent = document.querySelector(".map-content");
const zoomIn = document.getElementById("zoom-in");
const zoomOut = document.getElementById("zoom-out");

let zoom = 1;

zoomIn.addEventListener("click", () => {
    if (zoom < 1.8) {
        zoom += 0.1;
        mapContent.style.transform = `scale(${zoom})`;
    }
});

zoomOut.addEventListener("click", () => {
    if (zoom > 0.8) {
        zoom -= 0.1;
        mapContent.style.transform = `scale(${zoom})`;
    }
});