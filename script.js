// OBJECTS - objs are key-value pairs

// 01 singleton obj = using the Object.Create methods


// 02 obj literals 

// var mySym = Symbol ("key1"); //defining the key name as a symble

// var obj = {

//     name : "satish",
//     lastName : "dhamne",
//     email : "sonu123@gmail.com",
//     phoneNumber : 124565756754,
//     age : 23,
//     location : "knw",
//     skilles : ["java","js"],

//   // mySym : "hello",
//     [mySym] : "hello", // this is the right syntext for the symbole untill it will be treated as string

// }

// // console.log(obj.name);
// // console.log(obj.email);
// // console.log(obj["email"]); // we can also use this syntext for accessing the value of key 

// //console.log(typeof obj.mySym); // if we use sym as a key of symbole it will be still treated as a string so we have to use the the proper syntaxt to make it symbole in object, we should use [mySym] rather than mySym then it will be treated as symbole in typeof 

// console.log(obj[mySym]);

// console.log(obj);

// ----------------------------------------------------------------------------------------------------------

// CHANGING THE VALUES IN OBJ



// var obj = {

//     name : "satish",
//     lastName : "dhamne",
//     email : "sonu123@gmail.com",
//     phoneNumber : 124565756754,
//     age : 23,//
//     location : "knw",
//     skilles : ["java","js"],

// }

// obj.name = "sonu";
// console.log(obj.name);

// obj.location = "bpl"
// // console.log(obj);

// Object.freeze(obj) // we can freeze the object using the "Object.freeze()" method that resist to changes in an object

// obj.email = "sattu@gmail.com" // here bcz of the Object.freeze(obj) it is not allowing to change in email


// console.log(obj);

// ----------------------------------------------------------------------------------------------------------

// var newObj = {} //literal object 

// // var newObj = new Object () //singleton object 

// newObj.id = "123s"
// newObj.name = "sonu"
// newObj.add = "knw"

// // console.log(newObj);

// console.log(Object.keys(newObj));
// console.log(Object.values(newObj));
// console.log(newObj.hasOwnProperty("add"));
// console.log(newObj.hasOwnProperty("id"));
// console.log(newObj.hasOwnProperty("number"));

// //COMBINING THE OBJECTS

// var obj1 = {
//     1 : "a",
//     2 : "b"
// }

// var obj2 = {
//     3 : "c",
//     4 : "d"
// }

//there is no concat() method to merge two objects, can be only used in arrays "arr.concat()" and strings "str.concat() and  "".concat() "

// var obj3 = {obj1, obj2}
// console.log(obj3);

// var obj4 = {...obj1, ...obj2}
// console.log(obj4);

// // var obj5 = Object.assign(obj1, obj2)
// // console.log(obj5);


// var obj5 = Object.assign({}, obj1, obj2) //creating an empty object is also good way but it gives simillar results as "var obj5 = Object.assign(obj1, obj2)"
// console.log(obj5);

 //----------------------------------------------------------------------------------------------------------


// // DESTRUCTURING OF OBJECT 

// var obj = {
//     name : "sonu",
//     id : "s30",
//     add : "knw"
// }

// // var {name} = obj
// // console.log(name);

// var { id : identityNum} = obj
// console.log(identityNum);

//----------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------

// FUNCTIONS : function is a block of code that can be used anywhenever we need to use it we can say function are packages

// var myNameLetters = function( //perameters ) {   //function variable 

//     console.log("s");
//     console.log("a");
//     console.log("t");
//     console.log("i");
//     console.log("s");
//     console.log("h");

// }

// myNameLetters( //argument );



// function myLetters () {              //normal funtion

//     console.log("d");
//     console.log("h");
//     console.log("a");
//     console.log("m");
//     console.log("n");
//     console.log("e");

// }

// myLetters();




// function userLoggedInMsg (){
//     return `hi you are logged in`
// }

// console.log(userLoggedInMsg());


// function userLoggedInMsg (username){
//     return `${username} you are logged in`
// }

// console.log(userLoggedInMsg("satish"));




// function addNums( num1, num2){
//     return num1 + num2
//  }

// console.log(addNums(2, 9));



// [ NOTE : if once a return is executed the code after the return in funtion will not work]


// function addNums( num1, num2, num3){
//     return num1 + num2 
//     var addNum2n3 = num2 + num3 // this will not work due to the return is executed previously

