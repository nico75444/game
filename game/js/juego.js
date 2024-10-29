//Arreglo que contiene las preguntas
const preguntas = [
    {
        id:1,
        categoria:"general",
        titulo:"Which is the largest animal on Earth?",
        opcionA:"African Elephant",
        opcionB:"Blue Whale",
        opcionC:"Great White Shark",
        opcionD:"Giraffe",
        correcta:"b"
    },
    {
        id:2,
        categoria:"general",
        titulo:"Who is the fastest man in the world?",
        opcionA:"Usain Bolt",
        opcionB:"Carl Lewis",
        opcionC:"Jesse Owens",
        opcionD:"Jesse Owens",
        correcta:"a"
    },
    {
        id:3,
        categoria:"general",
        titulo:"Which city is considered the most populated in the world?",
        opcionA:"Tokyo",
        opcionB:"New York",
        opcionC:"Shanghai",
        opcionD:"Delhi",
        correcta:"a"
    },
    {
        id:4,
        categoria:"general",
        titulo:"Which is the most expensive spice in the world?",
        opcionA:"Cinnamon",
        opcionB:"Saffron",
        opcionC:"Vanilla",
        opcionD:"Cardamom",
        correcta:"b"
    },
    {
        id:4,
        categoria:"general",
        titulo:"¿What is the smallest continent?",
        opcionA:"Europe",
        opcionB:"Australia",
        opcionC:"Antarctica",
        opcionD:"South America",
        correcta:"b"
    },
    {
        id: 6,
        categoria: "musica",
        titulo: "Who is considered the best-selling music artist of all time?",
        opcionA: "Elvis Presley",
        opcionB: " The Beatles",
        opcionC: "Michael Jackson",
        opcionD: "Madonna",
        correcta: "b"
    },
    {
        id: 7,
        categoria: "musica",
        titulo: "Which is the longest-running number one song on the Billboard Hot 100?",
        opcionA: "Shape of You",
        opcionB: "Old Town Road",
        opcionC: "Blinding Lights",
        opcionD: "Despacito",
        correcta: "c"
    },
    {
        id: 8,
        categoria: "musica",
        titulo: "Who is the richest musician in the world? (as of 2023)",
        opcionA: "Jay-Z",
        opcionB: "Paul McCartney",
        opcionC: "Rihanna",
        opcionD: "Elton John",
        correcta: "a"
    },
    {
        id: 9,
        categoria: "musica",
        titulo: "Which singer has won the most Grammy Awards?",
        opcionA: "Beyoncé",
        opcionB: "Stevie Wonder",
        opcionC: "Alison Krauss",
        opcionD: "Aretha Franklin",
        correcta: "c"
    },
    {
        id: 10,
        categoria: "musica",
        titulo: "Which song has the most streams on Spotify?",
        opcionA: "Shape of You",
        opcionB: "Someone You Loved",
        opcionC: "Blinding Lights",
        opcionD: "Despacito",
        correcta: "a"
    },
    {
        id: 11,
        categoria: "deportes",
        titulo: "Who is considered the greatest basketball player of all time?",
        opcionA: "LeBron James",
        opcionB: "Michael Jordan",
        opcionC: "Kobe Bryant",
        opcionD: " Kareem Abdul-Jabbar",
        correcta: "b"
    },
    {
        id: 12,
        categoria: "deportes",
        titulo: "Which country has won the most FIFA World Cup titles?",
        opcionA: "Germany",
        opcionB: "Brazil",
        opcionC: "Italy",
        opcionD: "Argentina",
        correcta: "b"
    },
    {
        id: 13,
        categoria: "deportes",
        titulo: "Which sport is known as the king of sports?",
        opcionA: "Basketball",
        opcionB: "Soccer (Football)",
        opcionC: "Tennis",
        opcionD: "Baseball",
        correcta: "b"
    },
    {
        id: 14,
        categoria: "deportes",
        titulo: "Which is the largest sporting event in the world?",
        opcionA: "Super Bowl",
        opcionB: "UEFA Champions League Final",
        opcionC: "FIFA World Cup",
        opcionD: "Olympic Games",
        correcta: "d"
    },
    {
        id: 15,
        categoria: "deportes",
        titulo: "Who is the highest-paid athlete in the world? (as of 2023)",
        opcionA: "Lionel Messi",
        opcionB: "Cristiano Ronaldo",
        opcionC: "LeBron James",
        opcionD: "Dak Prescott",
        correcta: "a"
    },
    {
        id: 16,
        categoria: "programacion",
        titulo: "¿Cuál de los siguientes lenguajes de programación es de tipado fuerte?",
        opcionA: "JavaScript",
        opcionB: "Python",
        opcionC: "C++",
        opcionD: "Java",
        correcta: "c"
    },
    {
        id: 17,
        categoria: "programacion",
        titulo: "Which programming language is considered the most popular in 2023?",
        opcionA: "Java",
        opcionB: "Python",
        opcionC: "C++",
        opcionD: "JavaScript",
        correcta: "b"
    },
    {
        id: 18,
        categoria: "programacion",
        titulo: "Which framework is considered the most popular for web development?",
        opcionA: "Django",
        opcionB: "Flask",
        opcionC: "Ruby on Rails",
        opcionD: "React",
        correcta: "d"
    },
    {
        id: 19,
        categoria: "programacion",
        titulo: "Who is the most influential person in programming history?",
        opcionA: "Linus Torvalds",
        opcionB: "Dennis Ritchie",
        opcionC: "Bjarne Stroustrup",
        opcionD: "Ada Lovelace",
        correcta: "d"
    },
    {
        id: 20,
        categoria: "programacion",
        titulo: "Which programming paradigm is the most widely used?",
        opcionA: "Functional",
        opcionB: "Object-Oriented",
        opcionC: "Procedural",
        opcionD: "Declarative",
        correcta: "b"
    },
    {
        id: 21,
        categoria: "juegos",
        titulo: "Which is the best-selling video game of all time?",
        opcionA: "Minecraft",
        opcionB: "Grand Theft Auto V",
        opcionC: "Tetris",
        opcionD: "Wii Sports",
        correcta: "a"
    },
    {
        id: 22,
        categoria: "juegos",
        titulo: "Which game has the highest rating on Metacritic?",
        opcionA: "The Legend of Zelda: Ocarina of Time",
        opcionB: "Grand Theft Auto IV",
        opcionC: "The Last of Us Part II",
        opcionD: "Super Mario Galaxy",
        correcta: "a"
    },
    {
        id: 23,
        categoria: "juegos",
        titulo: "Which is the most popular online multiplayer game?",
        opcionA: "Fortnite",
        opcionB: "Call of Duty: Warzone",
        opcionC: "PUBG",
        opcionD: "League of Legends",
        correcta: "d"
    },
    {
        id: 24,
        categoria: "juegos",
        titulo: "Who is considered the best-selling video game developer?",
        opcionA: "Nintendo",
        opcionB: "Electronic Arts",
        opcionC: "Activision",
        opcionD: "Ubisoft",
        correcta: "a"
    },
    {
        id: 25,
        categoria: "juegos",
        titulo: "Which gaming event is considered the largest annual gaming convention?",
        opcionA: "PAX East",
        opcionB: "E3",
        opcionC: "Gamescom",
        opcionD: "Tokyo Game Show",
        correcta: "b"
    },
    {
        id: 26,
        categoria: "peliculas",
        titulo: "Which film is the highest-grossing movie of all time (as of 2023)?",
        opcionA: "Avatar",
        opcionB: "Titanic",
        opcionC: "Avengers: Endgame",
        opcionD: "Star Wars: The Force Awakens",
        correcta: "a"
    },
    {
        id: 27,
        categoria: "peliculas",
        titulo: "Who has won the most Academy Awards (Oscars)?",
        opcionA: "Walt Disney",
        opcionB: "Katharine Hepburn",
        opcionC: "Jack Nicholson",
        opcionD: "Meryl Streep",
        correcta: "a"
    },
    {
        id: 28,
        categoria: "peliculas",
        titulo: "Which movie has the longest running time?",
        opcionA: "The Godfather",
        opcionB: "Gone with the Wind",
        opcionC: "The Irishman",
        opcionD: " Titanic",
        correcta: "c"
    },
    {
        id: 29,
        categoria: "peliculas",
        titulo: "Who is the highest-paid actor in Hollywood? (as of 2023)",
        opcionA: "Dwayne Johnson",
        opcionB: "Leonardo DiCaprio",
        opcionC: "Robert Downey Jr.",
        opcionD: "Will Smith",
        correcta: "a"
    },
    {
        id: 30,
        categoria: "peliculas",
        titulo: "Which film won the most Oscars in a single ceremony?",
        opcionA: "Ben-Hur",
        opcionB: "Titanic",
        opcionC: "The Lord of the Rings: The Return of the King",
        opcionD: "All of the Above",
        correcta: "d"
    }
]




