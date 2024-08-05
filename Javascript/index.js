// let a;
// console.log(typeof a)
// let b=null;
// console.log(typeof b)

// const obj = {}
// console.log(obj.name)

// const str = "123"
// console.log(typeof +str)


function test(){
    let a = 100
    return function inner(){
        return a
    }
}
let inner = test()
console.log(inner())