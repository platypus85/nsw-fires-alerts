# NSW Fires Alerts

This Angular 2 application retrieves and displays fires alerts in NSW parsing the feed from http://www.rfs.nsw.gov.au/news-and-media/stay-up-to-date/feeds and allows authenticated users to report new fires or possible fires emergencies. 

To work on this project:

* Run `npm install` inside the project folder to download all the dependencies. This only needs to be done once.
* Run `npm run build` to compile the TypeScript code in the `src` folder into ES5 code into the `app` folder.
* Run `npm run serve` to start a local development web server. You can now access the application at [localhost:8080](http://localhost:8080/).
* Run the following commands to keep the package.json dependencies up to date: (https://www.npmjs.com/package/npm-check-updates)
    `npm install -g npm-check-updates`
    `npm-check-updates -u`
    `npm install `