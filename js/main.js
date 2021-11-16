function getRandomInt(min, max) {
  if (min > max) 
    {
      alert('не правильный диапазон, отдаем число 0');
      return 0;
    }
  
  min = Math.ceil(min);
  max = Math.floor(max);
  
  return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
}

function checkMaxLenght(str, length) {
    if (str.length >= length) {
      return true;
      }
    return false;
}

let fotoInfo = {
  'id': 0, // foto name.jpg
  'comments': 0,
  'likes': 0, //15-200,
  'description': ''
};

let comments = {
  id: 0,
  avatar: 0, // img/avatar-{{случайное число от 1 до 6}}.svg
  message: '',
  name: '',
}

let arrUserComment = [];

function makeArray() {
  let i = 1;
  let arrFoto = [];
  let comments = ["Всё отлично!", "В целом всё неплохо. Но не всё.", "Когда вы делаете фотографию, хорошо бы убирать палец из кадра. ","Моя бабушка случайно чихнула","Я поскользнулся на банановой кожуре","Лица у людей на фотке перекошены"];
  let discr = ["пейзаж", "натюрмотр","портрет"];
  
  while (i < 26) { // выводит 0, затем 1, затем 2
    i++;    
    arrUserCommment = getRandomInt(0,5)
    arrFoto[i] = new fotoInfo(i,checkRandomComment(),getRandomInt(14,200),discr[getRandomInt(0,2)]);
    
    }
}


function checkRandomComment() {
  let comments = ["Всё отлично!", "В целом всё неплохо. Но не всё.", "Когда вы делаете фотографию, хорошо бы убирать палец из кадра. ","Моя бабушка случайно чихнула","Я поскользнулся на банановой кожуре","Лица у людей на фотке перекошены"];
  let name = ["Karl", "Pepe"];  
  let flag = true
  while(flag) {
    nameId = getRandomInt(0,1000)
    for (let i = 0; i < comments.length; i += 1) {
      if (comments[i].id == nameId){
         flag = true
        }
      }
    flag = false
  }
  newCommetn = new comments(nameId, getRandomInt(1,7), comments[getRandomInt(0,5)], name[getRandomInt(0,1)]);
  arrUserComment.push()
}
