// MOVIES:

const url =
  "https://moviesdatabase.p.rapidapi.com/titles/random?list=top_rated_english_250";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "c00e6b0bf7mshbf5c0aaeb67c532p1ea5e7jsnb69cf6b45038",
    "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
  },
};

const movieBox = document.getElementById("movie-box");
const movieImageBox = document.getElementById("movie-image-box");

const movieList = [];

try {
  const response = await fetch(url, options);
  const result = await response.json();
  console.log(result);
  movieList.push(result.results[0], result.results[1], result.results[2]);
  console.log(movieList);

  //   movieBox.innerHTML = "";

  const movieLink = document.createElement("a");
  console.log(movieList[0].id);
  movieLink.href = `https://www.imdb.com/title/${movieList[0].id}`;
  movieLink.target = "blank";
  movieLink.classList.add("link");
  movieImageBox.appendChild(movieLink);

  const movieImage = document.createElement("img");
  movieImage.classList.add("image");
  movieImage.src = movieList[0].primaryImage.url;
  movieLink.appendChild(movieImage);

  // IF THERE IS AN ERROR WITH LOADING AN IMAGE:
  movieImage.onerror = movieError;

  function movieError() {
    movieImage.src = movieList[1].primaryImage.url;
    movieLink.href = `https://www.imdb.com/title/${movieList[1].id}`;
  }
} catch (error) {
  console.error(error);
}

const movieButton = document
  .getElementById("movie-button")
  .addEventListener("click", async () => {
    let movieList1 = movieList;
    movieList1 = [];

    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);
    movieList1.push(result.results[0], result.results[1], result.results[2]);
    console.log(movieList1);
    movieImageBox.innerHTML = "";

    const movieLink = document.createElement("a");
    console.log(movieList1[0]);
    movieLink.href = `https://www.imdb.com/title/${movieList1[0].id}`;
    movieLink.target = "blank";
    movieLink.classList.add("link");
    movieImageBox.appendChild(movieLink);

    const movieImage = document.createElement("img");
    movieImage.classList.add("image");
    movieImage.src = movieList1[0].primaryImage.url;
    movieLink.appendChild(movieImage);

    // IF THERE IS AN ERROR WITH LOADING AN IMAGE:
    movieImage.onerror = movieError;

    function movieError() {
      movieImage.src = movieList1[1].primaryImage.url;
      movieLink.href = `https://www.imdb.com/title/${movieList1[1].id}`;
    }
  });

// SHOWS:

const showImageBox = document.getElementById("show-image-box");
const showBox = document.getElementById("movie-box");
const showList = [];

const url2 =
  "https://moviesdatabase.p.rapidapi.com/titles/random?list=top_rated_series_250";
const options2 = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "71e84c4c23mshd8e3f331fd45e8ap1ce910jsndb4458373b3d",
    "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
  },
};

try {
  const response = await fetch(url2, options2);
  const result = await response.json();
  console.log(result);
  showList.push(result.results[0], result.results[1], result.results[2]);
  console.log(showList);

  const showLink = document.createElement("a");
  showLink.href = `https://www.imdb.com/title/${showList[0].id}`;
  showLink.target = "blank";
  showLink.classList.add("link");
  showImageBox.appendChild(showLink);

  const showImage = document.createElement("img");
  showImage.classList.add("image");
  showImage.src = showList[0].primaryImage.url;
  showLink.appendChild(showImage);

  // IF THERE IS AN ERROR WITH LOADING AN IMAGE:
  showImage.onerror = showError;

  function showError() {
    showImage.src = showList[1].primaryImage.url;
    showLink.href = `https://www.imdb.com/title/${showList[1].id}`;
  }
} catch (error) {
  console.error(error);
}

const showButton = document
  .getElementById("show-button")
  .addEventListener("click", async () => {
    let showList1 = showList;
    showList1 = [];

    const response = await fetch(url2, options2);
    const result = await response.json();
    console.log(result);
    showList1.push(result.results[0], result.results[1], result.results[2]);
    console.log(showList1);
    showImageBox.innerHTML = "";

    const showLink = document.createElement("a");
    console.log(showList1[0]);
    showLink.href = `https://www.imdb.com/title/${showList1[0].id}`;
    showLink.target = "blank";
    showLink.classList.add("link");
    showImageBox.appendChild(showLink);

    const showImage = document.createElement("img");
    showImage.classList.add("image");
    showImage.src = showList1[0].primaryImage.url;
    showLink.appendChild(showImage);

    // IF THERE IS AN ERROR WITH LOADING AN IMAGE:
    showImage.onerror = showError;

    function showError() {
      showImage.src = showList1[1].primaryImage.url;
      showLink.href = `https://www.imdb.com/title/${showList1[1].id}`;
    }
  });
