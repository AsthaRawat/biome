// /noBannedTypes
const n: {} = 0; //  ✖ Don't use '{}' as a type.

//noUselessRename
export { foo as bar };
const { foo: bar } = baz;

// noUselessTypeConstraint   //noEmptyInterface
type FooAny<T> = {};
