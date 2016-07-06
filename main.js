var data = [];
var $searchSubmit = $('#search-submit');
var $userSearch = 'dogbowtie';
var $minPrice = 0;
var $maxPrice = 99999999999;
var $color;
var $category;

var settings = {
  type: 'GET',
  dataType: 'jsonp',
  url: 'https://api.etsy.com/v2/listings/active.js?api_key=qkep34xjdfgad3ud0d1r0xlo&keywords=' + $userSearch + '&min_price=' + $minPrice + '&max_price=' + $maxPrice + '&color_wiggle=2' + '&color_triplet=' + $color + '&category=' + $category +  '&includes=Images,Shop',
  success: function(response) {
    data = response.results;
    console.log(data);
    data.forEach(parseData);
  }
};

// creates the item divs
function parseData (item, i) {
  var $newDiv = $('<div class=item><a href="#"><img src="#" /><p class="title"></p><p class="shop-name"></p><p class="price"></p></a></div>');
  var $title = item.title;
  var $imgSrc = item.Images[0].url_170x135;
  var $shopName = item.Shop.shop_name;
  var $price = item.price;
  $('#container').append($newDiv);
  $newDiv.children('a').children('.title').text($title);
  $newDiv.children('a').children('.shop-name').text($shopName);
  $newDiv.children('a').children('.price').text('$' + $price);
  $newDiv.children('a').children('img').attr('src', $imgSrc);
  $newDiv.children('a').attr('href', item.url);
}

$.ajax(settings);

// when user hits Search button
$searchSubmit.click(search);

// if user hits enter while typing in searchbar
$('#searchbar').keypress(function(evt) {
  if (evt.which === 13) {
    search();
  }
});

// function which runs in the case of the above events
function search () {
  $userSearch = $('#searchbar').val();
  console.log('hi');
  if ($userSearch !== '') {
    settings.url = 'https://api.etsy.com/v2/listings/active.js?api_key=qkep34xjdfgad3ud0d1r0xlo&keywords=' + $userSearch + '&min_price=' + $minPrice + '&max_price=' + $maxPrice + '&color_wiggle=2' + '&color_triplet=' + $color + '&category=' + $category +  '&includes=Images,Shop';
    $('#container').empty();
    $.ajax(settings);
  }
}

$('#price-submit').click(priceRange);


function priceRange () {
  $minPrice = $('#low').val();
  $maxPrice = $('#high').val();
    settings.url = 'https://api.etsy.com/v2/listings/active.js?api_key=qkep34xjdfgad3ud0d1r0xlo&keywords=' + $userSearch + '&min_price=' + $minPrice + '&max_price=' + $maxPrice + '&color_wiggle=2' + '&color_triplet=' + $color + '&category=' + $category +  '&includes=Images,Shop';
    $('#container').empty();
    $.ajax(settings);
}

// Not working
var colorLi = document.querySelectorAll('.color-filter li');
colorLi.forEach(function(item, i) {
  item.addEventListener('click', function(evt) {
    if (evt.target === document.querySelector('#red')) {
      $color = 'FF0000';
    }
    else if (evt.target === document.querySelector('#orange')) {
      $color = 'FFA500';
    }
    else if (evt.target === document.querySelector('#yellow')) {
      $color = 'FFFF00';
    }
    else if (evt.target === document.querySelector('#green')) {
      $color = '008000';
    }
    else if (evt.target === document.querySelector('#blue')) {
      $color = '0000FF';
    }
    else if (evt.target === document.querySelector('#purple')) {
      $color = '800080';
    }
    else if (evt.target === document.querySelector('#black')) {
      $color = '000000';
    }
    else if (evt.target === document.querySelector('#white')) {
      $color = 'FFFFFF';
    }
    $('#container').empty();
    settings.url ='https://api.etsy.com/v2/listings/active.js?api_key=qkep34xjdfgad3ud0d1r0xlo&keywords=' + $userSearch + '&min_price=' + $minPrice + '&max_price=' + $maxPrice + '&color_wiggle=2' + '&color_triplet=' + $color + '&category=' + $category +  '&includes=Images,Shop';
    $.ajax(settings);
  });
});

  $('#giftcards').change(function () {
    if ($(this).is(':checked')) {
      $giftCards = true;
      settings.url = 'https://api.etsy.com/v2/listings/active.js?api_key=qkep34xjdfgad3ud0d1r0xlo&keywords=' + $userSearch + '&min_price=' + $minPrice + '&max_price=' + $maxPrice + '&color_wiggle=2' + '&color_triplet=' + $color + '&category=' + $category +  '&includes=Images,Shop';
      $('#container').empty();
      $.ajax(settings);
    }
  });