//tomamos los elementos html
const txtPuntaje = document.querySelector("#puntos");
const nombre = document.querySelector("#nombre");

nombre.innerHTML = localStorage.getItem("nombre");
let numPreguntaActual = 0;

//Recupero el puntaje en caso que ya este jugando
let puntajeTotal = 0;
if(!localStorage.getItem("puntaje-total")){
    puntajeTotal = 0;
    txtPuntaje.innerHTML = puntajeTotal
}else{
    puntajeTotal = parseInt(localStorage.getItem("puntaje-total"));
    txtPuntaje.innerHTML = puntajeTotal;
}

//cargar las preguntas del tema que eligió
const categoriaActual = localStorage.getItem("categoria-actual");
const preguntasCategoria = preguntas.filter(pregunta => pregunta.categoria === categoriaActual);

function cargarSiguientePregunta(num){
    //tomo los elementos donde se cargaran los datos de la pregunta
    const numPregunta = document.querySelector("#num-pregunta");
    const txtPregunta = document.querySelector("#txt-pregunta");
    const opcionA = document.querySelector("#a");
    const opcionB = document.querySelector("#b");
    const opcionC = document.querySelector("#c");
    const opcionD = document.querySelector("#d");

    numPregunta.innerHTML = num + 1;
    txtPregunta.innerHTML = preguntasCategoria[num].titulo;
    opcionA.innerHTML = preguntasCategoria[num].opcionA;
    opcionB.innerHTML = preguntasCategoria[num].opcionB;
    opcionC.innerHTML = preguntasCategoria[num].opcionC;
    opcionD.innerHTML = preguntasCategoria[num].opcionD;

    

    //Agrego un eventlistener a cada boton de respuesta
    const botonesRespuesta = document.querySelectorAll(".opcion");
    //Quito los eventListen y las clases
    botonesRespuesta.forEach(opcion=>{
        opcion.removeEventListener("click", (e)=>{});
        opcion.classList.remove("correcta");
        opcion.classList.remove("incorrecta");
        opcion.classList.remove("no-events");
    })

    botonesRespuesta.forEach(opcion=>{
        opcion.addEventListener("click", agregarEventListenerBoton);
    })

    txtPuntaje.classList.remove("efecto");
}

