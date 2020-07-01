const count = document.querySelector('.dynamic')
const up = document.querySelector('.up')
const down = document.querySelector('.down')
const reset = document.querySelector('.reset')
const allowNeg = document.querySelector('.allow-neg')

var inc = 0;

//Increase the counter
up.addEventListener('click', ()=>{
    inc++;
    count.innerText = `${inc}`
})

//Decrease the counter
down.addEventListener('click', ()=>{
    if(allowNeg.checked == true){
        inc--;
        count.innerText = `${inc}`
    }
    else{
        if(inc != 0){
            inc--;
            count.innerText = `${inc}`
        }
    }
})

//Reset the counter
reset.addEventListener('click', ()=>{
    inc = 0
    count.innerText = `${inc}`
})

