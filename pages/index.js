// import styles from '@/styles/Home.module.css'
import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import Layout from "../components/Layout";
import Testimonials from "../components/Testimonials";

export default function Home() {
  const myStyle1 = {
    height: "0px",
  };
  return (
    <>
      <Layout title="Home Page">
        <section id="main">
          <div
            id="carouselExampleControls"
            class="carousel slide"
            data-bs-ride="carousel"
          >
            <div class="carousel-inner">
              <div class="carousel-item main1 active">
                <div class="container">
                  <div class="row">
                    <div class="col-sm-6">
                      <div class="casino-para">
                        <h3>
                          Get One on One Resume <br /> Critique Over Phones
                        </h3>
                        <ul>
                          <li>90 Day Interview Guarantee</li>
                          <li>Three Business Day Turnaround</li>
                          <li>100% Satisfaction Guarantee</li>
                        </ul>
                        <div class="learn">
                          <Link href="/" legacyBehavior>
                            <a class="btn btn-success">Learn more</a>
                          </Link>{" "}
                          <Link href="/" legacyBehavior>
                            <a class="btn btn-outline-success">
                              Get Free Resume
                            </a>
                          </Link>{" "}
                        </div>
                      </div>
                    </div>
                    <div class="col-sm-6"></div>
                  </div>
                </div>
              </div>
              <div class="carousel-item main2">
                <div class="container">
                  <div class="row">
                    <div class="col-sm-6">
                      <div class="casino-para">
                        <h3>
                          We'll Take care of your <br /> Resume & CV
                        </h3>
                        <ul>
                          <li>90 Day Interview Guarantee</li>
                          <li>Three Business Day Turnaround</li>
                          <li>100% Satisfaction Guarantee</li>
                        </ul>
                        <div class="learn">
                          <Link href="/" legacyBehavior>
                            <a class="btn btn-success">Learn more</a>
                          </Link>{" "}
                          <Link href="/" legacyBehavior>
                            <a class="btn btn-outline-success">
                              Get Free Resume
                            </a>
                          </Link>{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="carousel-item main3">
                <div class="container">
                  <div class="row">
                    <div class="col-sm-6"></div>
                    <div class="col-sm-6">
                      <div class="casino-para">
                        <h3>
                          ATS Complaints <br /> Resume
                        </h3>
                        <ul>
                          <li>90 Day Interview Guarantee</li>
                          <li>Three Business Day Turnaround</li>
                          <li>100% Satisfaction Guarantee</li>
                        </ul>
                        <div class="learn">
                          <Link href="/" legacyBehavior>
                            <a class="btn btn-success">Learn more</a>
                          </Link>{" "}
                          <Link href="/" legacyBehavior>
                            <a class="btn btn-outline-success">
                              Get Free Resume
                            </a>
                          </Link>{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </section>
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
                      <span>Resume Writing</span>
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
                      <span>Professional Letters</span>
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
                      <span>Linkedin Makeover</span>
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
                      <span>Interview Preparation</span>
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
                    <div class="row no-gutters">
                      <div class="col-md-6">
                        <div class="ps-5">
                          <img
                            src="/images/RESUME-WRITINGIlllustrator.png"
                            class="card-img w-50"
                            alt="..."
                          />
                        </div>
                      </div>
                      <div class="col-md-6 pe-5">
                        <div class="card-body pt-5">
                          <h4 class="card-title">Resume Writing</h4>
                          <p class="card-text">
                            We work systematically to integrate corporate
                            responsibility in our core business and make our
                            expertise available for the benefit of the societies
                            where we operate.
                          </p>
                          <p>
                            A successful website obviously needs great design to
                            be one of the top 10 IT companies in India, but the
                            web design is not enough.
                          </p>
                          <p class="card-text pt-3">
                            <Link href="/services/resume" legacyBehavior>
                              <a class="btn btn-outline-success">Get Service</a>
                            </Link>{" "}
                          </p>
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
                    <div class="row no-gutters">
                      <div class="col-md-6">
                        <div class="ps-5">
                          <img
                            src="/images/ProfessionalLetterIllustration.png"
                            class="card-img w-50"
                            alt="..."
                          />
                        </div>
                      </div>
                      <div class="col-md-6 pe-5">
                        <div class="card-body pt-5">
                          <h4 class="card-title">Professional Letters</h4>
                          <p class="card-text">
                            We work systematically to integrate corporate
                            responsibility in our core business and make our
                            expertise available for the benefit of the societies
                            where we operate.
                          </p>
                          A successful website obviously needs great design to
                          be one of the top 10 IT companies in India, but the
                          web design is not enough.
                          <p class="card-text pt-3">
                            <Link href="/services/professional" legacyBehavior>
                              <a class="btn btn-outline-success">Get Service</a>
                            </Link>{" "}
                          </p>
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
                    <div class="row no-gutters">
                      <div class="col-md-6">
                        <div class="ps-5">
                          <img
                            src="/images/LinkedInMakeoverIllustration.png"
                            class="card-img w-50"
                            alt="..."
                          />
                        </div>
                      </div>
                      <div class="col-md-6 pe-5">
                        <div class="card-body pt-5">
                          <h4 class="card-title">Linkedin Makeover</h4>
                          <p class="card-text">
                            We work systematically to integrate corporate
                            responsibility in our core business and make our
                            expertise available for the benefit of the societies
                            where we operate.
                          </p>
                          <p>
                            A successful website obviously needs great design to
                            be one of the top 10 IT companies in India, but the
                            web design is not enough.
                          </p>
                          <p class="card-text pt-3">
                            <Link href="/services/linkedin" legacyBehavior>
                              <a class="btn btn-outline-success">Get Service</a>
                            </Link>{" "}
                          </p>
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
                    <div class="row no-gutters">
                      <div class="col-md-6">
                        <div class="ps-5">
                          <img
                            src="/images/InterviewPreparation.png"
                            class="card-img w-50"
                            alt="..."
                          />
                        </div>
                      </div>
                      <div class="col-md-6 pe-5">
                        <div class="card-body pt-5">
                          <h4 class="card-title">Interview Preperation</h4>
                          <p class="card-text">
                            We work systematically to integrate corporate
                            responsibility in our core business and make our
                            expertise available for the benefit of the societies
                            where we operate.
                          </p>
                          <p>
                            A successful website obviously needs great design to
                            be one of the top 10 IT companies in India, but the
                            web design is not enough.
                          </p>
                          <p class="card-text pt-3">
                            <Link href="/services/interview" legacyBehavior>
                              <a class="btn btn-outline-success">Get Service</a>
                            </Link>{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="upload">
          <div class="container">
            <div class="row">
              <div class="col-sm-8">
                <div class="upload-text">
                  <h3>
                    Upload Your Resume For a<br />
                    Free Resume Review.
                  </h3>
                  <p>
                    One of our experts will critique your resume on
                    <br />
                    keywords, design, and its ability to pass ATS.
                  </p>
                </div>
              </div>
              <div class="col-sm-4">
                <div class="card-dot">
                  <img src="/images/Upload.png" alt="" width="52%" />
                  <a class="btn btn-outline-success text-white mt-4">
                    UPLOAD YOUR FILE
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="ATS">
          <div class="container">
            <div class="row">
              <div class="col-sm-7">
                <div class="">
                  <img src="/images/Illustration.png" alt="" width="100%" />
                </div>
              </div>
              <div class="col-sm-5">
                <div class="upload-text">
                  <h3>
                    We make sure your resume
                    <br />
                    won’t get lost in the ATS
                  </h3>
                  <h6 class="mt-3">Get a JOB in 60 Days</h6>
                  <p class="mt-4">
                    Only 1 in 4 job applicants will have <br />
                    their resumes read by an <br />
                    actual person.
                  </p>
                  <Link href="/" legacyBehavior>
                    <a class="btn btn-primary-custom">Order Now</a>
                  </Link>{" "}
                </div>
              </div>
            </div>
          </div>
        </section>
        <Testimonials />

        <section id="promo">
          <div class="container">
            <div class="row">
              <div class="col-sm-10 offset-sm-1">
                <div class="card">
                  <div class="row no-gutters">
                    <div class="col-md-6">
                      <img src="/images/Play.png" class="card-img" alt="..." />
                    </div>
                    <div class="col-md-6">
                      <div class="card-body pt-5">
                        <h4 class="card-title">Watch Our Promo Video</h4>
                        <p class="card-text">
                          There are many variations of passages of Lorem Ipsum
                          available, but the majority have suffered alteration
                          in some form. There are many variations of passages of
                          Lorem Ipsum available, but the majority have suffered
                          alteration in some form.
                        </p>
                        <p class="card-text pt-3">
                          <small class="text-muted">Watch the Video</small>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="knowledge">
          <div class="container">
            <div class="text-center">
              <h3>Knowledge Base</h3>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but
                <br />
                the majority have suffered alteration in some form.
              </p>
            </div>
            <div class="row">
              <div class="col-sm-4">
                <div class="card border-0 shadow">
                  <img
                    src="/images/Group309.png"
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body">
                    <Link href="/" legacyBehavior>
                      <a class="btn btn-primary my-4">Invoices</a>
                    </Link>{" "}
                    <h5 class="card-title">
                      Daily Task & Ongoing Project Management
                    </h5>
                  </div>
                </div>
              </div>
              <div class="col-sm-4">
                <div class="card border-0 shadow">
                  <img
                    src="/images/Group309.png"
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body">
                    <Link href="/" legacyBehavior>
                      <a class="btn btn-success my-4">Reports</a>
                    </Link>{" "}
                    <h5 class="card-title">
                      Daily Task & Ongoing Project Management
                    </h5>
                  </div>
                </div>
              </div>
              <div class="col-sm-4">
                <div class="card border-0 shadow">
                  <img
                    src="/images/Group309.png"
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body">
                    <Link href="/" legacyBehavior>
                      <a class="btn btn-danger my-4">Payroll</a>
                    </Link>{" "}
                    <h5 class="card-title">
                      Daily Task & Ongoing Project Management
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="refer">
          <div class="container">
            <div class="row">
              <div class="col-sm-6">
                <h3 class="pt-3">Refer a Friends</h3>
                <h3>
                  <span> Get a Free Cover Letter</span>
                </h3>
                <p class="mt-4">
                  One of our experts will critique your resume on
                  <br />
                  keywords, design, and its ability to pass ATS.
                </p>
                <label for="exampleFormControlInput1" class="form-label mt-4">
                  Email address required
                </label>
                <div class="input-group w-75">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter Email"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                  />
                  <span class="input-group-text" id="basic-addon2">
                    Send Invite
                  </span>
                </div>
              </div>
              <div class="col-sm-6">
                <div class="">
                  <img
                    src="/images/Illustration2.png"
                    class="card-img-top"
                    alt="..."
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="latest-media">
          <div class="container">
            <div class="text-center">
              <h3>Our Latest Media</h3>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but
                <br />
                the majority have suffered alteration in some form.
              </p>
            </div>
            <div class="row pt-3">
              <div class="col-sm-4">
                <div class="card">
                  <img
                    src="/images/Group309.png"
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body">
                    <p class="card-text">
                      <small class="text-muted">
                        <i class="fas fa-clock"></i> Sep 20,2023
                      </small>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <small class="text-muted">
                        <i class="fas fa-file"></i> Reseller Hosting
                      </small>
                    </p>
                    <h5 class="card-title">
                      Twice profit than before you ever got in business
                    </h5>
                    <p class="card-text">
                      For the incapable bliss of present souls like mine. I am
                      so…
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-sm-4">
                <div class="card">
                  <img
                    src="/images/Group309.png"
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body">
                    <p class="card-text">
                      <small class="text-muted">
                        <i class="fas fa-clock"></i> Sep 20,2023
                      </small>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <small class="text-muted">
                        <i class="fas fa-file"></i> Reseller Hosting
                      </small>
                    </p>
                    <h5 class="card-title">
                      Twice profit than before you ever got in business
                    </h5>
                    <p class="card-text">
                      For the incapable bliss of present souls like mine. I am
                      so…
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-sm-4">
                <div class="card">
                  <img
                    src="/images/Group309.png"
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body">
                    <p class="card-text">
                      <small class="text-muted">
                        <i class="fas fa-clock"></i> Sep 20,2023
                      </small>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <small class="text-muted">
                        <i class="fas fa-file"></i> Reseller Hosting
                      </small>
                    </p>
                    <h5 class="card-title">
                      Twice profit than before you ever got in business
                    </h5>
                    <p class="card-text">
                      For the incapable bliss of present souls like mine. I am
                      so…
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
