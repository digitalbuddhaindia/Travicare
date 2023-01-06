import React from "react";
import "./blog.css";
import blogimg1 from "../assets/images/blogimg1.svg";
import blogimg2 from "../assets/images/blogimg2.svg";
import blogimg3 from "../assets/images/blogimg3.svg";

export default function Blog() {
  return (
    <div className="blog-container">
      <div className="blog-heading">
        <p className="blog-title">From the Blog</p>
        <p className="blog-title-caption">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley
        </p>
      </div>

      <div className="blogs">
        <div className="blog-cards">
          <img src={blogimg1} alt="" />
          <div className="blog-card-caption">
            <div className="blog-credits">
              <p>By : Jeffery Refer </p>
              <p>In : Retreats</p>
              <p>2022, Dec 25</p>
            </div>
            <p>
              Whether you’re in it for the programs or for the signature
              retreats,
            </p>
          </div>
        </div>

        <div className="blog-cards">
          <img src={blogimg2} alt="" />
          <div className="blog-card-caption">
            <div className="blog-credits">
              <p>By : Jeffery Refer </p>
              <p>In : Retreats</p>
              <p>2022, Dec 25</p>
            </div>
            <p>
              Deeply personalized and truly comprehensive, Amanzoe’s Individual
              Wellness Programs
            </p>
          </div>
        </div>

        <div className="blog-cards">
          <img src={blogimg3} alt="" />
          <div className="blog-card-caption">
            <div className="blog-credits">
              <p>By : Jeffery Refer</p>
              <p>In: Retreats</p>
              <p>2022, Dec 25</p>
            </div>
            <p>
              A complete and well-rounded wellness experience awaits you at
              Avaton Resort.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
