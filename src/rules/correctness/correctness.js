//noChildrenProp
<FirstComponent children={"foo"} />;

//noConstAssign
const a = 1;
a = 4;

//noConstantCondition
if (false) {
}

//noConstructorReturn
class A {
	constructor() {
		return 0;
	}
}

//noEmptyCharacterClassInRegex
// eslint-disable-next-line no-empty-character-class
/^a[]/.test("a"); // false //*/^a[xy]/.test("ay"); // true

//noEmptyPattern
// biome-ignore lint/style/noVar: <explanation>
var {} = foo;

//noGlobalObjectCalls
var math = Math();

//noInnerDeclarations
if (test) {
	var x = 1;
}

//noInvalidConstructorSuper
class A1 {
	// biome-ignore lint/complexity/noUselessConstructor: <explanation>
	constructor() {
		super();
	}
}

//noInvalidNewBuiltin //noNewSymbol
// biome-ignore lint/style/useConst: <explanation>
let foo = new Symbol("foo");

//noNonoctalDecimalEscape
"8" === "8";
//valid
const x1 = "8";

//noPrecisionLoss
const x = 9007199254740993;

// noRenderReturnValue
// biome-ignore lint/correctness/noUndeclaredVariables: <explanation>
const foo = ReactDOM.render(<div />, document.body);

// noSelfAssign
a = a;

// noSetterReturn
class A3 {
	set foo(x) {
		return x;
	}
}

// noStringCaseMismatch
if (s.toUpperCase() === "Abc") {
}

// noSwitchDeclarations
switch (foo) {
	case 0:
		// biome-ignore lint/style/useSingleCaseStatement: <explanation>
		const x = 1;
		break;
	case 2: {
		x; // `x` can be used while it is not initialized
		break;
	}
}

// noUndeclaredVariables
foobar;

// noUnnecessaryContinue
for (let i = 0; i < 5; i++) {
	continue;
}

// noUnreachable
function example() {
	return;
	// biome-ignore lint/correctness/noUndeclaredVariables: <explanation>
	neverCalled();
}

// noUnreachableSuper
class A4 extends B {
	constructor() {}
}

//noUnsafeFinally
(() => {
	try {
		return 1; // 1 is returned but suspended until finally block ends
	} catch (err) {
		return 2;
	} finally {
		return 3; // 3 is returned before 1, which we did not expect
	}
})();

//noUnsafeOptionalChaining
// biome-ignore lint/correctness/noUndeclaredVariables: <explanation>
1 in obj?.foo;

//noUnusedLabels
for (const x of xs) {
	if (x > 0) {
		break;
	}
	f(x);
}

//noUnusedVariables
let a1 = 4;
a1++;

//noVoidElementsWithChildren
<br>invalid child</br>;

//noVoidTypeReturn
class A {
	f(): void {
        return undefined;
    }
}

//useExhaustiveDependencies

import { useEffect } from "react";

function component() {
	const a = 1;
	useEffect(() => {
		console.log(a);
	}, []);
}
//useHookAtTopLevel
function Component1({ a }) {
	if (a == 1) {
		useEffect();
	}
}

//useIsNan
123 == Number.NaN;

//useValidForDirection
for (var i = 0; i < 10; i--) {}

//useYield
function* foo() {
	return 10;
}
