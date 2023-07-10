const step =  document.getElementsByClassName("step")
const prevBtn = document.getElementById("prev")
const nextBtn = document.getElementById("next")
const [bar] = document.getElementsByClassName("fill")

let position = 1
let barWidth = 0


prevBtn.addEventListener("click", () => {
    
    if(position==2){
        prevBtn.disabled = true
    }else{
        prevBtn.disabled = false
        if(position==4){
            nextBtn.disabled = false
        }
    }
  
    position-=1
    step[position].classList.remove("active")
    
    barWidth -= 30
    bar.style.width = barWidth + "%"
})

nextBtn.addEventListener("click", () => {
    if(position==3){
        nextBtn.disabled = true
    }else{
        nextBtn.disabled = false
        if(position==1){
            prevBtn.disabled=false
        }
    }
    step[position].classList.add("active")
    position+=1

    barWidth += 30
    bar.style.width = barWidth + "%"
    
})