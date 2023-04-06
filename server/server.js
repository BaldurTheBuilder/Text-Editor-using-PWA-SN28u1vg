const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('../client/dist'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require('./routes/htmlRoutes')(app);

app.listen(PORT, () => console.log(`Now listening on port: ${PORT}`));




// WHEN I run `npm run start` from the root directory I find that my application should start up the backend and serve the client
// WHEN I run the text editor application from my terminal I find that my JavaScript files have been bundled using webpack
// WHEN I run my webpack plugins I find that I have a generated HTML file, service worker, and a manifest file
// WHEN I use next-gen JavaScript in my application I find that the text editor still functions in the browser without errors
// WHEN I open the text editor I find that IndexedDB has immediately created a database storage
// WHEN I enter content and subsequently click off of the DOM window I find that the content in the text editor has been saved with IndexedDB
// WHEN I reopen the text editor after closing it I find that the content in the text editor has been retrieved from our IndexedDB
// WHEN I click on the Install button I download my web application as an icon on my desktop
// WHEN I load my web application I should have a registered service worker using workbox
// WHEN I register a service worker I should have my static assets pre cached upon loading along with subsequent pages and static assets
// WHEN I deploy to Heroku I should have proper build scripts for a webpack application

// However, a couple of missing components in your SW.JS.
// The webpack.config.js files are getting in the way of some of the functionality we are expecting to see. 
// You are missing the code for the asset caching functionality after line 29 of your src-sw.js file, remember, you 
//   should be importing the StaleWhileRevalidate object at the top of your file to be available for use. 
// Lastly, make sure to complete putDb and getDb functions used to add and retrieve data to and from your database(js/database.js).
// look at the module and the mini project.