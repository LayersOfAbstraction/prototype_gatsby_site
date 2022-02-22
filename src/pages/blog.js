// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'

// Step 2: Define your component
function BlogPage() {
  return (
    <Layout pageTitle={"Blogs"}>
      <p>So you stumbled here eh? Good, I knew you were the type. Built with Gatsby.</p>
    </Layout>
  )
}
// Step 3: Export your component
export default BlogPage