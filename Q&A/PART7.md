---
title: "Dynamic images"
date: "2022-07-28"
published: false
---

- # When should you use the GatsbyImage component instead of the StaticImage component? #

Depends if the image source is going to be hardcoded or will alter to another every time we load it. 

- StaticImage: is for hardcoded images or from remote URL. Meaning it won't change. Sort of like a constant.

- GatsbyImage: We could think of this to the inverse of a constant so it would vary like a variable. So it would be for dynamic image sources that get passed as a property from the same blog template that we could reuse to render different blog posts with different dynamic images.
 