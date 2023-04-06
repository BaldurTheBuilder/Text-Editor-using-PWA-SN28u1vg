const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('../client/dist'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require('./routes/htmlRoutes')(app);

app.listen(PORT, () => console.log(`Now listening on port: ${PORT}`));




// IN PROGRESS
// App functions with next-gen Javascript
// IndexedDB creates a db storage when opening the app
// app content is saved with IndexedDB when submitted and clicking off the DOM window
// Technical Criteria


// TO DO
// app has a service worker using workbox
// WHEN I register a service worker I should have my static assets pre cached upon loading along with subsequent pages and static assets
// hard reloads on the app retrieve content from IndexedDB
// the Install button downloads the app as an icon on desktop
// deployed to Heroku with proper build scripts for a webpack application
// Technical Criteria
    // Create a service worker with workbox that Caches static assets
    // Uses IndexedDB to create an object store and includes both GET and PUT methods
    // The application works without an internet connection
    // Automatically saves content inside the text editor when the DOM window is unfocused
    // Bundled with webpack
    // The application should use babel in order to use async / await
    // Application must have a generated manifest.json using the WebpackPwaManifest plug-in
    // Can be installed as a Progressive Web Application
    // Deployed to Heroku


// However, a couple of missing components in your SW.JS.
// The webpack.config.js files are getting in the way of some of the functionality we are expecting to see. 
// You are missing the code for the asset caching functionality after line 29 of your src-sw.js file, remember, you 
//   should be importing the StaleWhileRevalidate object at the top of your file to be available for use. 
// Lastly, make sure to complete putDb and getDb functions used to add and retrieve data to and from your database(js/database.js).
// look at the module and the mini project.