---
title: "Plugins"
date: "2022-07-28"
published: false
---

# Intro #

Here we will do a quick refresher for how to operate plugins.

1. What is the process for adding a plugin to your sie.

You must install the plugins using NPM and any dependency plugins in the it requires. The 3 major steps are to import the plugin at the top of your JS file, declare it inside your component and export it to the UI.

2. What is a transformer plugin? How do transformer plugins affect the data in the data layer?

It is a plugin that will convert nodes to the output of another. Sort of like how your site nodes get pushed to github and then from there to Gatsby Cloud. An example would be the ```gatsby-plugin-mdx``` plugin gets the input of .mdx files and changes them into MDX file nodes with different field sets for GraphQL accessibility. 

It won't change the original file nodes, just creates MDX file nodes based on the original file nodes. That's what it does to the data layer.

3. What is MDX? Why is it useful?

It's very similar to Markdown but allows Markdown and JSX to work alongside you text content.