# MDG Site

This is the MDG company site, deployed to [meteor.io](https://www.meteor.io/) via [Netlify](https://www.netlify.com/). Anything pushed to the `netlify` branch will be automatically deployed via Netlify's continuous deployment.

If you'd like access to the Netlify deploy configuration, please contact [@stubailo](https://github.com/stubailo) or [@daniman](https://github.com/daniman).

## Run the site
We're using our static site generator `maw` ([make a website](https://github.com/meteor/website-tool)) to support Less, Handlebars, and hot reloading.


You need to have `maw` installed to run this site:
```
npm install --save-dev maw
```

While developing, run `maw dev` in the root of the project. This will watch the /src directory, and put the output in /build whenever a file changes

For deployment, run `maw build` to build the site and put the output in the /build directory.
