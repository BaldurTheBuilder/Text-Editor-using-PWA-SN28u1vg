const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('../client/dist'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require('./routes/htmlRoutes')(app);

app.listen(PORT, () => console.log(`Now listening on port: ${PORT}`));

// has client server folder structure
// `npm run start` in the root starts up the backend and serve the client
// When running the app, the JavaScript files can be seen as bundled using webpack
// Running webpack plugins generates an HTML file, service worker, and a manifest file

// WHEN I use next-gen JavaScript in my application I find that the text editor still functions in the browser without errors

// WHEN I open the text editor I find that IndexedDB has immediately created a database storage

// WHEN I enter content and subsequently click off of the DOM window I find that the content in the text editor has been saved with IndexedDB

// WHEN I reopen the text editor after closing it I find that the content in the text editor has been retrieved from our IndexedDB

// WHEN I click on the Install button I download my web application as an icon on my desktop

// WHEN I load my web application I should have a registered service worker using workbox

// WHEN I register a service worker I should have my static assets pre cached upon loading along with subsequent pages and static assets

// deployed to Heroku with proper build scripts for a webpack application