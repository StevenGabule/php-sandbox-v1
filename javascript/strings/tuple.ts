enum Sandwich {
	Hamburger,
	VeggieBurger,
	GrilledBurger,
	BLT
}

type SandwichOrder = [
	number,
	Sandwich,
	...string[]
];

const order1: SandwichOrder = [12.99, Sandwich.Hamburger, "Lettuce"];

function tail<T extends any[]>(arg: readonly [number, ...T]){
	const [_ignored, ...rest] = arg;
	return rest;
}

const orderWithoutTotal = tail(order1);

function returnArray<T extends any[]>(arg: T): T {
	return arg;
}

const arr: [Sandwich.Hamburger, "lettuce"] = [Sandwich.Hamburger, "lettuce"];
const result = returnArray(arr)

//  class property inference from constructors
class Color 
{
	red;
	green;
	blue;

	constructor(c: [number, number, number]) {
		this.red = c[0];
		this.green = c[1];
		this.blue = c[2];
	}
}

// template literal types
type Statistics = {
	[K in `${"median" | "mean"}Value`] ?: number; // map type
}
const stats: Statistics = {}
stats.meanValue = 1;
stats.medianValue = 2;

let winFns: Extract<keyof Window, `set${any}`> = "" as any;

// check index access
type Dict<T> = {[K: string]: T | undefined}
const d: Dict<string[]> = {}
const {rhubarb} = d;
if(rhubarb) {
	rhubarb.join(', ')
}

// The challenge - Data Collector
export interface DataEntity {
	id: string
}

export interface Movie extends DataEntity { director: string }
export interface Song extends DataEntity { singer: string }
export type DataEntityMap = {
	movie: Movie;
	song: Song
}

type DataStoreMethods = {
	[K in keyof DataEntityMap as `getAll${Capitalize<K>}s`]: () => DataEntityMap[K][]
} & {
	[K in keyof DataEntityMap as `get${Capitalize<K>}`]: (id: string) => DataEntityMap[K]
} & {
	[K in keyof DataEntityMap as `clear${Capitalize<K>}s`]: () => void
} & {
	[K in keyof DataEntityMap as `add${Capitalize<K>}`]: (arg: DataEntityMap[K]) => DataEntityMap[K]
}

function isDefined<T>(x: T | undefined) : x is T {
	return typeof x !== 'undefined';
}

export class DataStore implements DataStoreMethods {
	#data: {[K in keyof DataEntityMap]: Record<string, DataEntityMap[K]>} = {
		movie: {},
		song: {}
	}

	getAllSongs() {
		return Object.keys(this.#data.song).map((songKey) => this.#data.song[songKey])
	}

	getSong(songKey: string) {
		const song = this.#data.song[songKey];
		if (!song) throw new Error(`Could not find song with id ${songKey}`);
		return song;
	}

	clearSongs(): void {
		this.#data.song = {};
	}
	
	getAllMovies() {
		return Object.keys(this.#data.movie).map((MovieKey) => this.#data.movie[MovieKey])
	}

	getMovie(movieKey: string) {
		const movie = this.#data.movie[movieKey];
		if (!movie) throw new Error(`Could not find Movie with id ${movieKey}`);
		return movie;
	}

	clearMovies(): void {
		this.#data.movie = {};
	}

	addMovie(m: Movie) : Movie {
		this.#data.movie[m.id] = m;
		return m;
	}

	addSong(s: Song) : Song {
		this.#data.song[s.id] = s;
		return s;
	}
}