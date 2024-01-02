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
        for(let i = 1; i <= 1; i++){
            const div = document.createElement("div")
            const div2 = document.createElement("div")

            const response = await fetch(rankingUrl + `${i}`, options);
            const result = await response.json();

                console.log(result);

            
                div.classList.add( `slide`)
                div.style.backgroundImage = `url(${result["image"]})`
                if(i === 1) {
                    div.setAttribute("data-active", "")
                    div2.setAttribute("data-active", "")
                    seasonal.style.backgroundImage = `url(${result["image"]})`
                }
                div2.classList.add("slide-info")
                div2.innerHTML = 
                `<h1>${result.title}</h1>
                    <p>${result.type} &#160&#160&#160 Rank #${result.ranking} &#160&#160&#160&#160 ${result.status}</p>
                        <br>
                        <br>
                        <br>
                        <br>
                        <br>
                        <br>
                    <p>${result.synopsis}
                `
                
                container.appendChild(div)
                container.appendChild(div2)
    }
    } catch (error) {
        console.error(error);
    }
}

getRanked()
