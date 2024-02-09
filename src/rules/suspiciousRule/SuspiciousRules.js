import x from "y";
const SuspiciousRules = () => {
	const arr = [1, 2, 3, 4, 5, 6];
	let a;
	let b;
	// noAssignInExpressions : The assignment should not be in an expression.
	a = (b = 1) + 1; //valid :: a = 1

	// noAsyncPromiseExecutor : Promise executor functions should not be `async`
	new Promise(async function foo(resolve, reject) {});
	new Foo(async (resolve, reject) => {});

	//noCatchAssign
	try {
		throw new Error("Intentional error");
	} catch (e) {
		let e = 10;
		e = 100;
	}

	// noClassAssign
	class A {}
	A = 0;
	// let A = class A {}
	// A = 0;

	const check = () => {
		//noCompareNegZero : Disallow comparing against -0
		if (1 >= 0) {
			//noConsoleLog : Disallow the use of console.logz
			console.log("!!");
		}
		//noDoubleEquals
		if (1 == 2) {
			console.log("!!");
		}
	};

	// noCommentText : Prevent comments from being inserted as text nodes
	const a3 = <div>// comment</div>;

	//noConfusingLabels : Disallow labeled statements that are not loops
	label: {
		f();
		break label;
	}
	outer: while (a) {
		while (b) {
			break outer;
		}
	}

	//noConfusingVoidType : Disallow void type outside of generic or return types
	let foo: void;
	function foo(): void {}

	//noControlCharactersInRegex:hidden special characters that are numbered from 0 to 31 in the ASCII system.
	const pattern1 = /\x00/;
	const pattern2 = /\u0020/;

	//noDebugger : Disallow the use of debugger
	debugger;
	test.debugger;

	//
	switch (a) {
		case 1:
			break;
		//noDuplicateCase
		case 1:
			break;
		default:
			break;
	}

	class Foo {
		bar() {}
		//noDuplicateClassMembers
		bar() {}
	}

	//noDuplicateObjectKeys
	const obj = {
		a: 1,
		a: 2,
	};

	//noDuplicateParameters
	const f = (a, b, b) => {};

	switch (bar) {
		case 0:
			//noFallthroughSwitchClause
			a();
		//break;
		case 1:
			b();
	}

	//noFunctionAssign:Disallow reassigning function declarations.
	function func() {}
	func = bar;
	function func1(func1) {
		func1 = bar;
	}

	//noGlobalIsFinite: eg- Number.isFinite(false);
	isFinite(false);
	//noGlobalIsNan: Eg- Number.isNaN({});
	isNaN({});

	//noImplicitAnyLet: not working
	let ab;
	ab = 2;

	//noImportAssign

	//noLabelVar
	const x1 = "test";
	x1: expr;

	//TS
	//noConstEnum : Disallow TypeScript const enum
	//noEmptyInterface: Disallow the declaration of empty interfaces.
	//noExplicitAny: Disallow the any type usage.
	//noExtraNonNullAssertion
	const foo = { bar: 3 };
	const bar = foo!!.bar;
	//noMisrefactoredShorthandAssign
	a1 += a1 + b1;

	//noPrototypeBuiltins:
	const invalid = foo.hasOwnProperty("bar");
	//valid
	const valid = Object.prototype.isPrototypeOf.call(foo, bar);

	//noRedeclare
	// biome-ignore lint/style/noVar: <explanation>
	var a4 = 3;
	// biome-ignore lint/style/noVar: <explanation>
	var a4 = 10;

	//noRedundantUseStrict: Prevents from having redundant "use strict".
	("use strict");
	function fo3() {
		//	"use strict"
	}
	//valid
	function foo4() {}

	//noSelfCompare
	if (x === x) {
	}

	//noShadowRestrictedNames
	function NaN() {}

	//noSparseArray
	const arr2 = [1, , 2];

	//noUnsafeNegation
	(!1) in [1, 2];
	//valid
	(-1) in [1, 2];
	(~1) in [1, 2];
	(typeof 1) in [1, 2];
	(void 1) in [1, 2];
	(delete 1) in [1, 2];
	(+1) instanceof [1, 2];

	//useDefaultSwitchClauseLast
	switch (foo) {
		default:
			break;
		case 0:
			break;
	}

	//useGetterReturn
	class Person {
		get firstName() {}
	}

	//useIsArray
	const xs = [];
	if (xs instanceof Array) {
		//if (Array.isArray(xs)) {}
	}

	return (
		<div>
			{arr.forEach((item, index) => {
				//noArrayIndexKey:Avoid using the index of an array as key property in an element.
				<div key={index}>{item}</div>;
				//noDuplicateJsxProps
				<Hello name="John" name="John" />;
			})}
		</div>
	);
};

export default SuspiciousRules;