//  }

// console.log(addNums(2, 9, 4));

// console.log(addNum2n3); // and it can also give the addNum2n3 is not defined bcz js is totaly ignoring the addNum2n3 in function due to returns execution


// MULTIPLE ARGUMENTS IN SINGLE PERAMETER

// function fnc (...pera){  // here spread is called rest operator
//     return pera
// }
// console.log(fnc(12, 33, 45, 24));



// function fnc (nm1, nm2, ...pera){  // first two values will be added in nm1 and nm2 then all the values will be addapted by the rest operator
//         return pera
//     }
//  console.log(fnc(12, 33, 45, 24)); 



//PASSING OBJECTS IN FUNCTION 

// var myObj1 = {
//     username : `"satish"`,
//     address  : `"knw"`
// }

// function objInFnc (peraOfmyObj1){
//     return `user name is ${peraOfmyObj1.username} and user address is ${peraOfmyObj1.address}.`
// }

// console.log(objInFnc(myObj1));

// we can also directly pass the object 


// function objInFnc (peraOfmyObj1){
//     return `user name is ${peraOfmyObj1.username} and user address is ${peraOfmyObj1.address}.`
// }

// console.log(objInFnc(
//     {
//         username : `"satish"`,
//         address  : `"knw"`
//     }
// ));

//++++++++++++++++++++++++++++++++ this and arrow function ++++++++++++++++++++++++++++++


// "this" is used to refer the current context 

// var Obj = {
//     username : "sattu",
//     id : "s30",

//     wellcomeMsg : function nana(){
//         return (`hii... ${this.username}, wellcome to our website`)
//     }
// }

// console.log(Obj.wellcomeMsg());
// Obj.username = "sonu" // here context for username get changes
// console.log(Obj.wellcomeMsg());

//console.log(this); //gives the "window object" on console and "{}" (empty object) on node



// var swordSmith = function () {
//     var name = "haganezuka"
//     console.log(this.name); // results the undefine bcz it will not work in function it works with the objects
// }
// sonu();

//+++++++++++++++++++++++++++++ arrow function ++++++++++++++++++++++++++++++++++++++++

// var tanjiro = function (){
//     var goal = "kill demons"
//     console.log(this);
// }
// tanjiro()

// // ARROW FUNCTION ++++++++++++++

// var zenetsu =  () => {
//     var goal = "kill demons"
//     console.log(this);
// }
// zenetsu()

//NORMAL SYNTAXT ++++++++++++++++++++++++++

// var demo = () => {
//     console.log('satish is going to become a best webdeveloper');
// }
// demo()

//IMPLICITE RETURN SYNTAXT ++++++++++++++++++++++++++

// var addNums = (num1, num2) => {
//     return num1 + num2
// }
// console.log(addNums(2, 2)); //normal arrow fnc

// var addNums = (num1, num2) =>  num1 + num2;   // implecite return fnc

// var addNums = (num1, num2) =>  ( num1 + num2 ); // implecite return fnc

// var addNums = () =>  ({user : "sanji"}) // object must be in a peranthisis in implecite return fnc

// console.log(addNums());


//++++++++++++++++++++++++++ IIFE ++++++++++++++++++++++++++++++++++++++++++++++++++++

// IMMEDIATLY INVOKED FUNCTION EXPRESSION

//  this functions are use to prevent the function variables from the Global pollution and as its name defines it is immediatly invoked or called function 


// (function fnc1 (name){                    //named IIFE
//     console.log(`wellcome ${name}`);
// })("roronoa zoro");


// ((name) => {                              //unamed or simple IIFE
//     console.log(`wellcome ${name}`);
// })("jinbe")

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ CONDITIONALS ++++++++++++++++++++++++++++++++++++++++++++++++

// if, if else, switch, thruthy and falsy values



// if (condition) {
//     //code to be executed;
// }

// let userLoggedIn = true;
// if(userLoggedIn){
//     console.log("condition is true");
// }

// IMPLICITE IF

// if(userLoggedIn) console.log("this is implicite if statement that doesn't requires the curly braces this are generaly written in singel line");




// if (condition) {
//     code to be executed;
// }else{
//     if the condition is false the else statement will be executed;
//}

 
// let userLoggedOut = false;
// if(userLoggedOut){
//     console.log("condition is true");
// }
// else{
//     console.log("condition is false so the else statement will be executed");
// }


