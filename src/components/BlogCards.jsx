import React from "react"
import { StaticQuery, graphql } from "gatsby"

import Title from "./Title"
import Button from "./Button"
import BlogCard from "./BlogCard"
import PlaceholderImage from "../images/react_wallpaper.jpg"

import "../styles/sass/blog-cards.scss"
import "../styles/sass/card.scss"

const BlogCards = () => {
  return (
    <StaticQuery
      query={graphql`
        query MyQuery {
          allContentfulBlog(limit: 3) {
            edges {
              node {
                slug
                title
                excerpt {
                  excerpt
                }
                date(formatString: "DD.MM.YYYY")
                headingImage {
                  file {
                    url
                  }
                }
              }
            }
          }
        }
      `}
      render={({ allContentfulBlog: { edges } }) => (
        <section className="blog-cards" id="blog-cards">
          <Title title="Check out my blog" />
          <div className="grid md:grid-cols-3 gap-12">
            {edges.map(({ node }) => (
              <BlogCard
                title={node.title}
                image={node.headingImage.file.url}
                date={node.date}
                description={node.excerpt.excerpt}
                link={`/blog/${node.slug}`}
              />
            ))}
          </div>

          <div className="text-center button-container">
            <Button text="View All" link="/blog" />
          </div>
        </section>
      )}
    />
  )
}

export default BlogCards
