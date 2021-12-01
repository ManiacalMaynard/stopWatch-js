// Setting variables en masse helps make for cleaner code!
let interval
let count = 0
let minutes = 0
let seconds = 0

/*
ticker() takes variable count, evaluates, returns 1-9 or 0 which is used by minutes and seconds. Felt this easier than dealing with Date() and a lot of extra math that comes with that. Also, was just more fun to try to build the function to be honest.
*/

const ticker = () => {

    count < 59 ? count++ : count = 0
    
    minutes = count === 0 ? minutes +1 : minutes
    seconds = count

    document.getElementById('timer').textContent = `${minutes} : ${seconds}`
}

// Starts ticker() and changes the color of the button for better UI. Tells the user "it's working"
const startButton = () => {
    interval = setInterval(() => { ticker() }, 1000)
    document.getElementById('mainButton').setAttribute('onclick', '')
    document.getElementById('mainButton').style.color = '#CCC'
}

// Stops ticker() and resets the original appearance and functionality of mainButton
const pauseButton = () => {
    clearInterval(interval)
    console.log('Paused')
    document.getElementById('mainButton').setAttribute('onclick', 'startButton()')
    document.getElementById('mainButton').style.color = '#7FFF00'
}

// Resets all variables and functions to original state without reloading the HTML page
const resetButton = () => {
    console.log('Resetting')
    clearInterval(interval)
    count = 0
    minutes = 0
    seconds = 0
    document.getElementById('timer').textContent = `${minutes} : ${seconds}`
    document.getElementById('mainButton').setAttribute('onclick', 'startButton()')
    document.getElementById('mainButton').style.color = '#7FFF00'
}

// Thanks for reading my code and let me know if you have any questions: github.com/maniacalmaynard/