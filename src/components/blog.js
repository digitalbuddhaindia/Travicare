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
          From the Blog
        </div>
          <div className="blog-paragraph">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy <br></br>text
            ever since the 1500s, when an unknown printer took a galley
          </div>
      </div>
      <div className="blog-images">
        <div className="blog-images-1">
          <img src={blogimg1} alt="" className="blog-logo" />
          <div className="blog-images-1-text">
            <div>By : Jeffery Refer </div>
            <div>In : Retreats</div>
            <div>2022, Dec 25</div>
          </div>
          <div className="blog-images-1-para">
            Whether you’re in it for the programs or for the signature retreats,
          </div>
        </div>
        <div className="blog-images-2">
          <img src={blogimg2} alt="" className="blog-logo2" />
          <div className="blog-images-2-text">
            <div>By : Jeffery Refer </div>
            <div>In : Retreats</div>
            <div>2022, Dec 25</div>
          </div>
          <div className="blog-images-2-para">
            Deeply personalized and truly comprehensive, Amanzoe’s Individual
            Wellness Programs
          </div>
        </div>
        <div className="blog-images-3">
          <img src={blogimg3} alt="" className="blog-logo3" />
          <div className="blog-images-3-text">
            <div>By : Jeffery Refer</div>
            <div>In: Retreats</div>
            <div>2022, Dec 25</div>
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