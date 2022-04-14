const URLBASE = "http://localhost:8000/api/v1/titles/"
let dynamicUrl = "?sort_by=-imdb_score"
let url = URLBASE + dynamicUrl
const myImage = document.getElementById("best-rated-movie-slide1-img");
const myRequest = new Request(url)




/*
function getTitle(url) {
    fetch(url)
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {
        myTitle.value = json["results"][0].title
    });
}
*/

async function test (url)
{
    const response = await fetch(url);
    const result = await response.json();
    return result;
}


async function call()
{
    data = await test(url);
    document.getElementById("best-rated-movie-slide1-title").innerHTML = data["results"][0].title;
	document.getElementById("best-rated-movie-slide1-img").src = data["results"][0].image_url;
	document.getElementById("best-rated-movie-slide2-title").innerHTML = data["results"][1].title;
	document.getElementById("best-rated-movie-slide2-img").src = data["results"][1].image_url;
}

call()
