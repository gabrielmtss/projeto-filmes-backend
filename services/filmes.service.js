const listaFilmes = [
  {
    id: 1,
    nome: "Donnie Darko",
    imagem: "https://ingresso-a.akamaihd.net/img/cinema/cartaz/9494-cartaz.jpg",
    genero: "Ficção científica/Fantasia",
    nota: 10,
    assistido: false
  },
  {
    id: 2,
    nome: "O Hobbit: A Batalha dos Cinco Exércitos",
    imagem: "https://upload.wikimedia.org/wikipedia/pt/thumb/0/0e/The_Hobbit_-_The_Battle_of_the_Five_Armies.jpg/240px-The_Hobbit_-_The_Battle_of_the_Five_Armies.jpg",
    genero: "Fantasia/Aventura",
    nota: 10,
    assistido: false
  },
  {
    id: 3,
    nome: "Liga da Justiça de Zack Snyder",
    imagem: "https://media.fstatic.com/as43yaqgTL57KcvpzqPT4b4e8J4=/210x312/smart/media/movies/covers/2021/03/1615392114_liga-da-justica-de-zack-snyder-filme-poster.jpg",
    genero: "Ação/Aventura",
    nota: 10,
    assistido: false
  },
  {
    id: 4,
    nome: "Star Wars: Episódio IV – Uma Nova Esperança",
    imagem: "https://upload.wikimedia.org/wikipedia/pt/7/7e/Star_Wars_Epis%C3%B3dio_IV_Uma_Nova_Esperan%C3%A7a.jpg",
    genero: "Ficção científica/Fantasia",
    nota: 10,
    assistido: false
  },
  {
    id: 5,
    nome: "As Branquelas",
    imagem: "https://upload.wikimedia.org/wikipedia/pt/thumb/d/de/White_chicks.jpeg/200px-White_chicks.jpeg",
    genero: "Comédia",
    nota: 10,
    assistido: false
  }
]

const getFilmes = () => listaFilmes;

const getFilme = (idParam) => {
  return listaFilmes.find((filme) => filme.id == idParam);
}

const addFilme = (novoFilme) => {
  novoFilme.id = Date.now();

  listaFilmes.push(novoFilme);
  return novoFilme;
}

const editFilme = (idParam, filmeEdit) => {
  const index = listaFilmes.findIndex((filme) => filme.id == idParam);

  if(index >= 0) {
    listaFilmes[index] = {
      ...listaFilmes[index],
      ...filmeEdit
    }
    return true
  } else {
    return false
  }
}

const deleteFilme = (idParam) => {
  if(!idParam) {
    return
  }
  const index = listaFilmes.findIndex((filme) => filme.id == idParam);
  
  const filme = listaFilmes[index]
  listaFilmes.splice(index, 1);

  res.send({
    message: `O filme ${filme.nome} foi excluido com sucesso!`
  });
}

module.exports = {
  getFilmes,
  getFilme,
  addFilme,
  editFilme,
  deleteFilme
}