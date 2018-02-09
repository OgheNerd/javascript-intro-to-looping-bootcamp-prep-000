function forLoop(array) {
  for (let i=0; i < 25; i++) {
    array.push(`I am ${i} strange loop${i <= 1 ? '' : 's'}.`);

  }
  return array
}

function whileLoop(n) {
    while(n > 0) {
    	console.log(--n)
    }
    return (n === 0) ? 'done' : 'not done';
}

function doWhileLoop(array) {
  maybeTrue(){
    array.slice(0, 1);
  }

  do {
    console.log(array)
  } while (array.length > 0 && maybeTrue());
}
