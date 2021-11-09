import express from "express";
import { inputValidator } from "../../util/middleware";
import { MoviesController } from "./movies.controller";
import { fetchMovieCharactersSchema } from "./movies.validator";

export const moviesRouter = express.Router();

moviesRouter.get("/", new MoviesController().fetchMoviesController);

moviesRouter.get("/:movieId/characters", inputValidator({query: fetchMovieCharactersSchema}), new MoviesController().fetchMoviesCharactersController);
