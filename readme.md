# Quote Crawl

Quote Crawl enables you to extract quotes from BrainyQuote and save them to CSVs.

## Basic Usage

- Clone the repo
- Create a `quotes/` folder inside of the quote-crawl folder
- Edit app.js. The two variables that are most important are `crawlCategories` and `pagestocrawl`. Add your desired quote categories to `crawlCategories` and change `pagestocrawl` to the amount of pages you want to crawl for each category.
- Open a terminal in the project directory and type `node app`

## Using crawler.js

**Basic Example**

```javascript
var crawler = require('./crawler.js')

//bq (stands for BrainyQuote) is an optional tool you can use to build BrainyQuote URLs.
var bq = crawler.bq

//Category depth is how many pages in each category you want to crawl. More category depth = more quotes
category_depth = 1

crawler.scrapeCategory('business', category_depth, function(quoteList, cur_category){
    //This callback method will be called multiple times for every single page that crawled
    console.log("You just scraped the " + cur_category + " category. From that page, you extracted " + quoteList.length + " quotes.")
})
```
