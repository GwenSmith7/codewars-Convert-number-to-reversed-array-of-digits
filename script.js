'use strict';

function digitize(n) {
  const newArr = Array.from(String(n), Number);
  newArr.reverse();
  console.log(newArr);
  return newArr;
}
