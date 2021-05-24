import * as React from "react"
import { Link, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = ({ data }) => {

  const { nodes } = data.allMarkdownRemark

  // console.log('nodes>>', nodes)
  return (
  <Layout>
    <Seo title="Home" />
    <h1>Hi people</h1>
    <StaticImage
      src="../images/gatsby-astronaut.png"
      width={300}
      placeholder="blurred"
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />
    <div className="posts">
      {nodes.map(post => {
        const { category, title, url, image } = post.frontmatter
        const img = getImage(image)
        // console.log('IMAGE', img)

        return (
          <div key={post.id} className='post'>
            <GatsbyImage image={img} alt={title} />
            <Link to={`/${category}/${url}`}>{title}</Link>
          </div>
        )
      })}
    </div>
    <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </p>
  </Layout>
)}

export default IndexPage


export const query = graphql`
  query MainPage {
    allMarkdownRemark {
      nodes {
        frontmatter {
          category
          title
          url
          image {
            childImageSharp {
              gatsbyImageData(width: 200, placeholder: BLURRED, formats: [AUTO, AVIF])
            }
          }
        }
        id
      }
    }
  }
`