const searchBar = document.getElementById("search-bar")
const searchBtn = document.getElementById("search-btn")
const seasonal = document.getElementById("recommended-slider")
const container = document.getElementById("slider")


const rankingUrl = 'https://anime-db.p.rapidapi.com/anime/by-ranking/';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '7036ef53d4mshadbbeb475a3a0c8p144da1jsn718603bed062',
		'X-RapidAPI-Host': 'anime-db.p.rapidapi.com'
	}
};



async function getRanked(){
    try {
        for(let i = 1; i <= 10; i++){
            const response = await fetch(rankingUrl + `${i}`, options);
            const result = await response.json();

                console.log(result);

            const div = document.createElement("div")
                div.classList.add( `slide`)
                div.style.backgroundImage = `url(${result["image"]})`
                seasonal.style.backgroundImage = `url(${result["image"]})`
                container.appendChild(div);
            // seasonal1.style.backgroundImage = `url(${result["image"]})`
    }
    } catch (error) {
        console.error(error);
    }
}

getRanked()
