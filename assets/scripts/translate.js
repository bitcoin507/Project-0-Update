//method for fetching api from google translate using rapidapi
function getLanguages() {
    var myHeaders = new Headers();
    myHeaders.append("X-RapidAPI-Key", "3a9b9beb0amsh0cbdcdada685233p1fdeebjsn7477d1608833");

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };
    fetch("https://google-translate1.p.rapidapi.com/language/translate/v2/languages", requestOptions)
        .then(response => response.json())
        .then(result => createLanguagesList(result.data))
        .catch(error => console.log('error', error));
}
/*this will create a list of languages for translation using google translate via rapidapi
when drop-down menu is clicked*/
function createLanguagesList(langauges) {
    var toLanguage = document.getElementById("toLanguage");
    for (var i = 0; i < langauges.languages.length; i++) {
        var language = langauges.languages[i]
        var option = document.createElement("option");
        option.value = language.language
        option.text = language.language
        toLanguage.add(option);
    }
}
getLanguages();