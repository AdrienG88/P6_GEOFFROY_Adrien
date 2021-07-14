/* function load_best_movie(url)
{
	load_json(url).then(json =>
	{
		load_json(json.results[0]["id"]).then(sub_json =>
		{
			document.getElementById("best-movie").innerHTML = 
			`<div id="information-best-movie">
				<h1 id="title-best-movie">${json.results[0]["title"]}</h1>
				<button id="button-play" onclick="show_modal(${json.results[0]["id"]})">Play</button>
				<p id="description-best-movie">${sub_json["long-description"]}</p>
			</div>
			<div id="img-best-movie">
				<img src="${json.results[0]["image_url"]}" id="img_movie_0" width="450" height="550">
			</div>`;

		})
	})
}
*/

function loadBestMovie(url)
{
	loadJson(url).then(function (json)
	{
		loadJson(json.results[0]["id"]).then(function (subJson)
		{
			document.getElementById("best-rated-movie-slide1-title").innerHTML =
			`${json.results[0]["title"]}`;

			document.getElementById("best-rated-movie-slide1-img").src =
			`${json.results[0]["image_url"]}`;

			document.getElementById("best-rated-movie-slide1-description").innerHTML=
			`Titre: ${json.results[0]["title"]} <br>
			Genre: ${json.results[0]["genres"]} <br>
			Année de sortie: ${json.results[0]["year"]} <br>
			Score Imdb: ${json.results[0]["imdb_score"]} <br>
			Réalisateur(s): ${json.results[0]["directors"]} <br>
			Acteurs: ${json.results[0]["actors"]}` ;


		})
	})
}

// Durée: requête avec lien page imdb + getElementsByClass("ipc-inline-list__item").innerHTML

function loadJson(url)
{
	try
	{
		return fetch(URL_BASE+url).then(function (response)
		{
			if (response.ok)
			{
				return response.json();
			}
			else
			{
				throw new Error("La requete a echoue.");
			}
		})
	}
	catch(e)
	{
		console.log(e.message)
	}
}

const URL_BASE = "http://localhost:8000/api/v1/titles/"
let url = "?title=Alien"
loadBestMovie(url)