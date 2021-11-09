import joi from "joi";

export const fetchMovieCharactersSchema = joi.object({
  sort: joi.string().valid("name", "gender", "height"),
  order: joi.string().valid("asc", "desc"),
  filter: joi.string().valid("male", "female", "n/a")
});