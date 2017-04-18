'use strict';

// 1
function makeRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
function makeRandomAvatar() {
  return Math.floor(Math.random() * 8) + 1;
}
function makeRandomPrice() {
  return Math.floor(Math.random() * 1000000) + 1;
}
function makeRandomRooms() {
  return Math.floor(Math.random() * 5) + 1;
}
function makeRandomQuests() {
  return Math.floor(Math.random() * 3) + 1;
}
function makeRandomX() {
  return Math.floor(Math.random() * 900) + 300;
}
function makeRandomY() {
  return Math.floor(Math.random() * 100) + 500;
}

var titleArr = ['Большая уютная квартира', 'Маленькая неуютная квартира', 'Огромный прекрасный дворец', 'Маленький ужасный дворец', 'Красивый гостевой домик', 'Некрасивый негостеприимный домик', 'Уютное бунгало далеко от моря', 'Неуютное бунгало по колено в воде'];
var typeArr = ['flat', 'house', 'bungalo'];
var checkArr = ['12:00', '13:00', '14:00'];
var featuresArr = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];

var pinArr = [];
for (var i = 0; i < 8; i++) {
  var apartObj = {
    "author": {
      "avatar": ''
    },
    "offer": {
      "title": '',
      "address": '',
      "price": '',
      "type": '',
      "rooms": '',
      "guests": '',
      "checkin": '',
      "checkout": '',
      "features": '',
      "description": '',
      "photos": ''
    },
    "location": {
      "x": '',
      "y": ''
    }
  };
  apartObj.author.avatar = 'img/avatars/user0' + makeRandomAvatar() + '.png';
  apartObj.offer.title = makeRandom(titleArr);
  apartObj.offer.address = '{{location.x}}, {{location.y}}';
  apartObj.offer.price = makeRandomPrice();
  apartObj.offer.type = makeRandom(typeArr);
  apartObj.offer.rooms = makeRandomRooms();
  apartObj.offer.guests = makeRandomQuests();
  apartObj.offer.checkin = makeRandom(checkArr);
  apartObj.offer.checkout = makeRandom(checkArr);
  apartObj.offer.features = makeRandom(featuresArr);
  apartObj.offer.photos = [];
  apartObj.location.x = makeRandomX();
  apartObj.location.y = makeRandomY();
  pinArr.push(apartObj);
}


// 2
var tokyoPinMap = document.querySelector('.tokyo__pin-map');
var pinElement = document.createElement('div');
pinElement.className = 'pin';
tokyoPinMap.appendChild(pinElement);
pinElement.style.left = apartObj.location.x;
pinElement.style.top = apartObj.location.y;
pinElement.insertAdjacentHTML('afterbegin', '<img>');
var imgElement = pinElement.getElementsByTagName('img')[0];
imgElement.className = 'rounded';

imgElement.src = apartObj.author.avatar;
imgElement.width = '40';
imgElement.height = '40';

// 3
var fragment = document.createDocumentFragment();
var firstTokyo = document.querySelector(".tokyo__pin-map");

fragment.appendChild(pinElement);
firstTokyo.appendChild(fragment);

// 4
var similarLodgeTemplate = document.querySelector('#lodge-template').content;
var similarDialogPanelEl = document.querySelector('.dialog__panel');
var hotelElement = similarLodgeTemplate.cloneNode(true);

hotelElement.querySelector('.lodge__title').textContent = pinArr[0].offer.title;
hotelElement.querySelector('.lodge__address').textContent = pinArr[0].offer.address;
hotelElement.querySelector('.lodge__price').textContent = pinArr[0].offer.address + '&#x20bd;/ночь';
var offerTypeEl = pinArr[0].offer.type;
if (offerTypeEl === 'flat') {
  hotelElement.querySelector('.lodge__type').textContent = 'Квартира'
};
if (offerTypeEl === 'bungalo') {
  hotelElement.querySelector('.lodge__type').textContent = 'Бунгало';
}
if (offerTypeEl === 'house') {
  hotelElement.querySelector('.lodge__type').textContent = 'Дом';
}

hotelElement.querySelector('.lodge__rooms-and-guests').textContent = 'Для ' + pinArr[0].offer.guests + ' гостей в ' + pinArr[0].offer.rooms + ' комнатах';
hotelElement.querySelector('.lodge__checkin-time').textContent = 'Заезд после ' + pinArr[0].offer.checkin + ', выезд до ' + pinArr[0].offer.checkout;

var lodgeFeatEl = hotelElement.querySelector('.lodge__features');
lodgeFeatEl.textContent = '<span>pinArr[0].offer.features</span>';
lodgeFeatEl.classList = 'feature__image--' + featuresArr[0];
hotelElement.querySelector('.lodge__title').textContent = pinArr[0].offer.title;
similarDialogPanelEl.appendChild(hotelElement);

var dialogTitleEl = document.querySelector('.dialog__title');
dialogTitleEl.childNodes[0].src = apartObj.author.avatar;


