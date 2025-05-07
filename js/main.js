let moviesContainer = document.getElementById("moviesContainer")
let tvShowsContainer = document.getElementById("tvShowsContainer")
let allMoviesContainer = document.getElementById("allMoviesContainer")
let allTvShowsContainer = document.getElementById("allTvShowsContainer")
let moviesSearchInput = document.getElementById("moviesSearchInput")
let MoviesSearchBtn = document.getElementById("MoviesSearchBtn")
let tvShowsSearchInput = document.getElementById("tvShowsSearchInput")
let tvShowsSearchBtn = document.getElementById("tvShowsSearchBtn")
let navbarLinks = document.querySelectorAll("nav .nav-link")
let noMovies = document.querySelector("h2#noMovies")
let noTvShows = document.querySelector("h2#noTvShows")
let apiKey = "api_key=52bbcddeda849047525b51d6f8a12361"
let imageUrl = "https://image.tmdb.org/t/p/w500"
let btnToUp = document.getElementById("btn-back-to-top")
getMovies()
getTVShows()
appearanceAndDisappearanceBtnToUp()

async function getMovies() {
    let data = await fetch(`https://api.themoviedb.org/3/trending/movie/week?${apiKey}`)
    let response = await data.json()
    displayAllMovies(response.results.slice(0, 20))
    displayMovies(response.results.slice(0, 10))
    searchMovies(response.results.slice(0, 20))
}

function displayMovies(movies) {


    let cartona = ``

    for (let i = 0; i < movies.length - 1; i++) {
        cartona += `
            <div class="col-md-4 col-lg-2">
                        <div class="content position-relative">
                            <img src="${imageUrl + movies[i].poster_path}" class="w-100" alt="">
                            <span class="rate text-white fw-bold rounded">${movies[i].popularity.toString().slice(0, 5)}</span>
                            <h4 class="text-white text-center mt-2">${movies[i].title}</h4>
                        </div>
                        </div>
`


    }
    if (moviesContainer) {
        moviesContainer.innerHTML += cartona
        moviesContainer.innerHTML += `
                <div class="col-md-4 col-lg-2">
                    <a href="other pages/allMovies.html">
                        <div class="more-movies position-relative">
                            <img src="${imageUrl + movies[9].poster_path}" class="w-100" alt="">
                            <div class="over-lay position-absolute top-0 bottom-0 w-100  d-flex justify-content-center align-items-center">
                                <span class="text-white fw-bolder fs-1">+11</span>
                            </div>
                        </div>
                    </a>
                </div>`
    }


}

function displayAllMovies(movies) {
    let cartona = ``
    for (let i = 0; i < movies.length; i++) {

        cartona += `
        <div class="col-md-4 col-lg-2">
                    <div class="content position-relative">
                        <img src="${imageUrl + movies[i].poster_path}" class="w-100" alt="">
                        <span class="rate text-white fw-bold rounded">${movies[i].popularity.toString().slice(0, 5)}</span>
                        <h4 class="text-white text-center mt-2">${movies[i].title}</h4>
                    </div>
                    </div>
        `

    }

    if (allMoviesContainer) {
        allMoviesContainer.innerHTML = cartona

    }
}

function searchMovies(movies) {

    if (MoviesSearchBtn) {
        MoviesSearchBtn.addEventListener("click", function () {
            let cartona = ""
            for (var i = 0; i < movies.length; i++) {
                if (movies[i].title.toLowerCase().includes(moviesSearchInput.value.toLowerCase())) {
                    cartona += `        <div class="col-md-4 col-lg-2">
                    <div class="content position-relative">
                        <img src="${imageUrl + movies[i].poster_path}" class="w-100" alt="">
                        <span class="rate text-white fw-bold rounded">${movies[i].popularity.toString().slice(0, 5)}</span>
                        <h4 class="text-white text-center mt-2">${movies[i].title}</h4>
                    </div>
                    </div>`
                } else {
                    if (cartona == []) {

                        noMovies.innerHTML = "There is no movies";


                    } else {
                        noMovies.innerHTML = "";
                    }


                }
            }
            if (allMoviesContainer) {
                allMoviesContainer.innerHTML = cartona

            }
        })
    }

}

async function getTVShows() {
    let data = await fetch(`https://api.themoviedb.org/3/trending/tv/day?${apiKey}`)
    let response = await data.json()
    displayAllTvShows(response.results.slice(0, 20))
    displayTvShows(response.results.slice(0, 10))
    searchTvShows(response.results.slice(0, 20))

}

