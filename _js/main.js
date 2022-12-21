var listCharacter = new Array();

addEventListener("load", function () {
  reload();
});
const reload = () =>{
    getAPI(URL_API_CHARACTER, criaListaCharacter); 
    document.getElementById("my_audio").play();
    document.getElementById("my_audio").volume = 0.1;
}
const criaListaCharacter = (data) => { 
  let main = getElement("main");
  main.innerHTML = "";
  listCharacter = new Array();
  let count = 0;
  for (let i = 0; i < 2000; i++) {
    let html = document.createElement("div");
    html.classList.add("card", "col-3", "my-4", "bg-dark", "ms-3");
    html.addEventListener("click", () =>
      mostraDetalhesCharacter(data.amiibo[i])
    );

    let htmlBody = `
        <div class="card-header">
            <img class="card-img-top"  src="${data.amiibo[i].image}" alt="${data.amiibo[i].name}">
        </div>
        <div class="card-body bg-white">
            <h2 class="text-center">${data.amiibo[i].name}</h2>
        </div>`;

    html.innerHTML = htmlBody;
    main.appendChild(html);
    listCharacter.push(data.amiibo[i]);
  } 
};
const pesquisarAmiibo = () => {
  const inputPesquisa = document.getElementById("barraPesquisa");
  getAPI(`${URL_API_SEARCH}${inputPesquisa.value}`, criaListaCharacter);
};
const selecionarAmiibo = (element) => {
  getAPI(`${URL_API_SELECT}${element}`, criaListaCharacter);
  console.log(element);
};

const mostraDetalhesCharacter = (character) => {
  console.log(character);
  let div = document.createElement("div");
  getElement("#modal-body").innerHTML = "";
  div.classList.add("card", "col-12", "my-4", "bg-dark");

  let cardBody = `
            <div class="card-header">
                <img class="card-img-top" src="${character.image}" alt="Rick">
            </div>
            <div class="card-body bg-white">
                <h1 class="text-center">${character.name}</h1>
                <article>
                    <ul class="list-group">
                        <li class="list-group-item">Game: ${character.amiiboSeries}</li> 
                        <li class="list-group-item">Personagem: ${character.character}</li> 
                        <li class="list-group-item">Universo: ${character.gameSeries}</li> 
                        <li class="list-group-item">Lançamento: ${character.release.jp}</li> 
                    </ul>
                </article>
            </div>
        `;
  div.innerHTML = cardBody;
  getElement("#modal-body").appendChild(div);

  $("#charModal").modal("show");
};

 

const irItemPaginacao = (url) => {};
