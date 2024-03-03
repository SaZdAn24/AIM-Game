const startBtn = document.querySelector('#start');
const screen = document.querySelectorAll('.screen')
const timeList = document.querySelector('#time-list')
let time = 20
const timeEl = document.querySelector('#time')

startBtn.addEventListener('click', (event) =>{
event.preventDefault();
screen[0].classList.add('up')
})

timeList.addEventListener('click', event => {

    if ( event.target.classList.contains ('time-btn')){
            time = parseInt (event.target.getAttribute('data-time'))
            screen[1].classList.add('up')
            startGame()
    }
})
//debug
startGame()

function startGame(){
    setInterval(decreaseTime, 1000)
   setTime(time)

}

function decreaseTime (){
    let current = --time
    if (current <10){
        current = `0${current}`
    }
 setTime(current)
}

function setTime(value){
    timeEl.innerHTML = `00 :${value}` 
}