// switch (condition){
//     case 1 : "firsr is true";
//     break; // if we will not use the break keyword to break statemet the whole code after the condition matches will be executed untill the break or end braces or breaks the controle flow.


//     case 2 : "second is true";
//     break;
// }


// let myName = "satish"

// switch (myName){
//     case "sonu" : 
//          console.log("first is true");
//     break;

//     case "sattu" : 
//          console.log("second is true");
//     break;

//     default :
//          console.log("default will be executed when not any of the case matches");
// }


// let month = 9;

// switch (month){
//     case 1 : 
//          console.log("january");
//          break;

//     case 2 : 
//          console.log("february");
//          break;
     
//     case 9 :
//          console.log("september");
//          break;     
    
//     case 5: 
//          console.log("may");
//          break;

//     default :
//          console.log("default will be executed when not any of the case matches");
// }



//+++++++++++++++++++++ TRUTHY AND FALSY ++++++++++++++++++++++++++++++++++++++++++++++

// falsy : null, NaN, 0, BigInt 0n, undefined, ""

// truthy : " ", {}, [], function () {}, and all other things accept falsy values consider as truthy value

// let zoro = "swords man"
// if (zoro){
//     console.log("value is truthy");
// }
// else{
//     console.log("value is falsy");
// }


// let sanji = ""
// if (sanji){
//     console.log("value is truthy");
// }
// else{
//     console.log("value is falsy");
// }



// let sanji = NaN
// if (sanji){
//     console.log("value is truthy");
// }
// else{
//     console.log("value is falsy");
// }


// let sanji = undefined
// if (sanji){
//     console.log("value is truthy");
// }
// else{
//     console.log("value is falsy");
// }


// let sanji = []
// if (sanji){
//     console.log("value is truthy");
// }
// else{
//     console.log("value is falsy");
// }

// let emptyArr = []
// if (emptyArr.length == 0){
//     console.log("empty array");
// }
// else{
//     console.log("not empty array");
// }


// let emptyObj = {}
// if (emptyObj){
//     console.log("empty object is truthy");
// }
// else{
//     console.log("falsy");
// }


// let emptyObj = {}
// if (Object.keys(emptyObj).length == 0){
//     console.log("empty object");
// }
// else{
//     console.log("not empty obj");
// }


//++++++++++++++++++++++++++++ NULLISH COALCSING OPERATOR +++++++++++++++++++++++++++

//SYNTAXT

// var varName = statement1 ?? statement2

// var num = 3 ?? 8
// console.log(num); //always prefer first statement unless it is null or undefined

// let userName = null ?? "satish";

// console.log(`my name is ${userName}`);

// let myHero = undefined ?? "Rengoku"

// console.log(myHero);


//+++++++++++++++++++++++++++++ TERNARY OPERATOR +++++++++++++++++++++++++++++++

// var myHero = "luffy"

// console.log(myHero == "luffy" ? "yes" : "no");



// var num = 3

// num <= 2 ? console.log("true") : console.log("false");

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ LOOPS +++++++++++++++++++++++++++++++++++++++++++++++++++++


// FOR LOOP

// for (let i = 1; i <= 10; i++) {
//     const element = i;
//     console.log(element);
    
// }



// for(let j = 1; j <= 10; j++){

//     console.log(`table of ${j}`);

//     for (let k = 1; k <= 10; k++) {
//         console.log(`${j} * ${k} = ${j*k}`);
//     }
   
// }

// BREAK AND CONTINUE


// let myArr = ["luffy", "zoro", "sanji", "jinbe", "franky", "chhoper", "nami", "ussop", "robin", "brook"]

// for (let index = 0; index < myArr.length; index++) {
   
//     const element = myArr[index];

//     if( index == 5){
//         console.log(element);
//         break
//     }

//     console.log(element);
    
// }


// let myArr = ["luffy", "zoro", "sanji", "jinbe", "franky", "chhoper", "nami", "ussop", "robin", "brook"]

// for (let index = 0; index < myArr.length; index++) {
   
//     const element = myArr[index];

//     if( index == 5){
//         console.log("5 detected thats why \"chhoper\" will not be printed");
//         continue
//     }

//     console.log(element);
    
// }


