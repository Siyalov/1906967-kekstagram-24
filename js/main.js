   
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
