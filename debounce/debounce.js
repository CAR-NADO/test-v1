document.getElementById("search").addEventListener("input",function (e){
    betterFunction(e.target.value)
})

function getData(value) {
  console.log("get data" + value);
}

const myDebounce = (cb, delay) => {
  let timer;
  return (...args) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
        cb(...args)
    }, delay);
  };
};
const betterFunction = myDebounce(getData,1000);

