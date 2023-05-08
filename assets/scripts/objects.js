/*******************************************************************/
// addMovieBtnEl
const moviesListEl=document.getElementById('movie-list');
const addMovieBtnEl = document.getElementById("add-movie-btn");
addMovieBtnEl.addEventListener("click", addMovieBtnHandler);

const moviesList = [];
let id = 0;
function addMovieBtnHandler() {
  // get the user inputs
  const title = document.getElementById("title");
  const extraNama = document.getElementById("extra-name");
  const extraValue = document.getElementById("extra-value");

  // validation step;
  if (!(title.value.trim() || extraNama.value.trim() || extraValue.value.trim())) {
    alert("You Can't Leave Any Failed Empty");
    return;
  }

  //create the movie object;
  const newMovie = {
    info: {
      title:title.value,
      [extraNama.value]:extraValue.value,
    },
    id: id++,
  };

  // add the new movie to the movieList arr
  moviesList.push(newMovie);

  // render the new added movie
  renderMovieObj(newMovie);

  if(!moviesListEl.classList.contains('visible'))
    moviesListEl.classList.add('visible')

  // clear the inputs
  for (const key of [title, extraNama, extraValue])
    key.value = "";

}

/*******************************************************************/
// searchBtnEl

const searchBtnEl = document.getElementById("search-btn");
searchBtnEl.addEventListener("click", searchBtnHandler);

function searchBtnHandler() {
  const filterTerm =document.getElementById('filter-title');
  
  // if (! filterTerm.value)
    console.log(moviesList);
    const filteredMoviesList = moviesList.filter(movie=>movie.info.title.includes(filterTerm.value));

    moviesListEl.innerHTML='';
    filteredMoviesList.forEach(filteredMovie=>renderMovieObj(filteredMovie));
}

function renderMovieObj(movieObj){
  const newMovie = document.createElement('li');
  
   // Adding the extraName and extraValue entered by the user to the element textContent
  let newMovieTextContent = movieObj.info.title + ` - `;
    for (const key in movieObj.info) {
      if(key != 'title'){
        newMovieTextContent+= `${key}: ${movieObj.info[key]} `;
      }
    }
  newMovie.textContent = newMovieTextContent;
  moviesListEl.append(newMovie);
}
