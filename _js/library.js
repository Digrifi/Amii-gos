/* # Confs */
const URL_API_CHARACTER = 'https://www.amiiboapi.com/api/amiibo'
const URL_API_SEARCH = 'https://amiiboapi.com/api/amiibo/?character='
const URL_API_SELECT = 'https://amiiboapi.com/api/amiibo/?gameseries='
/* # Functions */
function getElement(q) {
    return document.querySelector(q);
}

const getAPI = (url, functionCallback) => {
    fetch(url).then(
        (response) => response.json(), // resolve (retorno OK)
        (error) => console.error(error) // reject (erro no retorno)
        ).then(
            dataJson => functionCallback(dataJson), // resolve (retorno OK)
            erro => console.error(erro) // reject (erro no retorno)
            ); 
}
