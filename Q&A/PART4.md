- How do you get data into the data layer?

First we need to understand what is the data layer in Gatsby. It is an API query manipulation language built in GraphQL. 

It's like SQL for the front-end but the syntax is completely different and has absolutely nothing to do with databases. It pulls data into our Gatsby site from different sources where it lives. 

It could exist in a folder, a CMS, a database. It could come from many backend sources.

It helps keep your blogs modular and attach them to what ever server side hosting platforms out there. 

Your client might have the data from their business about Sporting equipment hosted say on Shopify. 

Let's say they have partnered with a much larger entity who may be hosting a database on a Mysql database on AWS. 

Rather than the large entity having to port their database over to their partner's shopify website or vise versa. 

We can keep the data modular by simply pulling the information from those 2 different systems into our data layer.

- How can you see what data is in the data layer?

GraphiQL can help you do this and allows you to explore your site data by using the GraphiQL query explorer window to generate GraphQL queries in the query writer window and output them in the Run window. 

You can see all of this after you run your site and use this URL with the 3 underscores then ___graphql.

http://localhost:<portal number here>/___graphql

- How do you get data out of the data layer?

GraphQL frontend generated queries can do this. So when you go to
http://localhost:8000/___graphql for example you can generate the queries as you navigating inside the Explorer window.

- What are the differences between a page query and useStaticQuery? How would you decide which one to use?
