var jsonfile = require('jsonfile')
var crawler = require('./crawler.js')
var bq = crawler.bq

console.log('---------------------------------------------')
console.log('| Quote Crawl v.1.0                         |')
console.log('| Written by Doug Beney                     |')
console.log('| https://dougbeney.com                     |')
console.log('---------------------------------------------')
console.log('')

var masterList = []
var pagestocrawl = 10

crawlCategories([
    'business',
    'faith',
    'finance',
    'money',
    'art',
    'funny',
    'computers',
    'design',
    'intelligence',
    'government',
    'freedom',
    'happiness',
    'hope',
    'gardening',
    'failure',
    'history',
    'environmental',
    'diet',
    'teen',
    'thankful',
    'travel',
    'women',
    'work',
    'science',
    'romantic',
    'society',
    'religion',
    'fitness',
    'sports',
    'war',
    'famous',
    'life',
    'leadership',
    'dreams',
    'marriage',
    'strength',
])

function crawlCategories(categories){
    for(var i in categories){
        crawler.scrapeCategory(categories[i], pagestocrawl, function(quoteList, cur_category){
            for (var i in quoteList){
                masterList.push({
                    category: cur_category,
                    quote: quoteList[i].quote,
                    author: quoteList[i].author
                });
            }
            jsonfile.spaces = 4
            var tempList = []
            for(var i in masterList){
                if(masterList[i].category == cur_category){
                    tempList.push({
                        quote: masterList[i].quote,
                        author: masterList[i].author
                    });
                }
            }
            jsonfile.writeFile(
                './quotes/'+cur_category+'.json',
                tempList,
                function(err){
                    if(err){
                        console.error(err)
                    }
                }
            )
        })

    }
}
