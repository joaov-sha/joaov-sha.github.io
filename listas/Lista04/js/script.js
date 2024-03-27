import { apiKey } from './ApiKey.js';

let img, titulo, sinopse, listaGeneros, avaliacao;
let filmes = [];
let genres = [];
let i = 0;

window.addEventListener("load", () => {
    var lingua = navigator.language || navigator.userLanguage;
    var pagina = 1;
    createSlideShow();
    readDatabase(lingua, pagina);
});

function readDatabase(lingua, pagina){
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: apiKey
        }
      };
      
      fetch(`https://api.themoviedb.org/3/movie/popular?language=${lingua}&page=${pagina}`, options)
        .then(response => response.json())
        .then(data => {
            filmes = data.results.slice(0,10);
            setSlideShow(filmes);
        })
        .catch(err => console.error(err));

        fetch(`https://api.themoviedb.org/3/genre/movie/list?language=${lingua}`, options)
        .then(response => response.json())
        .then(data => {
            genres = data.genres;
        })
        .catch(err => console.error(err));
}

function setSlideShow(movies){
    var url = `https://image.tmdb.org/t/p/w500`;
    createSlide(img, url, movies);
    createTagList(movies[i].genre_ids);
    i++;
    var intervalo = setInterval(() => {
        createSlide(img, url, movies);
        i++;
        if(i == movies.length){
            i = 0;
        }
    },3000);

    document.getElementById("slide").addEventListener("mouseover", () => {
        clearInterval(intervalo);
    });

    document.getElementById("slide").addEventListener("mouseleave", () => {
        intervalo = setInterval(() => {
            createSlide(img, url, movies);
            i++;
            if(i == movies.length){
                i = 0;
            }
        },3000);
    });

    document.getElementById("back").addEventListener("click", () => {
        if (i === 0) {
            i = movies.length - 1;
        } else {
            i--;
        }
        createSlide(img, url, movies);
    });

    document.getElementById("forward").addEventListener("click", () => {
        i = (i + 1) % movies.length;
        createSlide(img, url, movies);
    });
}

function createSlideShow(){
    img = document.createElement("img");
    document.getElementById("cover").appendChild(img);
    titulo = document.createElement("h2");
    sinopse = document.createElement("p");
    listaGeneros = document.createElement("ul");
    listaGeneros.id = "listaGeneros";
    avaliacao = document.createElement("h4");
    document.getElementById("info").appendChild(titulo);
    document.getElementById("info").appendChild(sinopse);
    document.getElementById("info").appendChild(listaGeneros);
    document.getElementById("info").appendChild(avaliacao);
}

function createSlide(img, url, movies){
    img.setAttribute("src",`${url}${movies[i].poster_path}`);
    titulo.textContent = `${movies[i].title}`;
    if(movies[i].overview == ""){
        sinopse.textContent = "Infelizmente não foi possível obter a sinopse deste filme.";
    }else{
        sinopse.textContent = `${movies[i].overview}`;
    }
    createTagList(movies[i].genre_ids);
}

function createTagList(genreIds){
    listaGeneros.innerHTML = "";
    genreIds.forEach(genre_id => {
        let genre = genres.find(genre => genre.id == genre_id);
        if(genre){
            let li = document.createElement("li");
            li.textContent = genre.name;
            listaGeneros.appendChild(li);
        }
    })
}
