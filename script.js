/* Déclaration de constantes et variables
--------------------------------------------------------------------------------- */
const URLBASE = "http://localhost:8000/api/v1/titles/";
let urlBest = URLBASE + "?sort_by=-imdb_score";
let urlCarpenter = URLBASE + "?director=john+carpenter&sort_by=-imdb_score";
let urlHistory = URLBASE + "?genre_contains=history&sort_by=-imdb_score";
let urlMifune = URLBASE + "?actor_contains=mifune&sort_by=-votes";


// fonction asynchrone d'appel qui crée une variable json à partir de la réponse
async function test(url)
{
    const response = await fetch(url);
    const result = await response.json();
    return result;
}

// fonction asynchrone d'appel qui transforme le json en liste de données
async function call(url)
{
    let myArray = [];
    let urlPage2 = url + "&page=2"
    const data = await test(url);

    for (row of data.results)
    {
        myArray.push(row);
    }
    console.log(myArray);


    const dataPage2 = await test(urlPage2);
    for (let i = 0; i < 2; i++)
    {
        myArray.push(dataPage2.results[i]);
    }

    return await Promise.all(myArray);
}

// fonction qui s
function convertToString(catList)
{
    let catString = "";
    for (row of catList)
    {
        catString+= row + ", ";
    }

    if (catString.length > 0)
    {
        catString.slice(-1);
    }
    else
    {
        catString = "Not Specified";
    }
    return catString;
}




function fillDataBest(myArray)
{
    for (let i = 0; i < 7; i++)
    {
        document.getElementById(`best-rated-movie-slide${i+1}-img`).src =
        `${myArray[i].image_url}`;

        try
        {
            let testValue = `${myArray[i].title}`;
            if(typeof testValue !== "undefined")
            {
                throw new SyntaxError("Data not specified in database");
            }
        }
        catch(e)
        {
        console.error("Import Error: " + e);
        document.getElementById(`best-rated-movie-slide${i+1}-modal-heading`).innerHTML =
        `${myArray[i].title}`;
        }

        try
        {
            let testValue = `${myArray[i].actors}`;
            if(typeof testValue !== "undefined")
            {
                throw new SyntaxError("Data not specified in database");
            }
        }
        catch(e)
        {
        console.error("Import Error: " + e);
        document.getElementById(`best-rated-movie-slide${i+1}-modal-releasedate`).innerHTML +=
        `${myArray[i].year}`;
        }

        try
        {
            let testValue = `${myArray[i].votes}`;
            if(typeof testValue !== "undefined")
            {
                throw new SyntaxError("Data not specified in database");
            }
        }
        catch(e)
        {
        console.error("Import Error: " + e);
        document.getElementById(`best-rated-movie-slide${i+1}-modal-votes`).innerHTML +=
        `${myArray[i].votes}`;
        }

        try
        {
            let testValue = `${myArray[i].imdb_score}`;
            if(typeof testValue !== "undefined")
            {
                throw new SyntaxError("Data not specified in database");
            }
        }
        catch(e)
        {
        console.error("Import Error: " + e);
        document.getElementById(`best-rated-movie-slide${i+1}-modal-imdbscore`).innerHTML +=
        `${myArray[i].imdb_score}`;
        }

        try
        {
            let testValue = `${myArray[i].genres}`;
            if(typeof testValue !== "undefined")
            {
                throw new SyntaxError("Data not specified in database");
            }
        }
        catch(e)
        {
        console.error("Import Error: " + e);

        document.getElementById(`best-rated-movie-slide${i+1}-modal-genre`).innerHTML =
        "Genre(s): " + convertToString(myArray[i].genres);
        }

        try
        {
            let testValue = `${myArray[i].directors}`;
            if(typeof testValue !== "undefined")
            {
                throw new SyntaxError("Data not specified in database");
            }
        }
        catch(e)
        {
        console.error("Import Error: " + e);
        document.getElementById(`best-rated-movie-slide${i+1}-modal-directors`).innerHTML +=
        convertToString(myArray[i].directors);
        }

        try
        {
            let testValue = `${myArray[i].actors}`;
            if(typeof testValue !== "undefined")
            {
                throw new SyntaxError("Data not specified in database");
            }
        }
        catch(e)
        {
        console.error("Import Error: " + e);
        document.getElementById(`best-rated-movie-slide${i+1}-modal-actors`).innerHTML +=
        convertToString(myArray[i].actors);
        }

        try
        {
            let testValue = `${myArray[i].duration}`;
            if(typeof testValue !== "undefined")
            {
                throw new SyntaxError("Data not specified in database");
            }
        }
        catch(e)
        {
        console.error("Import Error: " + e);
        document.getElementById(`best-rated-movie-slide${i+1}-modal-duration`).innerHTML += "not in database";
        }

        try
        {
            let testValue = `${myArray[i].country}`;
            if(typeof testValue !== "undefined")
            {
                throw new SyntaxError("Data not specified in database");
            }
        }
        catch(e)
        {
        console.error("Import Error: " + e);
        document.getElementById(`best-rated-movie-slide${i+1}-modal-country`).innerHTML += "not in database";
        }

        try
        {
            let testValue = `${myArray[i].box_office}`;
            if(typeof testValue !== "undefined")
            {
                throw new SyntaxError("Data not specified in database");
            }
        }
        catch(e)
        {
        console.error("Import Error: " + e);
        document.getElementById(`best-rated-movie-slide${i+1}-modal-boxoffice`).innerHTML += " not in database";
        }

        try
        {
            let testValue = `${myArray[i].summary}`;
            if(typeof testValue !== "undefined")
            {
                throw new SyntaxError("Data not specified in database");
            }
        }
        catch(e)
        {
        console.error("Import Error: " + e);
        document.getElementById(`best-rated-movie-slide${i+1}-modal-summary`).innerHTML += " not in database";
        }
    }
}

