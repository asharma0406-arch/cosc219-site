const original = { name: 'Knox', km: 2.8 };
const alias = original;
const copy  = { ...original };
alias.km = 99;   // what is original.km now? -> 99
copy.km  = 1;    // and now? -> 99

const outer   = { name: 'X', meta: { tags: ['steep'] } };
const shallow = { ...outer };
shallow.meta.tags.push('rocky');   // what is outer.meta.tags? -> ['steep', 'rocky']
outer.meta === shallow.meta //true
console.log({ x: 1 } === { x: 1 }); //false
