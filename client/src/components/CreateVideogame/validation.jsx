const validate = (input) => {
  let errors = {};
  
  if (!input.name )  {
    errors.name = "Videogame name is required";
  }
  if (!input.description) {
    errors.description = "Description is required";
  }
  if (!input.releaseDate) {
    errors.releaseDate = "Release date is required";
  }
  if (!input.rating) {
    errors.rating = "Rating is required";
  }
  if (input.rating < 0 || input.rating > 5) {
    errors.rating = "Rating must be between 0 and 5";
  }
  if (!input.image) {
    errors.image = "Image URL is required";
  }
  if (input.genres.length === 0) {
    errors.genres = "At least one genre is required";
  }
  if (input.platforms.length === 0) {
    errors.platforms = "At least one platform is required";
  }
  return errors;
};





export default validate;