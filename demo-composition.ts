//-----> Composition types

// Unions
let myUnionVariable: string | number = "str";
myUnionVariable = 10;
// myUnionVariable = false; // error


// Literals
let myStringLiteral: "on" | "off" = "off";
let myNumberLiteral: 10 = 10;
let myBooleanLiteral: true = true;

myStringLiteral = 'on';
// myStringLiteral = 'suspend';  // error


// Intersection types
const myIntersectionVariable: {str: string} & {num: number} = {
	str : "str",
	num: 10
};


// Arrays
const myStringArrayVariable: any[] = ['str', '10']; 
const myUnionArrayVariable: (string | number)[] = ["str", 10];


// Tuples
const myTupleVariable: [number, string] = [10, "str"];
// const myTupleVariable2: [string, number] = [10, "str"]; // error


// Enums
enum Color {Red, Green, Blue};

Color.Red // 0
Color.Blue // 2
Color[1] // "Green"
Color[2] // "Blue"

