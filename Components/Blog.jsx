import React from "react";
import { motion } from "framer-motion";

const Blog = () => {
  // Sample blog posts data with imageUrl property added
  const blogPosts = [
    {
      id: 1,
      title: "Introduction to Blockchain Technology",
      excerpt: "Learn about the basics of blockchain technology and its applications.",
      date: "April 10, 2024",
      link: "#",
      imageUrl: "/assets/images/team_img4.png", // Add the path to your image
    },
    {
      id: 2,
      title: "The Future of Cryptocurrencies",
      excerpt: "Explore the potential future developments in the world of cryptocurrencies.",
      date: "April 15, 2024",
      link: "#",
      imageUrl: "/assets/images/team_img5.png", // Add the path to your image
    },
    {
      id: 3,
      title: "Decentralized Finance (DeFi) Explained",
      excerpt: "Discover how decentralized finance is revolutionizing the financial industry.",
      date: "April 20, 2024",
      link: "#",
      imageUrl: "/assets/images/team_img5.png", // Add the path to your image
    },
  ];

  return (
    <section id="blog" className="small_pb">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-8 offset-lg-2 col-md-12 col-sm-12">
            <div className="title_default_light title_border text-center">
              <h4 className="animation" data-animation="fadeInUp" data-animation-delay="0.2s">
                Latest Blog Posts
              </h4>
              <p className="animation" data-animation="fadeInUp" data-animation-delay="0.4s">
                Check out our latest blog posts for valuable insights and updates.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          {blogPosts.map((post) => (
            <motion.div
              key={post.id}
              className="col-lg-4 col-md-6 col-sm-12"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="box_wrap text-center animation">
                <div className="card blog_card bg_light_dark">
                  <div className="card-body">
                    <h5 className="card-title">{post.title}</h5>
                    <img src={post.imageUrl} alt={post.title} className="img-fluid" />
                    <p className="card-text">{post.excerpt}</p>
                    <p className="card-text text-muted">{post.date}</p>
                    <a href={post.link} className="btn btn-default btn-radius">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
