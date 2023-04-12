function addThreeNumbers(a,b,c){
    return a+b+c;
}

//let c = addThreeNumbers(1,2,54)
console.log(addThreeNumbers(1,2,54))
var a = 20
let b = "Hello"
const c = 24.33

console.log(a)
console.log(b)
console.log(c)

// nn bb ss u 
let a = null; //null
let bb = 345; //number
let cc= true; // bollean
let d = BigInt("567"); // BigInt
let e = "Paddy"; //string
let f = Symbol("Great Symbol");//symbol
let g = undefined//undefined

console.log(a,b,c,d,e,f,g);
console.log(typeof a); // prints the variable data type

//object

const item = {
    "paddy": true,
    "gain": false,
    "lovish": 342,
    "atharva": undefined
}

console.log(item["paddy"]);