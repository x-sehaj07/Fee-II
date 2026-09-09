// console.log("Hello world");
// function sum(){
//     console.log(arguments)
//     return arguments[0]+arguments[1];
// }
// console.log(sum(5,6));
// a=[1,2,3,4,"sehaj"];
// console.log(a.at(-1));for negative indexing access values using at

// const a=()=>({a:1,b:2});  //to return object () are used 
// // no this keyword,arguments
// console.log(a());
// const sum=(...number)=>{
//     console.log(number);   //[ 1, 2, 3, 4, 5, 6 ]
// }
// sum(1,2,3,4,5,6);
// a=[1,2,3,4,6,5];
// console.log(...a);//1 2 3 4 6 5
// console.log(Math.max(...a));
// const b=[...a,7,8,9];
// console.log(b);//[
//   1, 2, 3, 4, 6,
//   5, 7, 8, 9
// ]

// const sum=(...number,a,b){
//     console.log(number);  //rest parameter must be last formal parameter
// }
// sum(1,2,3,4,5,6);

// function outer(){
//     var a=3;
//     const b=5;
//     function inner(){
//         console.log(a); //lexical scope : the inner function can access the variable of outer function
//         console.log(b);
//     }
//     inner();
// }
// outer();


// closure: outer function had executed but inner function is able to remember the variable of outer function
// function outer(){
//     var a=3;
//     return function inner(){
//         a++;
//         console.log(a);
//     }
// }
// const f=outer();
// f();//4
// f();//5


const a={
    name:"Aman",
    city:"Delhi"
}
console.log(Object.keys(a)); //[ 'name', 'city' ]
Object.keys(a).forEach((item)=>console.log(item));// name city
Object.keys(a).forEach((_,index)=>console.log(index));//0 1

const {name,city}=a;
console.log(name );

