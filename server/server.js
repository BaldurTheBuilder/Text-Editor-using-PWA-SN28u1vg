const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('../client/dist'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require('./routes/htmlRoutes')(app);

app.listen(PORT, () => console.log(`Now listening on port: ${PORT}`));

// COMPLETED
// has client server folder structure

// IN PROGRESS
// `npm run start` in the root starts up the backend and serve the client

// TO DO
// When running the app, the JavaScript files can be seen as bundled using webpack
// Running webpack plugins generates an HTML file, service worker, and a manifest file
// App functions with next-gen Javascript
// IndexedDB creates a db storage when opening the app
// app content is saved with IndexedDB when submitted and clicking off the DOM window
// hard reloads on the app retrieve content from IndexedDB
// the Install button downloads the app as an icon on desktop
// app has a service worker using workbox
// WHEN I register a service worker I should have my static assets pre cached upon loading along with subsequent pages and static assets
// deployed to Heroku with proper build scripts for a webpack application
// Technical Criteria
    // Uses IndexedDB to create an object store and includes both GET and PUT methods
    // The application works without an internet connection
    // Automatically saves content inside the text editor when the DOM window is unfocused
    // Bundled with webpack
    // Create a service worker with workbox that Caches static assets
    // The application should use babel in order to use async / await
    // Application must have a generated manifest.json using the WebpackPwaManifest plug-in
    // Can be installed as a Progressive Web Application
    // Deployed to Heroku
