# Quote Crawl

Quote Crawl enables you to extract quotes from BrainyQuote and save them to CSVs.

## Basic Usage

- Clone the repo
- Create a `quotes/` folder inside of the quote-crawl folder
- Edit app.js. The two variables that are most important are `crawlCategories` and `pagestocrawl`. Add your desired quote categories to `crawlCategories` and change `pagestocrawl` to the amount of pages you want to crawl for each category.
- Open a terminal in the project directory and type `node app`

## Using crawler.js

**Basic Example**

    var crawler = require('./crawler.js')

    var bq = crawler.bq

    category_depth = 1

    crawler.scrapeCategory('business', category_depth, function(quoteList, cur_category){
        console.log("You just scraped the " + cur_category + " category. From that page, you extracted " + quoteList.length + " quotes.")
    })
