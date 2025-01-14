interface BackPack<T> {
	add: (obj: T) => void;
	get: () => T;
}

// This line is a shortcut to tell TypeScript there is a
// constant called `backpack`, and to not worry about where it came from.
declare const backpack: BackPack<string>

// object is a string, because we declared it above as the variable part of Backpack.
const object = backpack.get();

backpack.add('23');

type WindowStates = "open" | "closed" | "minimized";
type LockStates = "locked" | "unlocked";
type PositiveOddNumbersUnderTen = 1 | 3 | 5 | 7 | 9;

interface Point<T> {
	x: T;
	y: T;
}

function logPoint(p: Point<number>) {
	console.log(`${p.x}, ${p.y}`)
}

const point = { x: 12, y: 23 };
logPoint(point);

const point3 = { x: 12, y: 26, z: 89 };
logPoint(point3); // logs "12, 26"

const rect = { x: 33, y: 3, width: 30, height: 80 };
logPoint(rect); // logs "33, 3"

const color = { hex: "#187ABF" };
// logPoint(color);

class VirtualPoint {
	x: number;
	y: number;

	constructor(x: number, y: number) {
		this.x = x;
		this.y = y;
	}
}

const newVPoint: Point<number> = new VirtualPoint(13, 56);
logPoint(newVPoint);