---
title: "Understanding the Gatsby data layer"
date: "2022-02-27"
published: false
---

[//]: # (This is to do with Part 4 of Gatsby's tutorial)

**- How do you get data into the data layer?**

First we need to understand what is the data layer in Gatsby. It is an API query manipulation language built in GraphQL.  

It's like SQL for the front-end but the syntax is completely different and has absolutely nothing to do with databases. It pulls data into our Gatsby site from different sources where it lives.  

It could exist in a folder, a CMS, a database. It could come from many backend sources.

It helps keep your blogs modular and attach them to what ever server side hosting platforms out there.  

Your client might have the data from their business about Sporting equipment hosted say on Shopify.  

Let's say they have partnered with a much larger entity who may be hosting a database on a Mysql database on AWS.

Rather than the large entity having to port their database over to their partner's shopify website or vise versa.

We can keep the data modular by simply pulling the information from those 2 different systems into our data layer.

- **How can you see what data is in the data layer?**

GraphiQL can help you do this and allows you to explore your site data by using the GraphiQL query explorer window to generate GraphQL queries in the query writer window and output them in the Run window.

You can see all of this after you run your site with the same url and append 3 underscores then ___graphql to the end of the url. When you do that Gatsby creates a special endpoint that lets you use  in-browser GraphiQL tool. This is what the url can look like.

http://localhost:<portal number here>/___graphql

- **How do you get data out of the data layer?**

GraphQL frontend generated queries can do this. So when you go to
http://localhost:8000/___graphql for example you can generate the queries as you navigate inside the Explorer window.

So when getting data into the Gatsby data layer you use special types of backend plugins known as a source plugin from the plugin library. For example [this plugin](https://www.gatsbyjs.com/plugins/gatsby-source-shopify/?=shopify) connects your Shopify data source to gatsby.

So basically your GraphQL Data Layer acts as the intermediatory between the front end and the back-end.

To get data out of your data layer and to the front-end components you use use GraphQL queries inside those components, blog pages or header components.

Remember! Use the GraphiQL explorer to generate and test your queries that you can copy and paste into your components. Don't reinvent the wheel.

Ahh the power of using APIs... as opposed to staring at the screen figuring out how to write these queries from scratch.

(Note to self, use image of meme to show stressed out person before and relaxed after)

- **What are the differences between a page query and useStaticQuery? How would you decide which one to use?**

***useStaticQuery summary***

Ok let's say we generate a GraphQL query, run it, copy the output to our component to return the names of our blog pages.

```jsx
{
  "data": {
    "site": {
      "siteMetadata": {
        "title": "My First Gatsby Site"
      }
    }
  },
  "extensions": {}
}
```

we can use the generic Gatsby function  `useStaticQuery` to pull the
data into building block component from the query.

```jsx
const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
```

We can call the function once per a single file. Using it for multiple fields means we need to merge the queries together into the same component.

***Page Queries summary***

In page components you use page queries. To understand what page queries are we must understand that GraphQL page component queries are syntactically different from building block component queries.

Essentially page queries help us get data into our page components.

We can set it up like this in Gatsby.

```jsx
import * as React from 'react'

// Step 1: Import the graphql tag
import { graphql } from 'gatsby'

const HomePage = ({ data }) => {
  return (
    <p>
      { /* Step 3: Use the data in your component*/ }
      { data.site.siteMetadata.description }
    </p>
  )
}

// Step 2: Export a page query
export const query = graphql`
  query {
    site {
      siteMetadata {
        description
      }
    }
  }
`

export default HomePage
```

***So what's the difference?***

One query is for the page component and one is for a building block component.

Also you can define useStaticQuery in your building block component while page queries need to be applied externally to your page component.

You can just call them there. So you would use them depending on what the component you are trying to build.
