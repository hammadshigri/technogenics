import React from "react";
import Layout from "../components/Layout";
import Faqs from "../components/Faqs";
import Link from "next/link";
import Pricing from "../components/Pricing";
import Benefits from "../components/Benefits";
import Testimonials from "../components/Testimonials";

function pricing() {
  return (
    <Layout title="Professional">
      <div>
        <Pricing />
        <Benefits />
      </div>
      <div style={{ marginTop: "20px" }}>
        {" "}
        <Testimonials />
      </div>
      <div style={{ margin: "20px" }}>
        {" "}
        <Faqs />
      </div>{" "}
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
    </Layout>
  );
}

export default pricing;
