/* @flow */

const a:number = 10;
const b:number = 20;

const sum = (a:number, b:number): number => a + b;

console.log(sum(a, b));

// Wrong
// const c:string = 30;     // Uncomment this line and try run "npm start" will fail with error message!