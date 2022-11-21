const prev = document.getElementById('prev-slide')
const next = document.getElementById('next-slide')
const circles = document.querySelectorAll('.so')

const selector = document.getElementById('selector')

selector.addEventListener('click', (e) => circleSelector(e))

function circleSelector(e) {
    clearInterval(autoPlayed)
    const currentCircle = ([].indexOf.call(circles, e.target))+1
    currentActive = currentCircle
    update()
}

let autoPlay = true

let currentActive = 1

next.addEventListener('click', goNext)

function goNext() {
    currentActive++
    
    if (currentActive > circles.length) {
        currentActive = 1
    }
    update()
}

prev.addEventListener('click', goBack)

function goBack() {
    currentActive--
    
    if (currentActive < 1) {
        currentActive = 5
    }
    update()
}

function update() {
    circles.forEach((circle, idx) => {
        if(currentActive===(idx+1)) {
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')
        }
    })
    console.log(currentActive)
}

function autoPlayed() {
    if(autoPlay) {
        goNext()
    }
}

setInterval(autoPlayed, 5000)
