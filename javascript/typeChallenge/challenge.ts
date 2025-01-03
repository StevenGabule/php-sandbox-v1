type Expect<T extends true> = T
type Equal<X, Y> = (<T>() => T extends X ? 1 : 2) extends (<T>() => T extends Y ? 1 : 2) ? true : false;

type NotEqual<X, Y> = true extends Equal<X, Y> ? false : true;

// type NotEqual<X, Y> = true extends Equal<X, Y> ? true :false;

type If<C, T, F> = C extends true ? T : F;
type LengthOfTuple<T> = T extends readonly any[] ? T['length'] : never;
type EndsWith<A extends string, B extends string> = A extends `${string}${B}` ? true : false;
type Concat<A extends any[], B extends any[]> = [...A, ...B]
type ReturnOf<F> = F extends {(...arg: any[]) : infer RT} ? RT : never;
type Split<S extends string, SEP extends string> = 
	S extends `${infer R}${SEP}${infer T}` ? [R, ...Split<T, SEP>] : S extends "" ? []: string extends S ? string[] : [S];
type IsTuple<T> = T extends readonly any[] ? [...T, any]['length'] extends T['length'] ? false : true : false;
type IndexOf<T extends any[], U, Acc extends any[] = []> = T[0] extends U ? Acc['length'] : T extends [infer F, ...infer Rest] ? IndexOf<Rest, U, [...Acc, F]> : -1;

let x: Split<'Hello world again', ' '>

const fruits = ["cherry", "banana"] as const;

const flipCoin = () => Math.random() > 0.5 ? "Heads" : "tails";
const rockPaperScissors = (arg: 1 | 2 | 3) => {
	return arg === 1 ? "rock" as const : arg === 2 ? ("paper" as const) : ("scissors" as const);
}

// tests
type cases = [
	Expect<Equal<If<true, "apple", "pear">, "apple">>,
	Expect<Equal<If<false, "orange", 42>, 42>>,

	Expect<Equal<LengthOfTuple<[1,2,3]>, 3>>,
	Expect<NotEqual<LengthOfTuple<[1,2,3]>, 2>>,
	Expect<Equal<LengthOfTuple<typeof fruits>, 2>>,
	Expect<Equal<LengthOfTuple<[]>, 0>>,

	Expect<Equal<EndsWith<"ice cream", "cream">, true>>,
	Expect<Equal<EndsWith<"ice cream", "chocolate">, false>>,

	Expect<Equal<Concat<[],[]>, []>>,
	Expect<Equal<Concat<[],["Hello"]>, ["Hello"]>>,
	Expect<Equal<Concat<[18, 19],[20, 21]>, [18,19,20,21]>>,
	Expect<Equal<Concat<[42, "a", "b"],[Promise<boolean>]>, [42, "a", "b", Promise<boolean>]>>,

	Expect<Equal<boolean, ReturnOf<() => boolean>>>,
	Expect<Equal<123, ReturnOf<() => 123>>>,

	Expect<Equal<Split<"Hi! How are you?", "z">, ["Hi! How are you?"]>>,
	Expect<Equal<Split<"Hi! How are you?", " ">, ["Hi!", "How", "are","you?"]>>,
	Expect<Equal<Split<"", "">, []>>,
	// Expect<Equal<Split<"", "z">, [""]>>,
	Expect<Equal<Split<string, "whatever">, string[]>>,

	Expect<Equal<IsTuple<[]>, true>>,
	Expect<Equal<IsTuple<[number]>, true>>,
	Expect<Equal<IsTuple<readonly [1]	>, true>>,
	Expect<Equal<IsTuple<{length: 1}>, false>>,
	Expect<Equal<IsTuple<number[]>, false>>,

	Expect<Equal<IndexOf<[1,2,3], 2>, 1>>,
	Expect<Equal<IndexOf<[2,6,3,8,4,1,7,3,9], 3>, 2>>,
	Expect<Equal<IndexOf<[0,0,0], 2>, -1>>,
]