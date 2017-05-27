var request = require('request')
var cheerio = require('cheerio')

module.exports = {
    scrapeQuotes: function(urlList, callback, cur_category){
        var quoteList = []
        console.log('Beginning crawl of URL/s...');
        for(var i = 0; i < urlList.length; i++){
            console.log('    - Crawling page ' + i + ' of ' + urlList.length);
            request(urlList[i], function(error, response, html){
                if(!error){
                    var $ = cheerio.load(html)
                    $('#quotesList .bq_list_i').each(function(index){
                        var $quoteText = $(this).find('a.b-qt')
                        var $quoteAuthor = $(this).find('a.bq-aut')
                        quoteList.push({
                            quote: $quoteText.text(),
                            author: $quoteAuthor.text()
                        })
                    })
                    console.log('    - Finished a page');
                    callback(quoteList, cur_category)
                }else{
                    console.err(error)
                }
            })
        }
    },

    scrapeCategory: function(category, max=2, callback){
        console.log('Max pages set to '+max);
        var categoryQuotes = [];
        var urlList = []
        for(var i = 1; i <= max; i++){
            if(i == 1){
                urlList.push(this.bq('/quotes/topics/topic_'+category+'.html?SPvm=1&vm=l'))
            }else{
                urlList.push(this.bq('/quotes/topics/topic_'+category+i+'.html?SPvm=1&vm=l'))
            }
        }
        console.log(urlList)
        this.scrapeQuotes(urlList, callback, category)
    },

    bq: function(path){
        return 'https://www.brainyquote.com' + path
    }
}
