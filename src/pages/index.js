import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const config = require("../../data/SiteConfig");

const IndexPage = () => (
  <Layout>
    <SEO title={config.siteTitle} />
    <div>
      <h2>{config.siteTitle}</h2>
      <div className="flexed">
        <div>
          <img
            src={config.siteLogo}
            className="logo"
            alt={config.siteTitle}
          />
        </div>
        <div>
          <h3>Under Construction. Come back soon.</h3>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
