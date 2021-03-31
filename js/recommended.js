import movies from './movies.js'
import render from './render.js'


const $button = document.querySelector('#recommended')

$button.addEventListener('click', () => {
    render(setRecomendedMovies(movies))
})

function setRecomendedMovies(movies){
    const newMovies = movies.map((movie) => {
       return {...movie, recommended: movie.vote_average > 7}
    })
    return newMovies
    //console.table(newMovies, ['title', 'vote_average','recommended'])
}