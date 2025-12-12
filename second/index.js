// when a function returns another function and the returned function still has access to the variables of the outer function, even after the outer function has finished executing, it is called a closure.
// this inner function has access of the outer function's variables or we can say it will return with the lexical scope of the outer function.
function outerfunc(firstname,lastname){
    let var1=21;
    function innerfunc(){
        console.log("My name is "+firstname+" "+lastname+" and my age is "+var1);
    }
    return innerfunc;
}
const ans=outerfunc("ramneet","singh");
ans();
function hello(x){
    const a="hello";
    const b="world";
    return function(){
        console.log(a+b+x);
    }
}
const ans2=hello("!!!");
ans2();

// function func1(power){
//     return function(num){
//         // return Math.pow(num,power);
//         return num ** power; // both are same
//     }
// }
// arrow function of above function
const func1 = (power) => (num) => num ** power;
const sqaure = func1(2);
const res=sqaure(5);
console.log(res);

const cube = func1(3);
const res2=cube(2);
console.log(res2);


// memoization using closures

function memoizationClosure(){
    // const cache={};
    let cache=false;
    return function(){
        if(cache){
            console.log("already called");
        }
        else{
            console.log("called for the first time");
        }
        cache=true;
    }
}
function memoizationClosure2(){
    // const cache={};
    let counter=0;
    return function(){
        if(counter>0){
            console.log("already called "+ counter);
        }
        else{
            console.log("called for the first time "+counter);
        }
        counter++;
    }
}
const memo1=memoizationClosure2();
memo1();
memo1();
memo1();
memo1();
const memo=memoizationClosure();
memo();
memo();
memo();