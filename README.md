# MDG Site

This is the MDG company site, deployed to [meteor.io](https://www.meteor.io/) via [Netlify](https://www.netlify.com/). Anything pushed to the `netlify` branch will be automatically deployed via Netlify's continuous deployment.

If you'd like access to the Netlify deploy configuration, please contact [@stubailo](https://github.com/stubailo), [@daniman](https://github.com/daniman), or [@n1mmy](https://github.com/n1mmy).

## Run the site

We're using our static site generator `maw` ([make a website](https://github.com/meteor/website-tool)) to support Less, Handlebars, and hot reloading. If you're looking to add new files/pages, visit this repo to read more about `maw`.

To run the site:

```
npm install
npm start
```

This will watch the /src directory, and put the output in /build whenever a file changes, plus automatically reload your browser.

For deployment, run `maw build` to build the site and put the output in the /build directory.
