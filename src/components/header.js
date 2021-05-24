import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
// import { useStaticQuery, graphql } from "gatsby"


import gatsbyPng from '../images/gatsby-icon.png'

const Header = ({ siteTitle }) => {

  // const site = useStaticQuery(
  //   graphql`
  //     query {
  //       site {
  //         siteMetadata {
  //           title
  //           description
  //         }
  //       }
  //     }
  //   `
  // )
  // console.log(site)

  return (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {/* {siteTitle} */}
          <img src={gatsbyPng} alt="gatsby icon" width={20} />
        </Link>
      </h1>
    </div>
  </header>
  )}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
