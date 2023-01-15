import RentedMovie from "../models/RentedMovies.js";
import User from "../models/User.js";

const RentedMoviesController = {};

RentedMoviesController.update = async (req, res) => {
  console.log(req.body);
  console.log("hola");

  try {
    const { id, title, user_id, poster_path, backdrop_path } = req.body;
    console.log(user_id);

    const newMovie = {
      id,
      title,
      user_id,
      poster_path,
      backdrop_path,
    };
    console.log(newMovie);
    const movieExists = await User.findOne({
      _id: user_id,
      "rented_movies.id": id,
    });
    if (movieExists) {
      return res.status(409).json({
        success: false,
        message: "Movie already rented",
      });
    }
    await User.findOneAndUpdate(
      { _id: user_id },
      {
        $push: { rented_movies: newMovie },
      }
    );

    return res.status(200).json({
      success: true,
      message: "Movie rented successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error renting movie",
      error: error?.message || error,
    });
  }
};

RentedMoviesController.deleteById = async (req, res) => {
  const id = req.params.id;
  const user_id = req.params.user_id;

  try {
    const deletedMovie = await User.findOneAndUpdate(
      { _id: user_id },
      {
        $pull: { rented_movies: { id } },
      }
    );
    if (!deletedMovie) {
      return res.status(404).json({
        success: false,
        message: "Movie not found",
      });
    }
    return res.status(200).json({
      success: true,
      message: "Movie deleted successfully",
      deletedMovie,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error deleting movie",
      error: error?.message || error,
    });
  }
};

RentedMoviesController.getAllMovies = async (req, res) => {
  const user_id = req.params.id;
  try {
    const movies = await User.find({ _id: user_id }, { rented_movies: 4 });
    console.log(user_id);
    return res.status(200).json({
      success: true,
      message: "Get all movies retrieved succsessfully",
      data: movies,
    });
  } catch (error) {
    console.log(error);
  }
};
export default RentedMoviesController;
