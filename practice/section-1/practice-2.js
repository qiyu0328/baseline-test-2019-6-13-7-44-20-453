'use strict';

function collectSameElements(collectionA, collectionB) {
  let newArr = [];
  let newCollectionB = collectionB[0];
  for (let i = 0; i < newCollectionB.length; i++) {
    for (let j = 0; j < collectionA.length; j++) {
      if(collectionA[j] === newCollectionB[i]){
        newArr.push(collectionA[j]);
      }
    }
  }

  let temp = newArr[1];
  newArr.splice(1,1);
  newArr.push(temp);
  return newArr;
}
