export const STAR_CLASS = "bxs-star";

export const HALF_STAR_CLASS = "bxs-star-half";

export const EMPTY_STAR_CLASS = "bx-star";

export const getStars = (rating) => {
  const stars = [];
  const isHalfRating = String(rating).includes(".");

  for (let i = 1; i <= 5; i++) {
    if (i <= Math.ceil(rating)) {
      if (i === Math.ceil(rating) && isHalfRating) {
        stars.push(HALF_STAR_CLASS);
      } else {
        stars.push(STAR_CLASS);
      }
    } else {
      stars.push(EMPTY_STAR_CLASS);
    }
  }
  return stars;
};
