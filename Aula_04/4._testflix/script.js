//Inserindo fotos com o FOR
document.write("<h2>Filmes</h2>")

var listaFilmes = ["https://br.web.img3.acsta.net/pictures/210/176/21017697_20130704202238456.jpg",
  "https://upload.wikimedia.org/wikipedia/pt/thumb/d/d4/Pirates_of_the_Caribbean_2.jpg/250px-Pirates_of_the_Caribbean_2.jpg"];

listaFilmes.push("https://upload.wikimedia.org/wikipedia/pt/3/38/Lord_of_the_Rings_Fellowship_of_the_Ring.jpg");


for (var i = 0; i < listaFilmes.length; i++) {
  document.write("<img src=" + listaFilmes[i] + ">");
}

document.write("<br>")

//------------------------------------------------------------------------------------------------------------------
//Inserindo fotos com o WHILE
document.write("<h2>Jogos</h2>")

var listaJogos = ["https://image.api.playstation.com/cdn/UP1822/CUSA13632_00/GuFQKWlrIVODEA1su20fCOrNZEYX5CB9.png"];

listaJogos.push("https://image.api.playstation.com/vulcan/img/rnd/202010/0919/KsbzaxvzYc4rhCpU5XcewIfn.png", "https://image.api.playstation.com/cdn/UP0700/CUSA08692_00/JxilRmpXkS3CCXUnr0gZTBOlqso3plaw.png");

var jogos = 0;
while (jogos < listaJogos.length) {
  document.write("<img src=" + listaJogos[jogos] + ">");
  jogos++;
}

document.write("<br>");

//------------------------------------------------------------------------------------------------------------------
//Inserindo fotos com o FOREACH e retirando os itens repetidos
document.write("<h2>Animes</h2>")

var listaAnimes = ["https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/95f19f64-9788-495c-923e-fe1d4bcf28b9/detlrxm-97e78e6d-d5e8-4b72-a9f7-a3696c232b37.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzk1ZjE5ZjY0LTk3ODgtNDk1Yy05MjNlLWZlMWQ0YmNmMjhiOVwvZGV0bHJ4bS05N2U3OGU2ZC1kNWU4LTRiNzItYTlmNy1hMzY5NmMyMzJiMzcuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.3t387pxgffON1_uFaMgl5llmjlPzXrKTvwbIR457tTQ", 
"https://images.justwatch.com/poster/261030629/s718/guilty-crown.%7Bformat%7D"];

listaAnimes.push("https://m.media-amazon.com/images/M/MV5BOTg5ZjI5ZTAtOWE2OS00MjY4LWI4ZDQtMzEzMDY4MTgzYWJlXkEyXkFqcGdeQXVyNjc3OTE4Nzk@._V1_.jpg", "https://m.media-amazon.com/images/M/MV5BOTg5ZjI5ZTAtOWE2OS00MjY4LWI4ZDQtMzEzMDY4MTgzYWJlXkEyXkFqcGdeQXVyNjc3OTE4Nzk@._V1_.jpg");


//Essa constante com o Set cria uma variavel que não aceita itens repetitidos
const fotosSemRepeticao = [...new Set(listaAnimes)]

function inserindoFoto(img, a, fotosSemRepeticao) {
  document.write("<img src=" + fotosSemRepeticao[a] + ">");
}

fotosSemRepeticao.forEach(inserindoFoto);
