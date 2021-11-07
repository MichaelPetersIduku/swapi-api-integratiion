import express from "express";
import { MoviesController } from "./movies.controller";

export const moviesRouter = express.Router();

moviesRouter.get("/", new MoviesController().fetchMoviesController);
