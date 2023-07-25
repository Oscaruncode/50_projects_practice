const bg = document.querySelector(".bg")
const loadTxt = document.querySelector(".loading-txt")

let interval = setInterval(blurrying,30)
let load = 0;
function blurrying () {
    load++

    if(load>99){
        clearInterval(interval)
    }

    loadTxt.innerHTML = `${load}%`
    loadTxt.style.opacity = scale(load, 0 , 100, 30 ,0)
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}

const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
  }