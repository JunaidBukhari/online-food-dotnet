import React from "react";

const RatingStars = (props) => {
  const { rating, setRating } = props;
  return (
    <span>
      <span style={{ color: "#FDCC0D" }}>
        <span>
          <i
            onClick={() => {
              setRating && setRating(1);
            }}
            className={
              rating >= 1
                ? "fas fa-star"
                : rating >= 0.5
                ? "fas fa-star-half-alt"
                : "far fa-star"
            }
          ></i>
        </span>
        <span>
          <i
            onClick={() => {
              setRating && setRating(2);
            }}
            className={
              rating - 1 >= 1
                ? "fas fa-star"
                : rating - 1 >= 0.5
                ? "fas fa-star-half-alt"
                : "far fa-star"
            }
          ></i>
        </span>
        <span>
          <i
            onClick={() => {
              setRating && setRating(3);
            }}
            className={
              rating - 2 >= 1
                ? "fas fa-star"
                : rating - 2 >= 0.5
                ? "fas fa-star-half-alt"
                : "far fa-star"
            }
          ></i>
        </span>
        <span>
          <i
            onClick={() => {
              setRating && setRating(4);
            }}
            className={
              rating - 3 >= 1
                ? "fas fa-star"
                : rating - 3 >= 0.5
                ? "fas fa-star-half-alt"
                : "far fa-star"
            }
          ></i>
        </span>
        <span>
          <i
            onClick={() => {
              setRating && setRating(5);
            }}
            className={
              rating - 4 >= 1
                ? "fas fa-star"
                : rating - 4 >= 0.5
                ? "fas fa-star-half-alt"
                : "far fa-star"
            }
          ></i>
        </span>
      </span>
    </span>
  );
};

export default RatingStars;