call(urlBest).then(res => fillDataBest(res))


function fillDataCarpenter(myArray)
{
    for (let i = 0; i < 7; i++)
    {

        document.getElementById(`carpenter-movie-slide${i+1}-img`).src =
        `${myArray[i].image_url}`;

        try
        {
            let testValue = `${myArray[i].title}`;
            if(typeof testValue !== "undefined")
            {
                throw new SyntaxError("Data not specified in database");
            }
        }
        catch(e)
        {
        console.error("Import Error: " + e);
        document.getElementById(`carpenter-movie-slide${i+1}-modal-heading`).innerHTML =
        `${myArray[i].title}`;
        }

        try
        {
            let testValue = `${myArray[i].actors}`;
            if(typeof testValue !== "undefined")
            {
                throw new SyntaxError("Data not specified in database");
            }
        }
        catch(e)
        {
        console.error("Import Error: " + e);
        document.getElementById(`carpenter-movie-slide${i+1}-modal-releasedate`).innerHTML +=
        `${myArray[i].year}`;
        }

        try
        {
            let testValue = `${myArray[i].votes}`;
            if(typeof testValue !== "undefined")
            {
                throw new SyntaxError("Data not specified in database");
            }
        }
        catch(e)
        {
        console.error("Import Error: " + e);
        document.getElementById(`carpenter-movie-slide${i+1}-modal-votes`).innerHTML +=
        `${myArray[i].votes}`;
        }

        try
        {
            let testValue = `${myArray[i].imdb_score}`;
            if(typeof testValue !== "undefined")
            {
                throw new SyntaxError("Data not specified in database");
            }
        }
        catch(e)
        {
        console.error("Import Error: " + e);
        document.getElementById(`carpenter-movie-slide${i+1}-modal-imdbscore`).innerHTML +=
        `${myArray[i].imdb_score}`;
        }

        try
        {
            let testValue = `${myArray[i].genres}`;
            if(typeof testValue !== "undefined")
            {
                throw new SyntaxError("Data not specified in database");
            }
        }
        catch(e)
        {
        console.error("Import Error: " + e);

        document.getElementById(`carpenter-movie-slide${i+1}-modal-genre`).innerHTML =
        "Genre(s): " + convertToString(myArray[i].genres);
        }

        try
        {
            let testValue = `${myArray[i].directors}`;
            if(typeof testValue !== "undefined")
            {
                throw new SyntaxError("Data not specified in database");
            }
        }
        catch(e)
        {
        console.error("Import Error: " + e);
        document.getElementById(`carpenter-movie-slide${i+1}-modal-directors`).innerHTML +=
        convertToString(myArray[i].directors);
        }

        try
        {
            let testValue = `${myArray[i].actors}`;
            if(typeof testValue !== "undefined")
            {
                throw new SyntaxError("Data not specified in database");
            }
        }
        catch(e)
        {
        console.error("Import Error: " + e);
        document.getElementById(`carpenter-movie-slide${i+1}-modal-actors`).innerHTML +=
        convertToString(myArray[i].actors);
        }

        try
        {
            let testValue = `${myArray[i].duration}`;
            if(typeof testValue !== "undefined")
            {
                throw new SyntaxError("Data not specified in database");
            }
        }
        catch(e)
        {
        console.error("Import Error: " + e);
        document.getElementById(`carpenter-movie-slide${i+1}-modal-duration`).innerHTML += "not in database";
        }

        try
        {
            let testValue = `${myArray[i].country}`;
            if(typeof testValue !== "undefined")
            {
                throw new SyntaxError("Data not specified in database");
            }
        }
        catch(e)
        {
        console.error("Import Error: " + e);
        document.getElementById(`carpenter-movie-slide${i+1}-modal-country`).innerHTML += "not in database";
        }

        try
        {
            let testValue = `${myArray[i].box_office}`;
            if(typeof testValue !== "undefined")
            {
                throw new SyntaxError("Data not specified in database");
            }
        }
        catch(e)
        {
        console.error("Import Error: " + e);
        document.getElementById(`carpenter-movie-slide${i+1}-modal-boxoffice`).innerHTML += " not in database";
        }

        try
        {
            let testValue = `${myArray[i].summary}`;
            if(typeof testValue !== "undefined")
            {
                throw new SyntaxError("Data not specified in database");
            }
        }
        catch(e)
        {
        console.error("Import Error: " + e);
        document.getElementById(`carpenter-movie-slide${i+1}-modal-summary`).innerHTML += " not in database";
        }
    }
}

