interface I {
	//noMisleadingInstantiator: Don't use the new method in interfaces.
	new (): I;
	constructor(): void;
}
//valid
declare class C {
	constructor();
}

interface I {
	new (): C;
}

//noUnsafeDeclarationMerging:Disallow unsafe declaration merging between interfaces and classes.
//TypeScript’s declaration merging supports merging separate declarations with the same name.

interface Foo {
	f(): void;
}
class Foo {}
const foo = new Foo();
foo.f();

//useNamespaceKeyword
namespace Example {} //namespace Example {} ; declare module "foo" {}

// eslint-disable-next-line valid-typeof, @typescript-eslint/no-unused-expressions
//useValidTypeof
typeof foo === "strnig";

const a: number = 21;
const b: boolean = false;
const c: string = "Hi";

//ARRAY
const names: string[] = [];
names.push("Dylan"); // no error
names.push(3); // Error: Argument of type 'number' is not assignable to parameter of type 'string'.

const numbers = [1, 2, 3]; // inferred to type number[]
numbers.push(4);
numbers.push("2"); // Error: Argument of type 'string' is not assignable to parameter of type 'number'.
const head: number = numbers[0]; // no error

//ANY
let v: any = true;
v = "string"; // no error as it can be "any" type
Math.round(v); // no error as it can be "any" type

let w: unknown = 1;
w = "string";
w = {
	a: () => {
		console.log("I think therefore I am");
	},
} as { a: () => void };
w.a();

const d = [a, b, c, head];

function displayValue(value: number | string, value2: number | string): number {
	return value + value2;
}

//displayValue("Hello"); // Valid
console.log(displayValue(123, "2"));
