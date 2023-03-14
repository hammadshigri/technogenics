import React from "react";
import Layout from "../../components/Layout";
import Faqs from "../../components/Faqs";
import Link from "next/link";
import Pricing from "../../components/Pricing";
import Benefits from "../../components/Benefits";
function professional() {
  return (
    <Layout title="Professional">
      <div>
        <section id="backgroundProfessional">
          {" "}
          <div class="card border-0 rounded shadow mt-5">
            <div class="carousel-item main21 active">
              <div class="container">
                <div class="row">
                  <div class="col-sm-6">
                    <div class="casino-para">
                      <h2>PROFESSIONAL RESUME WRITING SERVICE</h2>
                      <p>
                        Our professionally written resumes have helped
                        1,000,000+ customers with their careers. Pick the best
                        package and grab your dream job now!
                      </p>
                      <div class="learn">
                        <Link href="/" legacyBehavior>
                          <a class="btn btn-success">Get Started</a>
                        </Link>{" "}
                        <Link href="/" legacyBehavior>
                          <a class="btn btn-outline-success">Make A Bundle</a>
                        </Link>{" "}
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Pricing />

        <section id="best-service">
          <div class="container">
            <div class="text-center">
              <h3>Knowledge Base</h3>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but <br />
                the majority have suffered alteration in some form.
              </p>
            </div>
            <div class="row">
              <ul class="nav nav-tabs" id="myTab" role="tablist">
                <li class="nav-item" role="presentation">
                  <button
                    class="nav-link active"
                    id="resume-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#resume"
                    type="button"
                    role="tab"
                    aria-controls="resume"
                    aria-selected="true"
                  >
                    <img src="/images/Icon.png" width="40" />
                    <p>
                      <span>Professional Cover Letter</span>
                    </p>
                    <small>A brief overview of work.</small>
                  </button>
                </li>
                <li class="nav-item" role="presentation">
                  <button
                    class="nav-link"
                    id="professional-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#professional"
                    type="button"
                    role="tab"
                    aria-controls="professional"
                    aria-selected="false"
                  >
                    <img src="/images/Icon.png" width="40" />
                    <p>
                      <span>Customized Thankyou Letters</span>
                    </p>
                    <small>A brief overview of work.</small>
                  </button>
                </li>
                <li class="nav-item" role="presentation">
                  <button
                    class="nav-link"
                    id="linkedin-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#linkedin"
                    type="button"
                    role="tab"
                    aria-controls="linkedin"
                    aria-selected="false"
                  >
                    <img src="/images/Icon.png" width="40" />
                    <p>
                      <span>Follow-up Letter</span>
                    </p>
                    <small>A brief overview of work.</small>
                  </button>
                </li>
                <li class="nav-item" role="presentation">
                  <button
                    class="nav-link"
                    id="interview-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#interview"
                    type="button"
                    role="tab"
                    aria-controls="interview"
                    aria-selected="false"
                  >
                    <img src="/images/Icon.png" width="40" />
                    <p>
                      <span>Salary Negotiation Letter </span>
                    </p>
                    <small>A brief overview of work.</small>
                  </button>
                </li>
                <li class="nav-item" role="presentation">
                  <button
                    class="nav-link"
                    id="networking-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#networking"
                    type="button"
                    role="tab"
                    aria-controls="networking"
                    aria-selected="false"
                  >
                    <img src="/images/Icon.png" width="40" />
                    <p>
                      <span>Networking Letter </span>
                    </p>
                    <small>A brief overview of work.</small>
                  </button>
                </li>
                <li class="nav-item" role="presentation">
                  <button
                    class="nav-link"
                    id="offer-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#offer"
                    type="button"
                    role="tab"
                    aria-controls="offer"
                    aria-selected="false"
                  >
                    <img src="/images/Icon.png" width="40" />
                    <p>
                      <span>Offer Letter </span>
                    </p>
                    <small>A brief overview of work.</small>
                  </button>
                </li>
                <li class="nav-item" role="presentation">
                  <button
                    class="nav-link"
                    id="military-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#military"
                    type="button"
                    role="tab"
                    aria-controls="military"
                    aria-selected="false"
                  >
                    <img src="/images/Icon.png" width="40" />
                    <p>
                      <span>Military-to-Civilian Transition Letter </span>
                    </p>
                    <small>A brief overview of work.</small>
                  </button>
                </li>
                <li class="nav-item" role="presentation">
                  <button
                    class="nav-link"
                    id="career-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#career"
                    type="button"
                    role="tab"
                    aria-controls="career"
                    aria-selected="false"
                  >
                    <img src="/images/Icon.png" width="40" />
                    <p>
                      <span>Career Transition Letter </span>
                    </p>
                    <small>A brief overview of work.</small>
                  </button>
                </li>
              </ul>
              <div class="tab-content" id="myTabContent">
                <div
                  class="tab-pane fade show active"
                  id="resume"
                  role="tabpanel"
                  aria-labelledby="resume-tab"
                >
                  <div class="card border-0 rounded shadow mt-5">
                    <div class="carousel-item main10 active">
                      <div class="container">
                        <div class="row">
                          <div class="col-sm-6">
                            {" "}
                            <div class="casino-para">
                              <h2>Professional Cover Letter </h2>
                              <p>
                                More than 92% of hirers use LinkedIn® to find
                                employees. It is therefore not surprising that
                                over 300 million people have become members of
                                this excellent online resource.
                              </p>
                              <div class="learn">
                                <Link href="/" legacyBehavior>
                                  <a class="btn btn-success">Get Started</a>
                                </Link>{" "}
                                <Link href="/" legacyBehavior>
                                  <a class="btn btn-outline-success">
                                    Make A Bundle
                                  </a>
                                </Link>{" "}
                              </div>
                            </div>
                          </div>
                          <div class="col-sm-6"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="tab-pane fade "
                  id="professional"
                  role="tabpanel"
                  aria-labelledby="professional-tab"
                >
                  <div class="card border-0 rounded shadow mt-5">
                    <div class="carousel-item main11 active">
                      <div class="container">
                        <div class="row">
                          <div class="col-sm-6">
                            {" "}
                            <div class="casino-para">
                              <h2>Customized Thankyou Letters </h2>
                              <p>
                                More than 92% of hirers use LinkedIn® to find
                                employees. It is therefore not surprising that
                                over 300 million people have become members of
                                this excellent online resource.
                              </p>
                              <div class="learn">
                                <Link href="/" legacyBehavior>
                                  <a class="btn btn-success">Get Started</a>
                                </Link>{" "}
                                <Link href="/" legacyBehavior>
                                  <a class="btn btn-outline-success">
                                    Make A Bundle
                                  </a>
                                </Link>{" "}
                              </div>
                            </div>
                          </div>
                          <div class="col-sm-6"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="tab-pane fade "
                  id="linkedin"
                  role="tabpanel"
                  aria-labelledby="linkedin-tab"
                >
                  <div class="card border-0 rounded shadow mt-5">
                    <div class="carousel-item main12 active">
                      <div class="container">
                        <div class="row">
                          <div class="col-sm-6">
                            {" "}
                            <div class="casino-para">
                              <h2>Follow-up Letter </h2>
                              <p>
                                More than 92% of hirers use LinkedIn® to find
                                employees. It is therefore not surprising that
                                over 300 million people have become members of
                                this excellent online resource.
                              </p>
                              <div class="learn">
                                <Link href="/" legacyBehavior>
                                  <a class="btn btn-success">Get Started</a>
                                </Link>{" "}
                                <Link href="/" legacyBehavior>
                                  <a class="btn btn-outline-success">
                                    Make A Bundle
                                  </a>
                                </Link>{" "}
                              </div>
                            </div>
                          </div>
                          <div class="col-sm-6"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="tab-pane fade "
                  id="interview"
                  role="tabpanel"
                  aria-labelledby="interview-tab"
                >
                  <div class="card border-0 rounded shadow mt-5">
                    <div class="carousel-item main13 active">
                      <div class="container">
                        <div class="row">
                          <div class="col-sm-6">
                            {" "}
                            <div class="casino-para">
                              <h2>Salary Negotiation Letter </h2>
                              <p>
                                More than 92% of hirers use LinkedIn® to find
                                employees. It is therefore not surprising that
                                over 300 million people have become members of
                                this excellent online resource.
                              </p>
                              <div class="learn">
                                <Link href="/" legacyBehavior>
                                  <a class="btn btn-success">Get Started</a>
                                </Link>{" "}
                                <Link href="/" legacyBehavior>
                                  <a class="btn btn-outline-success">
                                    Make A Bundle
                                  </a>
                                </Link>{" "}
                              </div>
                            </div>
                          </div>
                          <div class="col-sm-6"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="tab-pane fade "
                  id="networking"
                  role="tabpanel"
                  aria-labelledby="networking-tab"
                >
                  <div class="card border-0 rounded shadow mt-5">
                    <div class="carousel-item main14 active">
                      <div class="container">
                        <div class="row">
                          <div class="col-sm-6">
                            {" "}
                            <div class="casino-para">
                              <h2>Networking Letter </h2>
                              <p>
                                More than 92% of hirers use LinkedIn® to find
                                employees. It is therefore not surprising that
                                over 300 million people have become members of
                                this excellent online resource.
                              </p>
                              <div class="learn">
                                <Link href="/" legacyBehavior>
                                  <a class="btn btn-success">Get Started</a>
                                </Link>{" "}
                                <Link href="/" legacyBehavior>
                                  <a class="btn btn-outline-success">
                                    Make A Bundle
                                  </a>
                                </Link>{" "}
                              </div>
                            </div>
                          </div>
                          <div class="col-sm-6"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="tab-pane fade "
                  id="offer"
                  role="tabpanel"
                  aria-labelledby="offer-tab"
                >
                  <div class="card border-0 rounded shadow mt-5">
                    <div class="carousel-item main15 active">
                      <div class="container">
                        <div class="row">
                          <div class="col-sm-6">
                            {" "}
                            <div class="casino-para">
                              <h2>Offer Letter </h2>
                              <p>
                                More than 92% of hirers use LinkedIn® to find
                                employees. It is therefore not surprising that
                                over 300 million people have become members of
                                this excellent online resource.
                              </p>
                              <div class="learn">
                                <Link href="/" legacyBehavior>
                                  <a class="btn btn-success">Get Started</a>
                                </Link>{" "}
                                <Link href="/" legacyBehavior>
                                  <a class="btn btn-outline-success">
                                    Make A Bundle
                                  </a>
                                </Link>{" "}
                              </div>
                            </div>
                          </div>
                          <div class="col-sm-6"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="tab-pane fade "
                  id="military"
                  role="tabpanel"
                  aria-labelledby="military-tab"
                >
                  <div class="card border-0 rounded shadow mt-5">
                    <div class="carousel-item main16 active">
                      <div class="container">
                        <div class="row">
                          <div class="col-sm-6">
                            {" "}
                            <div class="casino-para">
                              <h2>Military To Civilian Letter </h2>
                              <p>
                                More than 92% of hirers use LinkedIn® to find
                                employees. It is therefore not surprising that
                                over 300 million people have become members of
                                this excellent online resource.
                              </p>
                              <div class="learn">
                                <Link href="/" legacyBehavior>
                                  <a class="btn btn-success">Get Started</a>
                                </Link>{" "}
                                <Link href="/" legacyBehavior>
                                  <a class="btn btn-outline-success">
                                    Make A Bundle
                                  </a>
                                </Link>{" "}
                              </div>
                            </div>
                          </div>
                          <div class="col-sm-6"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="tab-pane fade "
                  id="career"
                  role="tabpanel"
                  aria-labelledby="career-tab"
                >
                  <div class="card border-0 rounded shadow mt-5">
                    <div class="carousel-item main17 active">
                      <div class="container">
                        <div class="row">
                          <div class="col-sm-6">
                            {" "}
                            <div class="casino-para">
                              <h2>Career Transition Letter </h2>
                              <p>
                                More than 92% of hirers use LinkedIn® to find
                                employees. It is therefore not surprising that
                                over 300 million people have become members of
                                this excellent online resource.
                              </p>
                              <div class="learn">
                                <Link href="/" legacyBehavior>
                                  <a class="btn btn-success">Get Started</a>
                                </Link>{" "}
                                <Link href="/" legacyBehavior>
                                  <a class="btn btn-outline-success">
                                    Make A Bundle
                                  </a>
                                </Link>{" "}
                              </div>
                            </div>
                          </div>
                          <div class="col-sm-6"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Benefits />
        </section>
      </div>
      <Faqs />
    </Layout>
  );
}

export default professional;
