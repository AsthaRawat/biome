// noDuplicateJsonKeys
{
	("title");
	: "New title",
    "title": "Second title"
}

// noEmptyBlockStatements
function emptyFunctionBody() {}

// noEmptyTypeParameters
interface Foo<> {}

// noFocusedTests
describe.only("foo", () => {});

// noGlobalAssign
Object = null;

// noGlobalEval
eval("var a = 0");

// noInvalidUseBeforeDeclaration
function f() {
	console.log(x);
	const x;
}

// noMisleadingCharacterClass
/^[Á]$/u;

// noNodejsModules
import fs from "fs";

// noSkippedTests
describe.skip("test", () => {});

// noThenProperty
export { then };

// noUnusedImports

// noUnusedPrivateClassMembers
class OnlyWrite {
	#usedOnlyInWrite = 5;

	method() {
		this.#usedOnlyInWrite = 212;
	}
}

// noUselessLoneBlockStatements
{
}

// noUselessTernary
var a = x ? true : true;

// useAwait
async function fetchData() {
	// Missing `await` for the promise returned by `fetch`
	return fetch("/data");
}

// useConsistentArrayType
let invalid: Array<foo>;

// useExportType
interface I {}
export { I };

// useFilenamingConvention
{
	("//");
	: "...",
  "options": 
      "strictCase": false,
      "enumMemberCase": ["camelCase", "export"]
}

// useForOf
for (let i = 0; i < array.length; i++) {
	console.log(array[i]);
}

// useGroupedTypeImport
import { type A, type B } from "mod-1";
import type { D } from "mod-2";

// useImportRestrictions

// useImportType
import { A } from "./mod.js";
type TypeOfA = typeof A;
let a: A;

// useNodejsImportProtocol

// useNumberNamespace
Number.parseInt("1"); // true

// useShorthandFunctionType
interface Example {
  (): string;
}

// useSortedClasses
<div class="px-2 foo p-4 bar" />;
