// const hello = "Hello";
// const log = {...hello.split('')}
// console.log(log);

// const hello = "Hello";
// const log = [...hello.split('')];
// console.log(log);

// Promise
function getData()
{
	console.log('elephant')
	const p = new Promise((resolve) => {
		console.log('giraffe')
		resolve('lion')
		console.log('zebra')
	})
	console.log('Koala');
	return p;
}

async function main()
{
	console.log('cat')
	const result = await getData()
	console.log(result)
}

main().then(() => console.log('moose'))

