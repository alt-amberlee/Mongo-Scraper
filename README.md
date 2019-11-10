# Mongo-Scraper
This is a Node.js application that utilizes Cheerio and a MongoDB back-end to scrape and save NYT articles to a Bootstrap UI.

# Feature Overview
Scrape the New York Times homepage, then save and add notes to your favorite articles using this responsive application.

# Downloading This Application
To use this application:

1. Ensure that Node.js, npm, and MongoDB are installed on your machine. For instructions, see the Technologies Used section below.

2. Next, clone this repo to your local machine:
```
git clone git@github.com:alt-amberlee/Mongo-Scraper.git
```

3. Open the repo and execute the following in the bash terminal. Doing so should install the application's dependencies:
```
npm i
```
4. Run the application from the command line:
```
node server.js
```

# Technologies Used
- Node.js
- MongoDB

# NPM Packages
- express
- express-handlebars
- mongoose
- body-parser
- cheerio
- request