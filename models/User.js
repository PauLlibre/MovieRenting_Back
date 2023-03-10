import { Schema, model } from "mongoose";
import { RentedMovieSchema } from "./RentedMovies.js";
const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      match: /.+\@.+\..+/,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
    role: {
      type: String,
      enum: ["user", "admin", "super_admin"],
      default: "user",
    },
    rented_movies: [RentedMovieSchema],
  },
  {
    timestamps: true,
  }
);

const User = model("User", UserSchema, "usersLog");

export default User;
