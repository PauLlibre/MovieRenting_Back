import { Schema, model } from "mongoose";

export const RentedMovieSchema = new Schema({
  id: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },

  versionKey: false,
});

const RentedMovie = model("RentedMovie", RentedMovieSchema);

export default RentedMovie;
