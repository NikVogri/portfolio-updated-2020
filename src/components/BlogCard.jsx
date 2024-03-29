import React from "react"
import PropTypes from "prop-types"

import { Link } from "gatsby"

const BlogCard = ({ title, image, date, description, link, className }) => {
  return (
    <div
      className={`shadow-2xl rounded-lg overflow-hidden card hover:shadow-md transition-shadow duration-500 ${
        className ? className : ""
      }`}
    >
      <div className="card-image-container">
        <Link to={link}>
          <img src={image} alt="blog" />
        </Link>
      </div>
      <div className="card-info p-8">
        <Link to={link}>
          <p className="my-4 card-title hover:underline">{title}</p>
        </Link>
        <span className="mt-3 inline-block">{date}</span>
        <p className="my-12">{description}</p>
        <Link to={link}>&gt; Read More...</Link>
      </div>
    </div>
  )
}
BlogCard.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  className: PropTypes.string,
}

export default BlogCard
