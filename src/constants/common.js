export const basePathImage = "https://image.tmdb.org/t/p/original";
export const apiKey = "2dca580c2a14b55200e784d157207b4d";

// https://image.tmdb.org/t/p/w500

// poster   = Poster
// backdrop = Fanart
// profile  = Actors and Actresses
// still    = TV Show Episode
// logo     = TMDb Logo

// ## Image Sizes

// |  poster  | backdrop | profile  |  still   |   logo   |
// | :------: | :------: | :------: | :------: | :------: |
// | -------- | -------- |    w45   | -------- |    w45   |
// |    w92   | -------- | -------- |    w92   |    w92   |
// |   w154   | -------- | -------- | -------- |   w154   |
// |   w185   | -------- |   w185   |   w185   |   w185   |
// | -------- |   w300   | -------- |   w300   |   w300   |
// |   w342   | -------- | -------- | -------- | -------- |
// |   w500   | -------- | -------- | -------- |   w500   |
// | -------- | -------- |   h632   | -------- | -------- |
// |   w780   |   w780   | -------- | -------- | -------- |
// | -------- |  w1280   | -------- | -------- | -------- |
// | original | original | original | original | original |

// https://developer.themoviedb.org/docs/image-basics
// https://www.themoviedb.org/talk/5a847d179251410a8900f4f3

// ------------------------------------------------------------------------

// For cast (actors) and crew (directors). [see at end]
// 550 is movie Id
// https://api.themoviedb.org/3/movie/550?api_key=2dca580c2a14b55200e784d157207b4d&language=en-US&append_to_response=credits

// For search
// https://api.themoviedb.org/3/search/movie?api_key=2dca580c2a14b55200e784d157207b4d&query=Avenger?page=1