//+++++++++++++++++++++++ WHILE LOOP, DO WHILE LOOP ++++++++++++++++++++++++++++++



// let userName = "HAGANAZUKA"

// while (userName === "HAGANAZUKA" ) {
//     console.log(`user name is ${userName}`);
// }


// let num = 10;

// while (num <= 30) {
//     console.log(num);
//     num++
// }

// let i = 2
// let j = 1
// while (j <= 10){
//     console.log(`${i}*${j}=${i*j}`);
//     j++
// },


// let i = 2;

// do {
//     console.log(`in case of do while loop code will runs at least once even the condition is false`);
//     i++
// } while (i < 1);




// let i = 25;

// do {
//     console.log(`when value of i is ${i} = s${i}`);
//     i++
// } while (i < 40);

// let i = 25;

// do {
//     console.log(`when value of i is ${i} = sa${i}`);
//     i++
//     if(i === 30){
//         console.log("sa30 detected");
//         break
//     }
   
// } while (i < 40);


//+++++++++++++++++++++++++++++ for of and for in loops ++++++++++++++++++++++++++++++++++

//for of loop is basically used for arrays

// let myHeros = ["luffy", "zoro", "jimbe", "shanks"]

// for (const heros of myHeros) {
//     // console.log(heros);
// }


// let myName = ["satish", "sonu", "dhamne", "sa30"]
// for (let names of myName){
//     console.log(names);
// }

// let str = "satish dhamne"

// for (const strChar of str) {
//     console.log(`${str}`);
// }


// MAP : map is an object where it doesnt have any repeared keys,for that it remembers the insertion of the keys

// let map = new Map ()
// map.set("strowhates","luffy")
// map.set("redhair", "shanks")
// map.set("whitebeard", "ojaji")



// for (const [key, value] of map) {
//     console.log(key, ":-", value);
// }


// let myObj = {
//     captain : "luffy",
//     rightHandMan : "zoro",
//     leftHandMan : "sanji"
// }

// for (const obj of myObj) {
//     console.log(obj); // gives an error bcz it is not iterable
// }


// FOR IN LOOP 

// let myNewObj = {
//     p1 : "zoro",
//     p2 : "sanji",
//     p3 : "nami"
// }

// for (const key in myNewObj) {
//    console.log(myNewObj[key]);
// }

// let arr = [30, 29, 38, 38]

// for (const key in arr) {
//     console.log(key); // arrays also have the keys which are always index numbers
// }


// +++++++++++++++++++++++++++++ for each +++++++++++++++++++++++++++++++++++++


// for each has an access of the each item or elements, index number and as well as whole array and for each loop has an callback function that means we dont have to assign name to the funtion 



// let arr = [2,3,4,5,6,7,8]

// arr.forEach(function (items) {
//     console.log(items);
// })



// let arr = [2,3,4,5,6,7,8]

// arr.forEach(function (items,index) {
//     console.log(items,index);
// })



// let arr = [2,3,4,5,6,7,8]

// arr.forEach(function (items, index, array) {
//     console.log(items, index, array);
// })

// using arrow function

// let myArr = ['luffy', 'sanji', 'jimbe', 'nami']

// myArr.forEach( (i) => {
//      console.log(i);
// })



// let myArr = ['luffy', 'sanji', 'jimbe', 'nami']

// myArr.forEach( (e, i) => {
//      console.log(e, i);
// })



// let myArr = ['luffy', 'sanji', 'jimbe', 'nami']

// myArr.forEach( (e, i, arr) => {
//     console.log(`element: ${e}, index position: ${i}, whole array: ${arr}`);
// })



// let myArr2 = ['luffy', 'sanji', 'jimbe', 'nami']

// myArr.forEach( (e, i, arr) => {
//     console.log(e, i, arr);
// })


// let objArr = [
//     {
//         userName : "satish",
//         password : "s30",
//         address : "bhopal"
//     },
//     {
//         userName : "tanjoro",
//         password : "tt05",
//         address : "tokyo"
//     },
//     {
//         userName : "rengoku",
//         password : "rg07",
//         address : "kyoto"
//     }

// ]

// objArr.forEach( (items) => {
//     console.log(items);
// })


// objArr.forEach( items => {
//     console.log(items.userName);
// })

