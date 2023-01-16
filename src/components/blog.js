import React from "react";
import "./blog.css";
import blogimg1 from "../assets/images/blogimg1.svg";
import blogimg2 from "../assets/images/blogimg2.svg";
import blogimg3 from "../assets/images/blogimg3.svg";

export default function Blog() {
  return (
    <div className="blog-main">
      <div className="blog-text">
        <div className="from-the-blog">
          <p>From the Blog</p>
        </div>
        <div className="blog-description">
          <p className="blog-paragraph">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley
          </p>
        </div>
      </div>
      <div className="blog-images">
        <div className="blog-images-1">
          <img src={blogimg1} alt="" />
          <div className="blog-images-1-text">
            <p>By : Jeffery Refer </p>
            <p>In : Retreats</p>
            <p>2022, Dec 25</p>
          </div>
          <div className="blog-images-1-para">
            Whether you’re in it for the programs or for the signature retreats,
          </div>
        </div>
        <div className="blog-images-2">
          <img src={blogimg2} alt="" />
          <div className="blog-images-2-text">
            <p>By : Jeffery Refer </p>
            <p>In : Retreats</p>
            <p>2022, Dec 25</p>
          </div>
          <div className="blog-images-2-para">
            Deeply personalized and truly comprehensive, Amanzoe’s Individual
            Wellness Programs
          </div>
        </div>
        <div className="blog-images-3">
          <img src={blogimg3} alt="" />
          <div className="blog-images-3-text">
            <p>By : Jeffery Refer</p>
            <p>In: Retreats</p>
            <p>2022, Dec 25</p>
          </div>
          <div className="blog-images-3-para">
            A complete and well-rounded wellness experience awaits you at Avaton
            Resort.
          </div>
        </div>
      </div>
    </div>
  );
}