const search =  document.querySelector(".search")
const btn = search.lastElementChild
const input = search.firstElementChild

function onClick(){
    search.classList.toggle("active")
    input.focus()
}

btn.addEventListener("click", onClick)