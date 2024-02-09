//noArguments Disallow the use of arguments.
function f() {
	console.log(arguments);
}

//noCommaOperator
const foo = (f(), 0);

//noDefaultExport
export default function f1() {}

//noNegationElse:Invert the condition and the blocks. Eg- if·(cond)·{·g();}·else·{·f();}
if (foo) {
	g();
} else {
	f();
}

//noParameterAssign:   ✖ Reassigning a function parameter is confusing.
function f2(param) {
	param = 13;
}

//noRestrictedGlobals
// eslint-disable-next-line no-restricted-globals
console.log(event);

//noShoutyConstants: Disallow the use of constants which its value is the upper-case version of its name.
const FOO = "FOO"; // valid: let FOO = "FOO";
console.log(FOO);

//noUnusedTemplateLiteral: Disallow template literals if interpolation and special-character handling are not needed
const foo1 = `bar`;

//noUselessElse
const x = 1;
while (x > 0) {
	if (f(x)) {
		break;
	} else {
		x++;
	}
}

//noVar
var foo3 = 1;

//useBlockStatements
if (x) x;

//useCollapsedElseIf: Enforce using else if instead of nested if in else clauses.
if (x) {
} else if (x) {
	// ...
}

//useConst
const a = 3;

//useDefaultParameterLast
function f3(a = 0, b) {} //function f(a, b = 0) {}

//useExponentiationOperator
const foo2 = Math.pow(2, 8); //const foo = 2 ** 8;

//useFragmentSyntax
<Fragment>child</Fragment>; //This rule enforces the use of <>...</>

//useNamingConvention
consaValueue = 0;

//useNumericLiterals
Number.parseInt("111110111", 2);
Number.parseInt("-1f7", 16);

//useSelfClosingElements
<div></div>;

//useShorthandArrayType
let invalid: Array<foo>; //let invalid: foo[]

//useShorthandAssign
a = a + 1; //a += 1;

//useSingleCaseStatement
switch (foo) {
	case true:
	case false:
		const foo = ""; //useSingleCaseStatement
		foo;
	default
}

switch (foo) {
	case true:
	case false: {
		const foo = "";
		foo;
		default
	}
}

//useSingleVarDeclarator
let foo4 = 0,
	bar,
	baz; //const foo = 0; let bar; let baz;

//useTemplate
const s = foo + "baz"; //let s = "foo" + "bar" + `baz`;

//useWhile
while (x.running) {
	x.step();
}

// ************************************** //
console.log(foo3, a, foo2, f3, aValue);
