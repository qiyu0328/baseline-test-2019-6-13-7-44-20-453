'use strict';

function collectSameElements(collectionA, objectB) {
  let newArr = [];
  let newCollectionB = objectB.value;
  for (let i = 0; i < newCollectionB.length; i++) {
    for (let j = 0; j < collectionA.length; j++) {
      if(collectionA[j].key === newCollectionB[i]){
        newArr.push(collectionA[j].key );
      }
    }
  }

  let temp = newArr[1];
  newArr.splice(1,1);
  newArr.push(temp);
  return newArr;
}
