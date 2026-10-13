console.log("7" + 3);
//  "73"
console.log("7" - 3);
// 4
console.log(7 + 3 + "1");
// "101"
console.log("7" * "2");
// 14
console.log(10 / 3);
// 3.33333333335
console.log(typeof null);
// "object"
console.log(typeof NaN);
// "number"
console.log(Boolean("false"));
// true
console.log(Boolean("0"));
// true
console.log(0 || "fallback");
// "fallback"
console.log(0 ?? "fallback");
// fallback
//i was thinking first that the output will be fallback as
// ?? uses the values if its null or undefined and i though 0 is same as null. but its not so i am amazed that the amout is 0;
console.log("" || "empty");
// "empty"
console.log("10" == 10);
// true
console.log("10" === 10);
// false
console.log(Number("12abc"));
// NaN
console.log(parseInt("12abc"));
// 12
console.log("  hi  ".trim());
// "hi"
console.log("cat".includes("a"));
// true
