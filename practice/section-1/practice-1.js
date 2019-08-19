'use strict';

function collectSameElements(collectionA, collectionB) {
  let newArr = [];
  for (let i = 0; i < collectionB.length; i++) {
    for (let j = 0; j < collectionA.length; j++) {
      if(collectionA[j] === collectionB[i]){
        newArr.push(collectionA[j]);
      }
    }
  }

  let temp = newArr[1];
  newArr.splice(1,1);
  newArr.push(temp);
  return newArr;
  }
