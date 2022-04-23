//function to fetch api
function getLanguages() {
    var myHeaders = new Headers();
myHeaders.append("X-RapidAPI-Key", "3a9b9beb0amsh0cbdcdada685233p1fdeebjsn7477d1608833");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("https://google-translate1.p.rapidapi.com/language/translate/v2/languages", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
}

//function to extract text from website
