
let interval
let count = 0
let minutes = 0
let seconds = 0

/*
ticker() takes global count, evaluates, returns 1-9 or 0 which is used by minutes and seconds. Felt this easier than dealing with Date() and a lot of extra math that comes with that.
*/

const ticker = () => {

    count < 59 ? count++ : count = 0
    
    minutes = count === 0 ? minutes +1 : minutes
    seconds = count

    document.getElementById('timer').textContent = `${minutes} : ${seconds}`
}

const startButton = () => {
    interval = setInterval(() => { ticker() }, 1000)
}

const pauseButton = () => {
    clearInterval(interval)
    console.log('Paused')
}

const resetButton = () => {
    console.log('Resetting')
    clearInterval(interval)
    count = 0
    minutes = 0
    seconds = 0
    document.getElementById('timer').textContent = `${minutes} : ${seconds}`
}

//     console.log(count.toString().padStart(2, "0"));
