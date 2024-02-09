//noAccumulatingSpread
var a = ["a", "b", "c"];
//a.reduce((acc, val) => {acc.push(val); return acc}, []);
a.reduce((acc, val) => [...acc, val], []);
//noDelete
delete a[0];
