import Movie from "../models/Movies.js";

const MovieController = {};

MovieController.getAll = async (req, res) => {
  console.log("hola");
  try {
    const movies = await Movie.find();
    return res.status(200).json({
      success: true,
      message: "Get all movies retrieved succsessfully",
      data: movies,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error retrieving movies",
      error: error.message,
    });
  }
};

MovieController.getFilmById = async (req, res, id) => {
  try {
    const id = req.params.id;

    const movie = await Movie.findOne({ id: id });

    if (movie) {
      return res.status(200).json({
        success: true,
        message: "Get movie by id completed successfully",
        results: movie,
      });
    } else {
      return res.status(404).json({
        success: false,
        message: "Couldn't retrieve the data you are asking for",
      });
    }
  } catch (error) {
    console.log(error);
  }
};

export default MovieController;