call(urlCarpenter).then(res => fillDataCarpenter(res))


function fillDataHistory(myArray)
{
    for (let i = 0; i < 7; i++)
    {

        document.getElementById(`history-movie-slide${i+1}-img`).src =
        `${myArray[i].image_url}`;

        try
        {
            let testValue = `${myArray[i].title}`;
            if(typeof testValue !== "undefined")
            {
                throw new SyntaxError("Data not specified in database");
            }
        }
        catch(e)
        {
        console.error("Import Error: " + e);
        document.getElementById(`history-movie-slide${i+1}-modal-heading`).innerHTML =
        `${myArray[i].title}`;
        }

        try
        {
            let testValue = `${myArray[i].actors}`;
            if(typeof testValue !== "undefined")
            {
                throw new SyntaxError("Data not specified in database");
            }
        }
        catch(e)
        {
        console.error("Import Error: " + e);
        document.getElementById(`history-movie-slide${i+1}-modal-releasedate`).innerHTML +=
        `${myArray[i].year}`;
        }

        try
        {
            let testValue = `${myArray[i].votes}`;
            if(typeof testValue !== "undefined")
            {
                throw new SyntaxError("Data not specified in database");
            }
        }
        catch(e)
        {
        console.error("Import Error: " + e);
        document.getElementById(`history-movie-slide${i+1}-modal-votes`).innerHTML +=
        `${myArray[i].votes}`;
        }

        try
        {
            let testValue = `${myArray[i].imdb_score}`;
            if(typeof testValue !== "undefined")
            {
                throw new SyntaxError("Data not specified in database");
            }
        }
        catch(e)
        {
        console.error("Import Error: " + e);
        document.getElementById(`history-movie-slide${i+1}-modal-imdbscore`).innerHTML +=
        `${myArray[i].imdb_score}`;
        }

        try
        {
            let testValue = `${myArray[i].genres}`;
            if(typeof testValue !== "undefined")
            {
                throw new SyntaxError("Data not specified in database");
            }
        }
        catch(e)
        {
        console.error("Import Error: " + e);

        document.getElementById(`history-movie-slide${i+1}-modal-genre`).innerHTML =
        "Genre(s): " + convertToString(myArray[i].genres);
        }

        try
        {
            let testValue = `${myArray[i].directors}`;
            if(typeof testValue !== "undefined")
            {
                throw new SyntaxError("Data not specified in database");
            }
        }
        catch(e)
        {
        console.error("Import Error: " + e);
        document.getElementById(`history-movie-slide${i+1}-modal-directors`).innerHTML +=
        convertToString(myArray[i].directors);
        }

        try
        {
            let testValue = `${myArray[i].actors}`;
            if(typeof testValue !== "undefined")
            {
                throw new SyntaxError("Data not specified in database");
            }
        }
        catch(e)
        {
        console.error("Import Error: " + e);
        document.getElementById(`history-movie-slide${i+1}-modal-actors`).innerHTML +=
        convertToString(myArray[i].actors);
        }

        try
        {
            let testValue = `${myArray[i].duration}`;
            if(typeof testValue !== "undefined")
            {
                throw new SyntaxError("Data not specified in database");
            }
        }
        catch(e)
        {
        console.error("Import Error: " + e);
        document.getElementById(`history-movie-slide${i+1}-modal-duration`).innerHTML += "not in database";
        }

        try
        {
            let testValue = `${myArray[i].country}`;
            if(typeof testValue !== "undefined")
            {
                throw new SyntaxError("Data not specified in database");
            }
        }
        catch(e)
        {
        console.error("Import Error: " + e);
        document.getElementById(`history-movie-slide${i+1}-modal-country`).innerHTML += "not in database";
        }

        try
        {
            let testValue = `${myArray[i].box_office}`;
            if(typeof testValue !== "undefined")
            {
                throw new SyntaxError("Data not specified in database");
            }
        }
        catch(e)
        {
        console.error("Import Error: " + e);
        document.getElementById(`history-movie-slide${i+1}-modal-boxoffice`).innerHTML += " not in database";
        }

        try
        {
            let testValue = `${myArray[i].summary}`;
            if(typeof testValue !== "undefined")
            {
                throw new SyntaxError("Data not specified in database");
            }
        }
        catch(e)
        {
        console.error("Import Error: " + e);
        document.getElementById(`history-movie-slide${i+1}-modal-summary`).innerHTML += " not in database";
        }
    }
}

