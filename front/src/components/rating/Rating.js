import React, { useEffect, useState } from "react";
import { getStars } from "./";

export const Rating = ({ rating = 1 }) => {
  const [stars, setStars] = useState([]);
  const [score, setScore] = useState(rating);
  const [update, setUpdate] = useState(true);

  useEffect(() => setStars(getStars(rating)), [rating]);

  return (
    <div>
      {stars?.map((star, index) => (
        <i
          key={`star${index}`}
          className={`bx ${star} rating-star`}
          onClick={() => {
            setScore(index + 1);
            setUpdate(false);
          }}
          onMouseOver={() => {
            setStars(getStars(index + 1));
            setUpdate(true);
          }}
          onMouseLeave={() => update && setStars(getStars(score))}
        />
      ))}
    </div>
  );
};
