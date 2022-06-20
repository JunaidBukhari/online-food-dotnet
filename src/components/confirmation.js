import { Modal } from 'react-bootstrap';
const Confirmation = (props) => {
  return (
    <Modal show={props.show}>
      <div class="form-body container p-5">
        <div class="row">
          <div class="form-holder">
            <div class="form-content">
              <div class="form-items">
                <h3 className="mb-5">Delivery</h3>
                <form class="requires-validation ml-3" novalidate>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                      checked
                    />
                    <label class="form-check-label" for="flexRadioDefault1">
                      Cash On Delivery
                    </label>
                  </div>

                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="flexRadioDisabled"
                      id="flexRadioDisabled"
                      disabled
                    />
                    <label class="form-check-label" for="flexRadioDisabled">
                      Credit/Debit Card
                    </label>
                  </div>

                  <button
                    id="submit"
                    type="submit"
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
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default Confirmation;
