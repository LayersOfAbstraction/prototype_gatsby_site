// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import {graphql} from 'gatsby'

// Step 2: Define your component
const BlogPage = ({data}) => {
  return (
    <Layout pageTitle={"My Blog Posts"}>
      {        
        data.allMdx.nodes.map(node => (
          <article key={node.id}>
            <h2>{node.frontmatter.title}</h2>
            <p>Posted: {node.frontmatter.date}</p>
          </article>   
        ))
      }
    </Layout>
  )
}

export const query = graphql`
query MyQuery {
  allMdx(sort: {fields: frontmatter___date, order: DESC}) {
    nodes {
      frontmatter {
        date(formatString: "MMMM D, YYYY")
        title
      }
      id
      body
    }
  }
}

`
// Step 3: Export your component
export default BlogPage