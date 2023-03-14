import React from "react";
import Layout from "../../components/Layout";
import Faqs from "../../components/Faqs";
import Pricing from "../../components/Pricing";
import Benefits from "../../components/Benefits";

import Link from "next/link";

function resume() {
  return (
    <Layout title="Resume">
      <div>
        <section id="backgroundResume">
          {" "}
          <div class="card border-0 rounded shadow mt-5">
            <div class="carousel-item main18 active">
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
                      <span>Standard Resume Writing</span>
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
                      <span>Federal Resume Writing</span>
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
                      <span>Military Resume</span>
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
                      <span>Academic CV</span>
                    </p>
                    <small>A brief overview of work.</small>
                  </button>
                </li>
                <li class="nav-item" role="presentation">
                  <button
                    class="nav-link"
                    id="personal-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#personal"
                    type="button"
                    role="tab"
                    aria-controls="personal"
                    aria-selected="false"
                  >
                    <img src="/images/Icon.png" width="40" />
                    <p>
                      <span>Personal Statement</span>
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
                    <div class="carousel-item main4 active">
                      <div class="container">
                        <div class="row">
                          <div class="col-sm-6">
                            <div class="casino-para">
                              <h2>Standard Resume</h2>
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
                  class="tab-pane fade"
                  id="professional"
                  role="tabpanel"
                  aria-labelledby="professional-tab"
                >
                  <div class="card border-0 rounded shadow mt-5">
                    <div class="carousel-item main5 active">
                      <div class="container">
                        <div class="row">
                          <div class="col-sm-6">
                            {" "}
                            <div class="casino-para">
                              <h2>Federal Resume Writing</h2>
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
                  class="tab-pane fade"
                  id="linkedin"
                  role="tabpanel"
                  aria-labelledby="linkedin-tab"
                >
                  <div class="card border-0 rounded shadow mt-5">
                    <div class="carousel-item main6 active">
                      <div class="container">
                        <div class="row">
                          <div class="col-sm-6">
                            {" "}
                            <div class="casino-para">
                              <h2>Military Resume</h2>
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
                  class="tab-pane fade"
                  id="interview"
                  role="tabpanel"
                  aria-labelledby="interview-tab"
                >
                  <div class="card border-0 rounded shadow mt-5">
                    <div class="carousel-item main7 active">
                      <div class="container">
                        <div class="row">
                          <div class="col-sm-6">
                            {" "}
                            <div class="casino-para">
                              <h2>Academic CV</h2>
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
                  id="personal"
                  role="tabpanel"
                  aria-labelledby="personal-tab"
                >
                  <div class="card border-0 rounded shadow mt-5">
                    <div class="carousel-item main8 active">
                      <div class="container">
                        <div class="row">
                          <div class="col-sm-6">
                            {" "}
                            <div class="casino-para">
                              <h2>Personal Statement</h2>
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

export default resume;
