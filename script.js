const URLBASE = "http://localhost:8000/api/v1/titles/"
let dynamicUrl = "?sort_by=-imdb_score"
let url = URLBASE + dynamicUrl
const myImage = document.getElementById("best-rated-movie-slide1-img");
const myRequest = new Request(url)
let urlPage2 = url + "&page=2";
let myArray = [];


async function test(url)
{
    const response = await fetch(url);
    const result = await response.json();
    return result;
}


async function call()
{
    const data = await test(url);

    for (row of data.results)
    {
        myArray.push(row);
    }
    console.log(myArray);

    // faire une boucle !
    const dataPage2 = await test(urlPage2);
    myArray.push(dataPage2.results[0]);
    myArray.push(dataPage2.results[1]);

    console.log(myArray);
    return await Promise.all(myArray);
}

function fillData(myArray)
{
    for (let i = 0; i < 7; i++)
    {
        document.getElementById(`best-rated-movie-slide${i+1}-title`).innerHTML = `${myArray[i].title}`;
        document.getElementById(`best-rated-movie-slide${i+1}-img`).src = `${myArray[i].image_url}`;



        document.getElementById(`best-rated-movie-slide${i+1}-modal-heading`).innerHTML = "Title: " + `${myArray[i].title}`;

        let genreList = myArray[i].genres;
        console.log(genreList);
        let genreString = "";
        for (row of genreList)
        {
            genreString+= row + ",";
        }
        if (genreString.length > 0)
        {
            genreString.slice(-1);
        }
        else
        {
            genreString = "Not Specified";
        }


        console.log("genreList:", genreList);
        console.log("genreString: ", genreString);

        document.getElementById(`best-rated-movie-slide${i+1}-modal-genre`).innerHTML = "Genre: " + genreString;
        document.getElementById(`best-rated-movie-slide${i+1}-modal-releasedate`).innerHTML = "Year: " + `${myArray[i].year}`;
        document.getElementById(`best-rated-movie-slide${i+1}-modal-votes`).innerHTML = "Votes: " + `${myArray[i].votes}`;
        document.getElementById(`best-rated-movie-slide${i+1}-modal-imdbscore`).innerHTML = "IMDb score: " + `${myArray[i].imdb_score}`;
/*
        //document.getElementById(`best-rated-movie-slide${i+1}-modal-directors`).innerHTML = `${myArray[i].directors}`;
        //document.getElementById(`best-rated-movie-slide${i+1}-modal-actors`).innerHTML = `${myArray[i].actors}`;
        //document.getElementById(`best-rated-movie-slide${i+1}-modal-duration`).innerHTML = `${myArray[i].duration}`;
        //document.getElementById(`best-rated-movie-slide${i+1}-modal-country`).innerHTML = `${myArray[i].country}`;
        //document.getElementById(`best-rated-movie-slide${i+1}-modal-boxoffice`).innerHTML = `${myArray[i].box_office}`;
        //document.getElementById(`best-rated-movie-slide${i+1}-modal-resume`).innerHTML = `${myArray[i].resume}`;
*/
    }
}

let a = Promise.resolve(call());
fillData(a)
