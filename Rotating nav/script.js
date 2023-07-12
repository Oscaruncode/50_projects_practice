

const btnBars = document.getElementById("btnBars")
const btnTimes = document.getElementById("btnTimes")
const [container] = document.getElementsByClassName("container")


btnTimes.addEventListener("click", () => {container.classList.add("show-nav")})
btnBars.addEventListener("click", () => {container.classList.remove("show-nav")})
