const API_KEY="59580a08a32045b63a744ff3497228f4"
const BASE_URL = "https://api.themoviedb.org/3"

export  const getPopularMovies = async () =>{
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`)
    const data = await response.json()
    return data.results
}