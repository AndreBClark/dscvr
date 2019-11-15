import React from "react"

import SEO from "../components/seo"
import Base from "../components/Base"

const NotFoundPage = () => (
  <Base>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Base>
)

export default NotFoundPage
