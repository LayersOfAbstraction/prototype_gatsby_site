// Step 1: Import React
import * as React from "react"
import { Link } from 'gatsby'

// Step 2: Define your components
const IndexPage = () => {
  return (
    <main>
      <title>Home Page</title>
      <h1>Welcome</h1>
      <Link to="/about"></Link>
      <p>I'm making this by following the Gatsby Tutorial</p>
    </main>
  )
}

export default IndexPage