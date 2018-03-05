var request = require('request')
var cheerio = require('cheerio')

function getwhale(callback){

var url = 'https://xn--0ck4aw2h.gamewith.jp/bbs/matching/threads/show/256#bbs-form';
request(url, function(err, res, body) {

var $ = cheerio.load(body)
var whale = [];

$('body > .page-wrap > .wrapper > .main-wrap > .main-col-wrap> .c-box > .p-relative > .bbs-post > .bbs-post-body-block').each(function(){
whale.push($(this).text().split('\n'));
});

whale = whale.map(whale => ({
  stage: whale[2].trim().split('】')[1],
  code: whale[4].trim().split('】')[1],
}))

var message = whale.map(function(whale){
  return whale.stage + ' ' + whale.code;


    }).join('\n');
  callback(err,message);

});
}
getwhale(function(err, message){
  console.log(message);
});
