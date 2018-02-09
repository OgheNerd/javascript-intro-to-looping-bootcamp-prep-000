function forLoop(array) {
  for (let i=0; i < 25; i++) {
    array.push(`I am ${i} strange loop${i <= 1 ? '' : 's'}.`);

  }
  return array
}

function whileLoop() {
	let n = 100;

    while(n > 0) {
    	console.log(--n)
    }
}