function agregarEventListenerBoton(e){
    console.log(e.currentTarget.id);
    console.log(numPreguntaActual);
    console.log(preguntas[numPreguntaActual].correcta);
    //Controlo si la respuesta es correcta
    if(e.currentTarget.id === preguntasCategoria[numPreguntaActual].correcta){
        e.currentTarget.classList.add("correcta");
        puntajeTotal = puntajeTotal + 100;
        txtPuntaje.innerHTML = puntajeTotal;
        localStorage.setItem("puntaje-total", puntajeTotal);
        txtPuntaje.classList.add("efecto");
    }else{
        e.currentTarget.classList.add("incorrecta");
        const correcta = document.querySelector("#"+preguntasCategoria[numPreguntaActual].correcta);
        correcta.classList.add("correcta");
    }
    //Agrego un eventlistener a cada boton de respuesta
    const botonesRespuesta = document.querySelectorAll(".opcion");
    //Quito los eventListen para que no pueda seguir haciendo clic
    console.log(botonesRespuesta)
    botonesRespuesta.forEach(opcion=>{
        opcion.classList.add("no-events");
    })
}

cargarSiguientePregunta(numPreguntaActual);

//tomo el boton siguiente
const btnSiguiente = document.querySelector("#siguiente")
btnSiguiente.addEventListener("click",()=>{
    numPreguntaActual++;
    if(numPreguntaActual<=4){
        cargarSiguientePregunta(numPreguntaActual);
    }
    else{
        const categoriasJugadasLS = JSON.parse(localStorage.getItem("categorias-jugadas"));
       
        console.log(categoriasJugadasLS.length);
        if(parseInt(categoriasJugadasLS.length) < 6){
            //alert(categoriasJugadasLS.length);
            location.href = "menu.html";
        }else{
            //lo mando a la pantalla final
            location.href = "final.html";
        }
        
    }
    
})