import { Schema, model } from "mongoose";

const MovieSchema = new Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  title: {
    type: String,
    required: true,
  },

  versionKey: false,
});

const Movie = model("Movie", MovieSchema);

export default Movie;
