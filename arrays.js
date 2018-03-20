var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(array, element){
  return [element, ...array];
}

function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element);
  return array;
}

function addElementToEndOfArray (array, element){
  return [...array, element];
}

function destructivelyAddElementToEndOfArray(array,element){
  array.push(element);
  return array;
}

function accessElementInArray(array, index){
  return array[index];
}

<<<<<<< HEAD
function destructivelyRemoveElementFromBeginningOfArray(array){
=======
function destructivelyRemoveElementfromBeginningOfArray(array){
>>>>>>> f3950a6905bce0213993bb4cbd3d64397845777c
  array.shift();
  return array;
  }

function removeElementFromBeginningOfArray(array){
  return array.slice(1);
}

function destructivelyRemoveElementFromEndOfArray(array){
<<<<<<< HEAD
  array.pop();
  return array;
}

function removeElementFromEndOfArray(array){
  return array.slice(0,array.length-1);
  
=======
  return array.pop();
>>>>>>> f3950a6905bce0213993bb4cbd3d64397845777c
}