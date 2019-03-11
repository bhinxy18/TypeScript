//-----> BASICS 


// There are 6 basic, primitive types to remember:
// number - represents any kind of numeric value - integer or float, hex, decimal, binary etc.
// string - represents any kind of string value;
// boolean - represents any boolean value, i.e. true or false;
// symbol - represents symbol values;
// null - represents null value only;
// undefined - represents undefined value only;



//-----> Other types

const myObjectVariable: object = {};

let myAnyVariable: any = "str";

let myVoidVariable: void = undefined;   //null

// let myNeverVariable: never = 0;
// according to the definition, represents the value that never occurs. 
// e.g. return type of the function that throw/returns an error, which doesn't allow the function to have a reachable end point.

const myUnknownVariable: unknown = "str"; 
// It's meant to be a type-safe alternative to any type.


// Here's the difference between 'unknown' and 'any'
let myUnknownVariable2: unknown = myUnknownVariable;
myUnknownVariable2 = myAnyVariable;

let myStringVariable: string = "str";
myStringVariable = myAnyVariable;
// myStringVariable = myUnknownVariable;   //error

console.log(myStringVariable);