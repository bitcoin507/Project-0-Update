
var requesUrl = "https://api.themoviedb.org/" //"http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&r=json";
//var movieName = "Titanic";
var currentPage;
var totalPages;
var movieDataJson;


//getMoviebyName();
checkIfMovieAlreadyExists("Titanic");
//getLocalMovieData();

//Check local storage to see if we already have some data for this movie
function checkIfMovieAlreadyExists(movieName) {

    var movieData = JSON.parse(localStorage.getItem("movies-" + movieName));
    if (movieData == null) {
        //get the movie data from the API
        getMoviebyName(movieName, 1);
        if (totalPages>0){
            //Currently hard coded to  2 pages
            for (var i = 2; i <= 2; i++) {
                getMoviebyName(movieName, i);
            }
        }
    }
    else {
        //get the movie data from the local storage
        var movieData = JSON.parse(localStorage.getItem("movies-" + movieName));
        
    }
}

function getMoviebyName(movieName, pageNumber) {
    var firstPass = true;
    // if(firstPass)
    var movieGetUrl = "https://api.themoviedb.org/3/search/movie?query=" + movieName + "&api_key=5282afd0a67826fac3febca5930766eb&page=" + pageNumber;
    //store the current search term in local storage
    localStorage.setItem("movieName", movieName);
    //get the movie data from the api
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
            movieDataJson +=JSON.stringify(data.results);
            console.log(data);
            localStorage.setItem("movies-" + movieName, movieDataJson);
            

            currentPage = data.page;
            totalPages = data.total_pages;
        })

}




function getLocalMovieData() {
    var movieData = JSON.parse(localStorage.getItem("movies"));
    var currentPage = movieData.page;
    var TotalPages = movieData.total_pages;
    console.log("The current page is: " + currentPage);
    console.log("The total pages are: " + TotalPages);
}