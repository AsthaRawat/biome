//noExcessiveCognitiveComplexity
function tooComplex() {
	for (let x = 0; x < 10; x++) {
		for (let y = 0; y < 10; y++) {
			for (let z = 0; z < 10; z++) {
				if (x % 2 === 0) {
					if (y % 2 === 0) {
						console.log(x > y ? `${x} > ${y}` : `${y} > ${x}`);
					}
				}
			}
		}
	}
}

//noExtraBooleanCast
const foo = [0];
if (!Boolean(foo)) {
}
//valid
Boolean(!foo);

//noForEach
function f()
foo.forEach((el) => {
	f(el);
});
//vadid
foo.forEach((el, i) => {
	f(el, i);
});
for (const el of els) {
	f(el);
}

//noMultipleSpacesInRegularExpressionLiterals: //noMultipleSpacesInRegularExpressionLiterals:Disallow unclear usage of consecutive space characters in regular expression literals

/foo +/; // error: /foo  */

//noStaticOnlyClass
class X {
	static foo = false;
	static bar() {}
}

//noThisInStatic
// biome-ignore lint/complexity/noStaticOnlyClass: <explanation>
class A {
	static CONSTANT = 0;
	static foo() {
		this.CONSTANT;
	}
}

//noUselessCatch
try {
	doSomething();
} catch (e) {
	throw e;
}

//noUselessConstructor
class A1 {
	constructor(a) {}
}

//noUselessFragments
<>foo</>;

//noUselessLabel
while (a) {
	break;
}

//noUselessSwitchCase
switch (foo) {
	case 0:
	default:
		break;
	case 1:
		break;
}

//noUselessThisAlias
class A3 {
	method() {
		return () => {
			return this;
		};
	}
}

//noVoid
void 0;

// ********** *********** **********//
//noWith
// function f1() {
//     with (point) {
//       r = Math.sqrt(x * x + y * y); // is r a member of point?
//     }
//   }
// ********** *********** **********//

//useArrowFunction
const z = () => 0;

//useFlatMap
const array = ["split", "the text", "into words"];
array.flatMap((sentence) => sentence.split(" "));
// /array.map(sentence => sentence.split(' ')).flat(2);
array.flatMap;

//useLiteralKeys
a.b["c"]; //Enforce the usage of a literal access to properties over computed property access.

//useOptionalChain
foo &&
	foo.bar &&
	foo.bar.baz &&
	foo.bar.baz.buzz /
		//useRegexLiterals
		abc /
		u; //error: new RegExp("abc", "u");

//useSimpleNumberKeys
({ 1: 1 }); // error: ({ 0x1: 1 });

//useSimplifiedLogicExpression
const boolExp = true;
const r = true && boolExp;

// ********** *********** **********//
export const abc = () => {
	return 2;
};
