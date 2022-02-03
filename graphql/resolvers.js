import { addMovie, deleteMovie, getMovies } from "./db";

const resolvers = {
  Query: {
    //https://graphql.org/learn/execution/#root-fields-resolvers
    movies: () => getMovies(),
    movie: (_, { id }) => getMovies(id),
  },
  Mutation: {
    addMovie: (_, { name, score }) => addMovie(name, score),
    deleteMovie: (_, { id }) => deleteMovie(id),
  },
};

export default resolvers;