function displayTvShows(tvShows) {
    let cartona = ``

    for (let i = 0; i < tvShows.length - 1; i++) {

        cartona += `
        <div class="col-md-4 col-lg-2">
                    <div class="content position-relative">
                        <img src="${imageUrl + tvShows[i].poster_path}" class="w-100" alt="">
                        <span class="rate text-white fw-bold rounded">${tvShows[i].popularity.toString().slice(0, 5)}</span>
                        <h4 class="text-white text-center mt-2">${tvShows[i].name}</h4>
                    </div>
                    </div>
        `

    }

    if (tvShowsContainer) {
        tvShowsContainer.innerHTML += cartona
        tvShowsContainer.innerHTML += `      
                <div class="col-md-4 col-lg-2">
                    <a href="other pages/allTvShows.html">
                        <div class="more-tv-shows position-relative">
                            <img src="${imageUrl + tvShows[9].poster_path} " class="w-100" alt="">
        <div class="over-lay position-absolute top-0 bottom-0 w-100  d-flex justify-content-center align-items-center">
            <span class="text-white fw-bolder fs-1">+11</span>
                            </div>
                        </div>
                    </a>
                </div> `
    }
}

function displayAllTvShows(tvShows) {
    let cartona = ``
    for (let i = 0; i < tvShows.length; i++) {

        cartona += `
        <div class="col-md-4 col-lg-2">
            <div class="content position-relative">
                <img src="${imageUrl + tvShows[i].poster_path}" class="w-100" alt="">
                    <span class="rate text-white fw-bold rounded">${tvShows[i].popularity.toString().slice(0, 5)}</span>
                    <h4 class="text-white text-center mt-2">${tvShows[i].name}</h4>
            </div>
                    </div>
        `

    }

    if (allTvShowsContainer) {
        allTvShowsContainer.innerHTML += cartona

    }
}

function searchTvShows(tvShows) {

    if (tvShowsSearchBtn) {
        tvShowsSearchBtn.addEventListener("click", function () {
            let cartona = ""
            for (var i = 0; i < tvShows.length; i++) {
                if (tvShows[i].name.toLowerCase().includes(tvShowsSearchInput.value.toLowerCase())) {
                    cartona += `        <div class="col-md-4 col-lg-2">
        <div class="content position-relative">
            <img src="${imageUrl + tvShows[i].poster_path}" class="w-100" alt="">
                <span class="rate text-white fw-bold rounded">${tvShows[i].popularity.toString().slice(0, 5)}</span>
                <h4 class="text-white text-center mt-2">${tvShows[i].name}</h4>
        </div>
                    </div > `
                } else {
                    if (cartona == []) {

                        noTvShows.innerHTML = "There is no Tv Shows";


                    } else {
                        noTvShows.innerHTML = "";
                    }


                }
            }
            if (allTvShowsContainer) {
                allTvShowsContainer.innerHTML = cartona

            }
        })
    }

}

window.addEventListener("scroll", function () {
    if (this.scrollY > 629) {
        btnToUp.classList.remove("opacity-0")

        btnToUp.classList.add("opacity-100")
    } else {
        btnToUp.classList.add("opacity-0")

        btnToUp.classList.remove("opacity-100")
    }
})

function appearanceAndDisappearanceBtnToUp() {
    console.log("done");

    if (this.scrollY > 629) {
        btnToUp.classList.remove("opacity-0")

        btnToUp.classList.add("opacity-100")
    } else {
        btnToUp.classList.add("opacity-0")

        btnToUp.classList.remove("opacity-100")
    }
}

btnToUp.addEventListener("click", function () {
    window.scrollTo({ top: 0 });
})
let index = 0
for (let i = 0; i < navbarLinks.length; i++) {
    navbarLinks[i].addEventListener("click", function () {
        navbarLinks[index].classList.remove("active")

        index = i
        navbarLinks[i].classList.add("active")
    })

}

window.addEventListener("scroll", function () {
    if (window.scrollY == 0) {
        document.querySelector("nav .nav-item a[href='#home']").classList.add("active")
        document.querySelector("nav .nav-item a[href='#about']").classList.remove("active")
        document.querySelector("nav .nav-item a[href='#movies']").classList.remove("active")
        document.querySelector("nav .nav-item a[href='#tv-shows']").classList.remove("active")
        document.querySelector("nav .nav-item a[href='#testimonials']").classList.remove("active")
        document.querySelector("nav .nav-item a[href='#contact']").classList.remove("active")
    } else {
        document.querySelector("nav .nav-item a[href='#home']").classList.remove("active")

    }
})