import React from "react";
import Layout from "../components/Layout";

function contactUs() {
  return (
    <Layout>
      <section id="about">
        <div class="container">
          <div class="row">
            <div class="col-sm-6 py-5">
              <h3>Contact Us</h3>
              <h6>Have Any Query? Reach out our team.</h6>
            </div>
            <div class="col-sm-6">
              <img src="/images/contactIllustrator.png" alt="" />
            </div>
          </div>
        </div>
      </section>
      <section id="doule-form">
        <div class="container">
          <div class="w-75 m-auto">
            <div class="row">
              <div class="col-sm-6 bg-silver border-round1  pe-0">
                <div class="sub-form">
                  <select
                    class="form-select"
                    aria-label="Default select example"
                  >
                    <option selected>Subject</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                  <div class="row mt-3">
                    <div class="col-12">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Enter Fullname"
                        aria-label="First name"
                      />
                    </div>
                  </div>
                  <div class="row mt-3">
                    <div class="col-12">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Enter Fullname"
                        aria-label="First name"
                      />
                    </div>
                  </div>
                  <div class="row mt-3">
                    <div class="col-12">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Enter Fullname"
                        aria-label="First name"
                      />
                    </div>
                  </div>
                  <div class="mt-3">
                    <textarea
                      class="form-control"
                      id="exampleFormControlTextarea1"
                      rows="3"
                    ></textarea>
                  </div>
                  <p class="mt-3">
                    We normally reply within 24 hours or less. If you haven’t
                    received an email, check your spam folder
                  </p>
                </div>
              </div>
              <div class="col-sm-6 bg-2 border-round call-card">
                <div>
                  <h5>
                    <i class="fas fa-phone"></i> Call Us On
                  </h5>
                  <p class="ft-big">(+92) 3XZ-YYYYYYY</p>
                  <p class="pra-silver">Mon - Fri , 9 am to 6 pm EST</p>
                  <hr />
                  <h5>
                    <i class="fas fa-envelope"></i> EMAIL US AT
                  </h5>
                  <p class="ft-big">For Customer Support</p>
                  <p class="pra-silver">support@careergenics.com</p>
                  <p class="ft-big">For Customer Support</p>
                  <p class="pra-silver">support@careergenics.com</p>
                  <p class="ft-big">For Customer Support</p>
                  <p class="pra-silver">support@careergenics.com</p>
                  <hr />
                  <h6>Contact With Us</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default contactUs;
