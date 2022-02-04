import {
  addMovie,
  deleteMovie,
  getMovie,
  getMovies,
  getSuggestions,
} from "./db";

// const resolvers = {
//   Query: {
//     //https://graphql.org/learn/execution/#root-fields-resolvers
//     movies: () => getMovies(),
//     movie: (_, { id }) => getMovies(id),
//   },
//   Mutation: {
//     addMovie: (_, { name, score }) => addMovie(name, score),
//     deleteMovie: (_, { id }) => deleteMovie(id),
//   },
// };

const resolvers = {
  Query: {
    movies: (_, { rating, limit }) => getMovies(limit, rating),
    movie: (_, { id }) => getMovie(id),
    suggestions: (_, { id }) => getSuggestions(id),
  },
};

export default resolvers;
