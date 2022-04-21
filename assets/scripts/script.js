
var requesUrl = "https://api.themoviedb.org/" //"http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&r=json";
var movieName = "Titanic";


getMoviebyName();

function getMoviebyName() {
    var movieGetUrl = "https://api.themoviedb.org/3/search/movie?query=" + movieName + "&api_key=5282afd0a67826fac3febca5930766eb";
    fetch(movieGetUrl, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',


        }
    })
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);

        })

}