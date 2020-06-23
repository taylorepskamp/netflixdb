
const responses =  async () => {

    const titleEls =  document.getElementsByClassName("fallback-text")
    const converted = [...titleEls]
    const titlesFull = converted.map(element => {return element.innerText})
    let titles = titlesFull.slice(0,20)

    const testtitleEls =  document.querySelectorAll("fallback-text")
    const testconverted = [...testtitleEls]
    

    const key = "987070d2"
    let ratings =[]

    for(let title of titles) {
        console.log(title)
        let titleURL = `https://www.omdbapi.com/?t=${title}&apikey=${key}`
        let response = await fetch(titleURL)
        let titleObj = await response.json()
        ratings.push({movieTitle: title,
                      movieRating: titleObj.imdbRating})
    }
    
    let filtered = ratings.filter(movie => {return !isNaN(movie.movieRating)})
    let deduped = Array.from(new Set(filtered))
    let sorted = deduped.sort((a, b) => parseFloat(b.movieRating) - parseFloat(a.movieRating));
    chrome.runtime.sendMessage({
        titleList : sorted
    })
    }


chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    responses()
});