// +++++++++++++++++++++++++++ FILTER AND FOR EACH ++++++++++++++++++++++++++++++++++++++



// let objArr = [
//     {
//         userName : "satish",
//         password : "s30",
//         address : "bhopal"
//     },
//     {
//         userName : "tanjoro",
//         password : "tt05",
//         address : "tokyo"
//     },
//     {
//         userName : "rengoku",
//         password : "rg07",
//         address : "kyoto"
//     }
// ]




// let newVar = objArr.forEach( (val) => {
//     // console.log(val);
// })

//console.log(newVar);

// for each loop doesn't returns anything thats why we required filter as the alternative of the foreach 





// let arr = [ "satish", "tanjiro", "rengoku" ]

// let name = arr.filter( ( item ) => item === "satish" )

// console.log(name);


// let name = arr.filter( ( item ) => (item === "satish") )

// console.log(name);





// let name = arr.filter( ( item ) => {
    
//    return item === "satish"
    
// } )

// console.log(name);




// let name = arr.filter( ( item ) => {
    
//    return item == arr[2]
    
// } )

// console.log(name);




// let name = arr.filter( ( item ) => {
    
//    return item == arr[1]
    
// } )

// console.log(name);





// let objArr = [
//     {
//         userName : "satish",
//         password : "s30",
//         address : "bhopal",
//         id : 1
//     },
//     {
//         userName : "tanjoro",
//         password : "tt05",
//         address : "tokyo",
//         id : 2
//     },
//     {
//         userName : "rengoku",
//         password : "rg07",
//         address : "kyoto",
//         id : 3
//     }
// ]



// objArr.forEach((item) => {
//   if (item.id === 3) {
//     console.log(item);
//   }
// })


// let newvar = []

// objArr.forEach((item) => {
//   if (item.id === 3) {
//     newvar.push(item)
//   }
// })

// console.log(newvar);





// let objArr = [
//     {
//         userName : "satish",
//         password : "s30",
//         address : "bhopal",
//         id : 1
//     },
//     {
//         userName : "tanjoro",
//         password : "tt05",
//         address : "tokyo",
//         id : 2
//     },
//     {
//         userName : "rengoku",
//         password : "rg07",
//         address : "kyoto",
//         id : 3
//     }
// ]


// let newvar = objArr.filter( (item) => item.id === 2)
// console.log(newvar);



// let newvar = objArr.filter( (item) => (item.id === 2))
// console.log(newvar);



// let newvar = objArr.filter( (item) => {
//    return item.id === 2
// })
// console.log(newvar);


// let newvar = objArr.filter( (item) => item.id === 2 && item.userName === "tanjoro")
// console.log(newvar);



// let newvar = objArr.filter( (item) => item.id === 2 || item.id === 1)
// console.log(newvar);



//++++++++++++++++++++++++++++++++ chaining +++++++++++++++++++++++++++++++++++++++++++


//  in chaining we can use multiple methods like map filter at same variable

// let arr = [3, 4, 5, 6, 7]

// // let chain = arr.map( (val) => val + 10 ).map( (val) => val * 2 ).filter( (val) => val > 50)



// let chain = arr
//                .map( (val) => val + 10 )
//                .map( (val) => val * 2 )
//                .filter( (val) => val > 30)

// console.log(chain);


// +++++++++++++++++++++++++++++++++ REDUSE +++++++++++++++++++++++++++++++++++


// let arr = [43, 34, 52, 52, 63]

// // let newArr = arr.reduce( (acc, val) => acc + val )

// // let newArr = arr.reduce( (acc, val) => (acc + val), 400)


// // let newArr = arr.reduce( function (acc, val) {

// //        console.log(`accummulator : ${acc}    current value : ${val}`);
// //        return  acc + val

// //     }, 300)

// // console.log(newArr);




let shoppingBill = [
    {
        itemName : "bag",
        price : 299
    },
    {
        itemName : "shorts",
        price : 300
    },
    {
        itemName : "shirt",
        price : 232
    },
    {
        itemName : "watch",
        price : 455
    }
]

// let totalBill = shoppingBill.reduce( (acc, item) => acc + item.price, 0)


let totalBill = shoppingBill.reduce( function (acc, item) {
 
    console.log(`acc : ${acc}  price : ${item.price}`);

    return acc + item.price

}, 0)


console.log(`total amount : ${totalBill}`);