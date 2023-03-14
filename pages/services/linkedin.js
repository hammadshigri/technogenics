import React from "react";
import Layout from "../../components/Layout";
import Faqs from "../../components/Faqs";
import Link from "next/link";
import Pricing from "../../components/Pricing";
import Benefits from "../../components/Benefits";
function linkedin() {
  return (
    <Layout title="Linkedin">
      <div>
        <section id="backgroundlinkedin">
          {" "}
          <div class="card border-0 rounded shadow mt-5">
            <div class="carousel-item main19 active">
              <div class="container">
                <div class="row">
                  <div class="col-sm-6">
                    <div class="casino-para">
                      <h2>LinkedIn Profile Makeover</h2>
                      <p>
                        More than 92% of hirers use LinkedIn® to find employees.
                        It is therefore not surprising that over 300 million
                        people have become members of this excellent online
                        resource.
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
        <Benefits />
      </div>
      <div style={{ marginTop: "20px" }}>
        {" "}
        <Faqs />
      </div>
    </Layout>
  );
}

export default linkedin;
