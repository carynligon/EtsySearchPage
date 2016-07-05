var data = [];

var settings = {
  type: 'GET',
  dataType: 'jsonp',
  url: 'https://api.etsy.com/v2/listings/active.js?api_key=qkep34xjdfgad3ud0d1r0xlo&keywords=dogbowtie&includes=Images,Shop',
  success: function(response) {
    data = response.results;
    console.log(data);
    data.forEach(parseData);
  }
};

function parseData (item, i) {
  var $newDiv = $('<div class=item><a href="#"><img src="#" /><p class="title"></p><p class="shop-name"></p><p class="price"></p></a></div>');
  var $title = item.title;
  var $imgSrc = item.Images[0].url_170x135;
  var $shopName = item.Shop.shop_name;
  var $price = item.price;
  $('#container').append($newDiv);
  $newDiv.children('a').children('.title').text($title);
  $newDiv.children('a').children('.shop-name').text($shopName);
  $newDiv.children('a').children('.price').text($price);
  $newDiv.children('a').children('img').attr('src', $imgSrc);
  $newDiv.children('a').attr('href', item.url);
}

$.ajax(settings);
