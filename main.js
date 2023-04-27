let allQuestions = [
    {
        title: "¿Cuál es el plato tipico de canarias?",
        answers: [
            {
                title: "Papas arrugas",
                isCorrect: true,
            },
            {
                title: "Paella",
                isCorrect: false,
            },
            {
                title: "Entrecot",
                isCorrect: false,
            },
        ],
    },
    {
        title: "¿Cuantos dedos tiene las patas traseras de un gato?",
        answers: [
            {
                title: "Cuatro",
                isCorrect: false,
            },
            {
                title: "Tres",
                isCorrect: false,
            },
            {
                title: "Cinco",
                isCorrect: true,
            },
            {
                title: "Seis",
                isCorrect: false,
            },
        ],
    },
    {
        title: "¿Cuál es el río más largo del mundo?",
        answers: [
            {
                title: "Nilo",
                isCorrect: true,
            },
            {
                title: "Amazonas",
                isCorrect: false,
            },
            {
                title: "Yangtsé",
                isCorrect: false,
            },
            {
                title: "Misisipi",
                isCorrect: false,
            },
        ],
    },
    {
        title: "¿En qué país se encuentra la Torre Eiffel?",
        answers: [
            {
                title: "Francia",
                isCorrect: true,
            },
            {
                title: "Alemania",
                isCorrect: false,
            },
            {
                title: "Italia",
                isCorrect: false,
            },
            {
                title: "España",
                isCorrect: false,
            },
        ],
    },
    {
        title: "¿Qué inventó Alexander Graham Bell?",
        answers: [
            {
                title: "El teléfono",
                isCorrect: true,
            },
            {
                title: "La televisión",
                isCorrect: false,
            },
            {
                title: "El coche",
                isCorrect: false,
            },
            {
                title: "La nevera",
                isCorrect: false,
            },
        ],
    },
    {
        title: "¿Cuál es la capital de Australia?",
        answers: [
            {
                title: "Melbourne",
                isCorrect: false,
            },
            {
                title: "Sídney",
                isCorrect: false,
            },
            {
                title: "Brisbane",
                isCorrect: false,
            },
            {
                title: "Canberra",
                isCorrect: true,
            },
        ],
    },
    {
        title: "¿Quien escribio el Quijote?",
        answers: [
            {
                title: "Carmen de Mairena",
                isCorrect: false,
            },
            {
                title: "Javier Cardenas",
                isCorrect: false,
            },
            {
                title: "Miguel de Cervantes Saavedra",
                isCorrect: true,
            },
            {
                title: "Federico Garcia Lorca",
                isCorrect: false,
            },
        ],
    },
    {
        title: "¿Cuando gano el Rayo vallecano una champions league?",
        answers: [
            {
                title: "En el 2000",
                isCorrect: false,
            },
            {
                title: "En el 1994",
                isCorrect: false,
            },
            {
                title: "Nunca son malisimos",
                isCorrect: true,
            },
            {
                title: "En el 2022",
                isCorrect: false,
            },
        ],
    },
    {
        title: "¿Cual es la comida tipica de Madrid?",
        answers: [
            {
                title: "Platanos",
                isCorrect: false,
            },
            {
                title: "Ropa Vieja",
                isCorrect: false,
            },
            {
                title: "Bocadillo de Calamares",
                isCorrect: true,
            },
            {
                title: "Albondigas",
                isCorrect: false,
            },
        ],
    },
    {
        title: "Donde se encuentra la fuente de la Cibeles",
        answers: [
            {
                title: "Toledo",
                isCorrect: false,
            },
            {
                title: "Cuenca",
                isCorrect: false,
            },
            {
                title: "Madrid",
                isCorrect: true,
            },
            {
                title: "Jerusalen",
                isCorrect: false,
            },
        ],
    },
];

let pos = 0;
let userPoint = 0;
let answered = false;

function loadTotal() {
    let total = allQuestions.length;
    let current = pos + 1;
    document.getElementById("total").innerHTML = total;
    document.getElementById("current").innerHTML = current;
}

function loadData() {
    loadTotal();

    document.getElementById("qestion").innerHTML = allQuestions[pos].title;
    document.getElementById("answers").innerHTML = "";

    let posAnswer = 0;

    for (const answer of allQuestions[pos].answers) {
        document.getElementById("answers").innerHTML += `<button id="btn${posAnswer}" onclick="checkAnswer(${posAnswer})" class="btn btn-outline-secondary">${answer.title}</button>`;
        posAnswer++
    }
}

function nextQuestion() {
    pos++;
    answered = false;
    if (pos >= allQuestions.length) {
        console.log("te pasaste wey");
        document.getElementById("game").classList.add("d-none");
        document.getElementById("results").classList.remove("d-none");

        document.getElementById("totalResult").innerHTML = "Acertados" + userPoint + "/" + allQuestions.length;
    } else {
        loadData();
    }
}

function reset() {
    //mostramos el div game y ocultamos el de result
    document.getElementById("results").classList.add("d-none");
    document.getElementById("game").classList.remove("d-none");
    //cargamos la pregunta 0
    userPoint = 0;
    pos = 0;
    loadData();
}
function checkAnswer(positionAnsw) {
    if (!answered) {
        answered = true;
        console.log("Has pulsado la respuesta numero", positionAnsw);
        console.log("La respues es: ", allQuestions[pos].answers[positionAnsw].isCorrect);
        let botonActual = "btn" + positionAnsw;
        document.getElementById(botonActual).classList.remove("btn-outline-secondary");

        if (allQuestions[pos].answers[positionAnsw].isCorrect) {
            console.log("Respuesta correcta");
            document.getElementById(botonActual).classList.add("btn-success");
            userPoint++;
        } else {
            document.getElementById(botonActual).classList.add("btn-danger");

            //de la pregunta actrual, recorrer las respuestas y obtener cual es la posicion de respuesta correcta
            for (let posActual = 0; posActual < allQuestions[pos].answers.length; posActual++) {
                if (allQuestions[pos].answers[posActual].isCorrect) {
                    //es la respuesta correcta y la posicion de la respuesta es posActual
                    let btnCorrecto = "btn" + posActual;
                    document.getElementById(btnCorrecto).classList.remove("btn-outline-secondary");
                    document.getElementById(btnCorrecto).classList.add("btn-success");

                }
            }
        }
    }
}





loadData();
