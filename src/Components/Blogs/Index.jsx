import React from "react";
import "./style.scss";
import Section from "../Shared/Section/Index";
import blog1 from "../../images/blog-thumb-1.jpg";
import blog2 from "../../images/blog-thumb-2.jpg";
import blog3 from "../../images/blog-thumb-3.jpg";
import BlogCrad from "./blog-card/Index";

const Blogs = () => {
  return (
    <Section id="blogs" title="Blogs & Articles" background="dark">
      <div className="blogs-content-wrapper">
        <BlogCrad
          user="John Doe"
          date="mar 8 2023"
          image={blog1}
          title="Quis Autem Vea Eum Iure Reprehendrit"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        />
        <BlogCrad
          user="John Doe"
          date="mar 8 2023"
          image={blog2}
          title="Quis Autem Vea Eum Iure Reprehendrit"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        />
        <BlogCrad
          user="John Doe"
          date="mar 8 2023"
          image={blog3}
          title="Quis Autem Vea Eum Iure Reprehendrit"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        />
      </div>
    </Section>
  );
};

export default Blogs;
