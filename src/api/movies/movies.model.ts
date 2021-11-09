import { model, Schema } from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

export const MovieCommentsSchema = new Schema(
  {
    movieId: String,
    episodeId: String,
    comment: String,
    userIPAddress: String,
    username: String
  },
  { timestamps: true }
);

MovieCommentsSchema.plugin(mongoosePaginate);

const MovieComment = model("movie-comments", MovieCommentsSchema);

export default MovieComment;