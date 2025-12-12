// const button = document.querySelector(".btn");
// const pressedSpan = document.querySelector(".pressed");
// const incSpan = document.querySelector(".inc");
// let pressedCount = 0;
// let incCount = 0;
// // const debounceCount =_.debounce(()=>{
// //     incCount++;
// //     incSpan.innerHTML=incCount;
// // },800);
// // const start=Date.now();
// // const throttleCount = _.throttle(()=>{
// //     const now = Date.now();
// //     console.log("throttle called at ", now-start);
// //     incCount++;
// //     incSpan.innerHTML=incCount;
// // },800)
// const myDebounce = (cb,d)=>{
//     let timer;
//     return function(...args){
//         if(timer) clearTimeout(timer);
//         timer = setTimeout(()=>{
//             cb(...args);
//         },d)
//     }
// }
// const debounceCount = myDebounce(()=>{
//     incCount++;
//     incSpan.innerHTML=incCount;
// },800);
// const myThrottle = (cb,d)=>{
//     let last = 0;
//     return (...args)=>{
//         const now = new Date().getTime();
//         if(now-last>=d){
//             last=now;
//             cb(...args);
//         }
//     }
// }
// const throttleCount = myThrottle(()=>{
//     incCount++;
//     incSpan.innerHTML=incCount;
// },800)
// button.addEventListener("click",()=>{           
//     pressedCount++;
//     pressedSpan.textContent = pressedCount;
//     // debounceCount();
//     throttleCount();
// })

// const btn2=document.querySelector(".btn2");
// const inn=document.querySelector(".inn");
// const out=document.querySelector(".out");

// btn2.addEventListener("click",(e)=>{
//     // e.stopPropagation();
//     alert("button clicked "+e.target.tagName);

// });
// inn.addEventListener("click",(e)=>{
//     // e.stopPropagation();
//     alert("inner div clicked "+e.currentTarget.tagName);                                                                             
// });
// out.addEventListener("click",(e)=>{
//     // e.stopPropagation();
//     alert("outer div clicked "+e.currentTarget.tagName);
// });  

//JS executes Synchronus code first then Asynchronus code
// console.log("hi");

// setTimeout(()=>{
//     console.log("async");
// },0);
// console.log("bye");

// console.log("start");

// function async1(username,cb){
//     setTimeout(()=>{
//         cb(`async1 -> ${username}`);
//     },100)
// };
// function async12(username,cb){
//     setTimeout(()=>{
//         cb(`async1 -> ${username}`);
//     },0)
// };
// function async13(username,cb){
//     setTimeout(()=>{
//         cb(`async1 -> ${username}`);
//     },0)
// };
// // makes it asynchronus function usig callbacks as callbacks helps in handling asynchronus code
// const message=async1("ramneet",(message)=>{ // this is a example of callback hell
//     console.log(message);
//     async12("ranveer",(mesage)=>{
//         console.log(mesage);
//         async13("madhav",(mesage)=>{
//             console.log(mesage);
//         });
//     })
//     // console.log("hello");// this will execute before async12 as it is asynchronus and this code is synchronus
// });
// // console.log(message);
// console.log("end");

// console.log("start");
// const async1 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("async1 resolved");
//     },5000)
// });
// console.log(async1);
// async1.then((message)=>{
//     console.log("inside then ", message);
// }).catch((err)=>{
//     console.log("inside catch ", err);
// })
// Promise.resolve("resolved immediately").then((message)=>{ // still a asynchronus code
    // console.log("inside then ", message);
// })

// console.log("end");

// promise chaining
console.log("start");
function async1(username){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const result = true;
            if(result){
                resolve("async1->"+ username);
            }
            else{
                reject("async1 failed");
            }
        },1000);
    });
};
function async2(username){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const result = false;
            if(result){
                resolve("async2->"+ username);
            }
            else{
                reject("async2 failed");
            }
        },500);
    });
};
function async3(username){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const result = true;
            if(result){
                resolve("async3->"+ username);
            }
            else{
                reject("async3 failed");
            }
        },0);
    });
};
// normal promise chaining
// async1("ramneet").then((message)=>{
//     console.log(message);
//     async2("ranveer").then((message)=>{
//         console.log(message);
//         async3("madhav").then((message)=>{
//             console.log(message);
//         }).catch((err)=>{
//             console.log(err);
//         });
//     }).catch((err)=>{
//         console.log(err);
//     });
// }).catch((err)=>{
//     console.log(err);
// })
// promise chaining with flat structure using return makes it flat and easier to read (chaining these promises by returning the previous one)
// async1("ramneet").then((message)=>{
//     console.log(message);
//     return async2("ranveer");
// }).then((message)=>{
//     console.log(message);
//     return async3("madhav");
// }).then((message)=>{
//     console.log(message);
// }).catch((err)=>{
//     console.log(err);
// })
// promise combinators :  4 types
// promise combination using Promise.all
// array of promises
Promise.all([ async1("ramneet"), async2("ranveer"), async3("madhav")]).then((message)=>{
    for(let msg of message){
        console.log(msg);
    }
}).catch((err)=>{
    console.log(err);
})
console.log("end");