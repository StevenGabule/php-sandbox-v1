function washDish() {
	console.log('Washing dish');
	dryDish();
	console.log('Finished washing dish')
}

function dryDish() {
	console.log('Drying dish');
	storeDish()
	console.log('Finished drying dish.')
}

function storeDish() {
	console.log('Storing dish.')
}

washDish();