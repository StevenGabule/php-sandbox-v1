'use strict';


const flights = ['Russia', 'London',  'India', 'Php', 'London', 'Russia'];
const setFlights = new Set(flights);
console.log(setFlights)
console.log(setFlights.size)
console.log(setFlights.has('London'))
setFlights.add('Paris')
setFlights.delete('Russia')
console.log(setFlights);
for (const flight of setFlights) {
	console.log(flight)
}

console.log([...setFlights])
console.log(setFlights.values())
console.log(setFlights.entries())

