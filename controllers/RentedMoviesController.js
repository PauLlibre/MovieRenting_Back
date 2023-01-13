import RentedMovie from "../models/RentedMovies.js";

const RentedMoviesController = {};

RentedMoviesController.update = async (req, res) => {
  console.log(req.body);
  console.log("hola");

  try {
    const { id, title } = req.body;

    const newMovie = {
      id,
      title,
    };
    const existingMovie = await RentedMovie.findOne({ id });
    if (existingMovie) {
      return res.status(409).json({
        success: false,
        message: "Movie already rented",
      });
    }
    await RentedMovie.create(newMovie);

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

  try {
    const deletedMovie = await RentedMovie.findOneAndDelete({ id: id });
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

export default RentedMoviesController;
