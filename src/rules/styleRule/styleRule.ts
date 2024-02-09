//noParameterProperties
class A {
	constructor(readonly name: string) {} // Use a more explicit class property instead of a parameter property.
}
//valid noParameterProperties
class A {
	constructor(name: string) {}
}

//   ********************** 1 **********************   //

//useShorthandArrayType
let invalid: Array<string>; // ⚠ Use shorthand T[] syntax instead of Array<T> syntax.

//   ********************** 2 **********************   //

//noInferrableTypes: eg-const variable: number = 1; let variable: 1 | 2 = 1;
const variable1;
as;
const; //  ✖ This type annotation is trivially inferred from its initialization.

//   ********************** 3 **********************   //

//useAsConstAssertion : Use 'as const' instead of type annotation.
const bar = 2 as const; //let foo = 'bar' as const;

//   ********************** 4 **********************   //

//noNonNullAssertion
const includesBaz = foo.property!.includes("baz");
// valid noNonNullAssertion
const includesBaz1 = foo.property?.includes("baz") ?? false;

//   ********************** 5 **********************   //

//useLiteralEnumMembers: ✖ The enum member should be initialized with a literal value such as a number or a string.
const x1 = 2;
enum Computed {
	A = 0,
	B = x1,
}

//   ********************** 6 **********************   //

//useEnumInitializers:  ✖ This enum declaration contains members that are implicitly initialized.
enum Version {
	V1 = 0,
}
//valid useEnumInitializers
enum Status {
	Open = 1,
	Close = 2,
}

//   ********************** 7 **********************   //

// noNamespace: import foo from 'foo';
namespace foo {}
