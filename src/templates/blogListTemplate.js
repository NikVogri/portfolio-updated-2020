import { graphql } from "gatsby"
import React, { useContext } from "react"

import SiteMetadata from "../components/SiteMetadata.jsx"
import BlogCard from "../components/BlogCard"
import BlogsAside from "../components/BlogsAside"

import { myContext } from "../Context/ThemeContext"

import Layout from "../layouts/Layout"

import bgFadeLight from "../images/shapes/bg-fade-light.svg"
import bgFadeDark from "../images/shapes/bg-fade-dark.svg"

import "../styles/sass/blog.scss"

const BlogPage = ({
  data: {
    allContentfulBlog: { nodes },
  },
}) => {
  const theme = useContext(myContext)

  return (
    <Layout>
      <SiteMetadata
        title="Blog | Nik Vogrinec"
        description="Check out my blogs on web development. I make a blog whenever I feel like it!"
      />
      <header className="blogs-header relative md:pt-20">
        <img
          src={theme.isDark ? bgFadeDark : bgFadeLight}
          alt="title background"
          className="blog-header-bg"
        />
        <h1>My Blog</h1>
        <p>
          Mostly whatever is on my mind mixed with web development tips and
          tricks.
        </p>
      </header>
      <hr />
      <section
        className="md:grid grid-cols-3 gap-20 mt-8 py-5"
        style={{
          height: nodes.length < 1 ? "calc(100vh - (75px + 85px + 284px))" : "",
        }}
      >
        <div className="col-span-2 w-full">
          {nodes.length < 1 && (
            <p className="no-found">No blogs found for this category...</p>
          )}
          {nodes.map(node => (
            <BlogCard
              key={node.slug}
              title={node.title}
              image={node.headingImage.file.url}
              date={node.date}
              description={node.excerpt.excerpt}
              link={`/blog/${node.slug}`}
              className="mb-10 card-big"
            />
          ))}
        </div>
        <BlogsAside />
      </section>
    </Layout>
  )
}

export const query = graphql`
  query BlogsByCategory($category: String!) {
    allContentfulBlog(filter: { tags: { eq: $category } }) {
      nodes {
        slug
        title
        excerpt {
          excerpt
        }
        date(formatString: "DD  MMMM, YYYY")
        headingImage {
          file {
            url
          }
        }
      }
    }
  }
`

export default BlogPage
