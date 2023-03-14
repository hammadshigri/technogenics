import React from "react";
import Layout from "../../components/Layout";

function stepThree() {
  return (
    <Layout title="Payment">
      <section id="payment">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-sm-6">
              <h4 class="d-inline-block me-4 blue">Place order</h4>
              <div class="form-header mb-4rem d-inline-block align-middle">
                <span class="stepIndicator">Select Service</span>
                <span class="stepIndicator">Additional info</span>
                <span class="stepIndicator">Check out</span>
              </div>
              <div class="card">
                <div class="card-header">
                  <h5>Select a Service</h5>
                </div>
                <form class="pay-block">
                  <div class="row">
                    <div class="col-12">
                      <label for="inputAddress" class="form-label">
                        Billing Address
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="inputAddress"
                        placeholder="Billing Address"
                      />
                    </div>
                  </div>
                  <div class="row mt-2">
                    <div class="col-6">
                      <label for="inputAddress" class="form-label">
                        Country
                      </label>
                      <select
                        class="form-select"
                        aria-label="Default select example"
                      >
                        <option selected>Select Country</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                    <div class="col-6">
                      <label for="inputAddress" class="form-label">
                        State
                      </label>
                      <select
                        class="form-select"
                        aria-label="Default select example"
                      >
                        <option selected>Select State</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                  </div>
                  <div class="row mt-2">
                    <div class="col-6">
                      <label for="inputAddress" class="form-label">
                        City
                      </label>
                      <select
                        class="form-select"
                        aria-label="Default select example"
                      >
                        <option selected>Enter City</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                    <div class="col-6">
                      <label for="inputAddress" class="form-label">
                        Zip Code
                      </label>
                      <select
                        class="form-select"
                        aria-label="Default select example"
                      >
                        <option selected>Enter Zip code</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                  </div>
                  <div class="blue mt-3">
                    <h6>Order Sammary</h6>
                  </div>
                  <hr />
                  <div class="row">
                    <div class="col-12">
                      <label for="inputAddress" class="form-label">
                        Select Your Date
                      </label>
                      <select
                        class="form-select"
                        aria-label="Default select example"
                      >
                        <option selected>3 Bussiness Days</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                  </div>
                  <div class="row mt-2">
                    <div class="col-12">
                      <label for="inputAddress" class="form-label">
                        Service Select
                      </label>
                      <select
                        class="form-select"
                        aria-label="Default select example"
                      >
                        <option selected>Select Your Service</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label
                      for="exampleFormControlInput1"
                      class="form-label mt-2"
                    >
                      Addition Service
                    </label>
                    <div class="form-check mb-2">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label class="form-check-label" for="flexCheckDefault">
                        Career Coaching
                      </label>
                      <span class="right">USD 129.8</span>
                    </div>
                    <div class="form-check mb-2">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label class="form-check-label" for="flexCheckDefault">
                        Cover Letter
                      </label>
                      <span class="right">USD 129.8</span>
                    </div>
                  </div>
                  <div>
                    <h6 class="blue">Pay With</h6>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                      <label class="form-check-label" for="flexRadioDefault1">
                        Meezan Bank
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                      <label class="form-check-label" for="flexRadioDefault1">
                        Silk Bank
                      </label>
                    </div>
                  </div>
                </form>
              </div>
              <a href="" class="btn btn-secondary mt-4">
                Next
              </a>
            </div>
            <div class="col-sm-4">
              <div class="card">
                <div class="card-header">
                  <small>Your Purchase</small>
                  <span>
                    <a href="" class="btn btn-light">
                      change
                    </a>
                  </span>
                  <h5>Optimal</h5>
                </div>
                <div class="card-body">
                  <div class="form-check mb-2 ps-0">
                    <label class="form-check-label dark" for="flexCheckDefault">
                      Resume Writing
                    </label>
                    <span class="right">USD 129.8</span>
                  </div>
                  <hr />
                  <label class="form-check-label" for="flexCheckDefault">
                    Additional Service
                  </label>
                  <hr />
                  <div class="form-check mb-2  ps-0">
                    <label class="form-check-label dark" for="flexCheckDefault">
                      Total
                    </label>
                    <span class="right">USD 129.8</span>
                  </div>
                  <hr />
                  <label class="form-check-label" for="flexCheckDefault">
                    Have Promo code?
                  </label>
                  <hr />
                  <div class="form-check mb-2  ps-0">
                    <label class="form-check-label dark" for="flexCheckDefault">
                      Grand Total
                    </label>
                    <span class="right">USD 129.8</span>
                  </div>
                </div>
              </div>
              <div class="card mt-3">
                <div class="card-header pop">
                  <img src="/images/Icon-Bell.png" atl="" />
                </div>
                <div class="card-body px-5">
                  <div class="text-center">
                    <h6>Refer a friend through Social Media</h6>
                    <small>
                      I got a new job! I joined FGB after seeking advice for
                      quitting my job
                    </small>
                  </div>
                  <div class="row mt-3">
                    <div class="col-sm-6 text-center">
                      <img src="/images/fb-icon.png" />
                      <p class="social">Share on Facebook</p>
                    </div>
                    <div class="col-sm-6 text-center">
                      <img src="/images/twitter-icon.png" />
                      <p class="social">Share on Twitter</p>
                    </div>
                  </div>
                  <div class="row mt-3">
                    <div class="col-6 col-sm-6 text-center">
                      <img src="/images/watsapp-icon.png" />
                      <p class="social">Share on whatsapp</p>
                    </div>
                    <div class="col-6 col-sm-6 text-center">
                      <img src="/images/insta-icon.png" />
                      <p class="social">Share on Instagram</p>
                    </div>
                  </div>
                  <div class="row mt-3">
                    <div class="col-6 col-sm-6 text-center">
                      <img src="/images/email-icon.png" />
                      <p class="social">Share as Mail</p>
                    </div>
                    <div class="col-6 col-sm-6 text-center">
                      <img src="/images/link-icon.png" />
                      <p class="social">Copy Link</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default stepThree;