call(urlHistory).then(res => fillDataHistory(res))


function fillDataMifune(myArray)
{
    for (let i = 0; i < 7; i++)
    {

        document.getElementById(`mifune-movie-slide${i+1}-img`).src =
        `${myArray[i].image_url}`;

        try
        {
            let testValue = `${myArray[i].title}`;
            if(typeof testValue !== "undefined")
            {
                throw new SyntaxError("Data not specified in database");
            }
        }
        catch(e)
        {
        console.error("Import Error: " + e);
        document.getElementById(`mifune-movie-slide${i+1}-modal-heading`).innerHTML =
        `${myArray[i].title}`;
        }

        try
        {
            let testValue = `${myArray[i].actors}`;
            if(typeof testValue !== "undefined")
            {
                throw new SyntaxError("Data not specified in database");
            }
        }
        catch(e)
        {
        console.error("Import Error: " + e);
        document.getElementById(`mifune-movie-slide${i+1}-modal-releasedate`).innerHTML +=
        `${myArray[i].year}`;
        }

        try
        {
            let testValue = `${myArray[i].votes}`;
            if(typeof testValue !== "undefined")
            {
                throw new SyntaxError("Data not specified in database");
            }
        }
        catch(e)
        {
        console.error("Import Error: " + e);
        document.getElementById(`mifune-movie-slide${i+1}-modal-votes`).innerHTML +=
        `${myArray[i].votes}`;
        }

        try
        {
            let testValue = `${myArray[i].imdb_score}`;
            if(typeof testValue !== "undefined")
            {
                throw new SyntaxError("Data not specified in database");
            }
        }
        catch(e)
        {
        console.error("Import Error: " + e);
        document.getElementById(`mifune-movie-slide${i+1}-modal-imdbscore`).innerHTML +=
        `${myArray[i].imdb_score}`;
        }

        try
        {
            let testValue = `${myArray[i].genres}`;
            if(typeof testValue !== "undefined")
            {
                throw new SyntaxError("Data not specified in database");
            }
        }
        catch(e)
        {
        console.error("Import Error: " + e);

        document.getElementById(`mifune-movie-slide${i+1}-modal-genre`).innerHTML =
        "Genre(s): " + convertToString(myArray[i].genres);
        }

        try
        {
            let testValue = `${myArray[i].directors}`;
            if(typeof testValue !== "undefined")
            {
                throw new SyntaxError("Data not specified in database");
            }
        }
        catch(e)
        {
        console.error("Import Error: " + e);
        document.getElementById(`mifune-movie-slide${i+1}-modal-directors`).innerHTML +=
        convertToString(myArray[i].directors);
        }

        try
        {
            let testValue = `${myArray[i].actors}`;
            if(typeof testValue !== "undefined")
            {
                throw new SyntaxError("Data not specified in database");
            }
        }
        catch(e)
        {
        console.error("Import Error: " + e);
        document.getElementById(`mifune-movie-slide${i+1}-modal-actors`).innerHTML +=
        convertToString(myArray[i].actors);
        }

        try
        {
            let testValue = `${myArray[i].duration}`;
            if(typeof testValue !== "undefined")
            {
                throw new SyntaxError("Data not specified in database");
            }
        }
        catch(e)
        {
        console.error("Import Error: " + e);
        document.getElementById(`mifune-movie-slide${i+1}-modal-duration`).innerHTML += "not in database";
        }

        try
        {
            let testValue = `${myArray[i].country}`;
            if(typeof testValue !== "undefined")
            {
                throw new SyntaxError("Data not specified in database");
            }
        }
        catch(e)
        {
        console.error("Import Error: " + e);
        document.getElementById(`mifune-movie-slide${i+1}-modal-country`).innerHTML += "not in database";
        }

        try
        {
            let testValue = `${myArray[i].box_office}`;
            if(typeof testValue !== "undefined")
            {
                throw new SyntaxError("Data not specified in database");
            }
        }
        catch(e)
        {
        console.error("Import Error: " + e);
        document.getElementById(`mifune-movie-slide${i+1}-modal-boxoffice`).innerHTML += " not in database";
        }

        try
        {
            let testValue = `${myArray[i].summary}`;
            if(typeof testValue !== "undefined")
            {
                throw new SyntaxError("Data not specified in database");
            }
        }
        catch(e)
        {
        console.error("Import Error: " + e);
        document.getElementById(`mifune-movie-slide${i+1}-modal-summary`).innerHTML += " not in database";
        }
    }
}

call(urlMifune).then(res => fillDataMifune(res))

