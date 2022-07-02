import { useState } from "react";
import { Modal } from "react-bootstrap";
import RatingStars from "./ratings";
const RateFood = (props) => {
  const [rating, setRating] = useState(0);
  return (
    <Modal show={props.show}>
      <div class="form-body container p-4">
        <div class="row">
          <div class="form-holder">
            <div class="form-content">
              <div className="d-flex justify-content-center">
                <h3 className="mb-5">Rate {props?.food?.name}</h3>
              </div>
              <div class="d-flex justify-content-center">
                <img src={props?.food?.image} width={300} />
              </div>
              <div
                style={{ fontSize: "50px" }}
                className="d-flex justify-content-center"
              >
                <span style={{ cursor: "pointer" }}>
                  <RatingStars rating={rating} setRating={setRating} />
                </span>
              </div>
              <div className="d-flex justify-content-center">
                <button
                  onClick={() =>
                    props.orderRating({ ...props.food, rating: rating })
                  }
                  id="submit"
                  class="btn btn-success mr-3 mt-5"
                >
                  Confirm
                </button>
                <span
                  onClick={() => {
                    props.setShow(false);
                  }}
                  class="btn btn-danger mt-5"
                >
                  Close
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default RateFood;
