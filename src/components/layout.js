import React from "react"
import PropTypes from "prop-types"

import "./layout.css"

const config = require("../../data/SiteConfig");

const Layout = ({ children }) => {

  return (
    <>
      <div className="background-wrapper">
        <main>
          {children}
        </main>
        <footer>
          © {new Date().getFullYear()}{" "}{config.copyright}
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
