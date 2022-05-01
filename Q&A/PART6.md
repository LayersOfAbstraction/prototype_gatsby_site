---
title: "Plugins"
date: "2022-07-28"
published: false
---

- ## What is the File System Route API used for? ##

It is used to dynamically render HTML pages from a special template filename syntax bettween {} curly braces. It would be in this format  {nodeType.field}.js. and and example of that could look like `{mdx.slug}`. So we would generate for example a new page from each mdx node.

Lets look at a more useful example, so `{Animal.name} ` where Animal is the route of the API and name is just the property name so really we can think of it as a key value pair or property. And so in the url it could like `src/pages{Animal.name}.html`.

Before we use the File System Route API collection route we have to:

- Which type of nodes we want to create pages from.

- Which field e.g `name` property on that node to use in the route (the URL) for the pages.

- Create a new page component in our src/pages directory with curly brace syntax we mentioned earlier.

- ## What is the syntax for creating a new collection route? ##

As I said it is the filename in this syntax which will appear in this format in the URL for the collection route. `{nodePropertyType.propertyName}`

- ## What is a query variable?

Good question. It is what we define inside a GraphQL query which can pull the actual post contents from the data layer to render to the screen. 

Remember in the File System Route API the key value pair we mentioned in the file name in the curly braces?  

This is one such query. Notice the query variable is denoted with the dollar $ sign.

```js
export const query = graphql` 
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
      body
    }
  }  
`
```

- ## When can you use a query variable? ##

Can be used throughout the query we have declared it in. The prop can be used throughout our GraphQL page queries by using the the query variable. They can also be declared as key value pairs in the Query Variables window of the GraphiQL editor.  
