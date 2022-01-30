const slides = {
    1: document.querySelectorAll('[data-slide="1"]'),
    2: document.querySelectorAll('[data-slide="2"]'),
    3: document.querySelectorAll('[data-slide="3"]'),
    4: document.querySelectorAll('[data-slide="4"]'),
    5: document.querySelectorAll('[data-slide="5"]')
}

const slideImage = {
    1: document.querySelectorAll('[data-slide-image="1"]'),
    2: document.querySelectorAll('[data-slide-image="2"]'),
    3: document.querySelectorAll('[data-slide-image="3"]'),
    4: document.querySelectorAll('[data-slide-image="4"]'),
    5: document.querySelectorAll('[data-slide-image="5"]'),
}

const slideNav = {
    1: document.querySelector('[data-slide-nav="1"]'),
    2: document.querySelector('[data-slide-nav="2"]'),
    3: document.querySelector('[data-slide-nav="3"]'),
    4: document.querySelector('[data-slide-nav="4"]'),
    5: document.querySelector('[data-slide-nav="5"]'),
}


let currentSlide = 1
let prevSlide = 0

const ANIMATION_TIME = 500

const nextButton = document.querySelector('.js-arrow-right')
const prevButton = document.querySelector('.js-arrow-left')

const left = document.querySelector('.left')

function init() {
    updateSlide()
}

function updateSlide() {

    if (prevSlide !== 0) {
        slides[prevSlide].forEach(el => {
            el.classList.add('leave')
        })
        setTimeout(() => {
            slides[prevSlide].forEach(el => {
                el.classList.remove('active')
            })

            slides[prevSlide].forEach(el => {
                el.classList.remove('leave')

            })

        }, 1000)
        left.classList.toggle('.js-arrow-left')
    }

    slides[currentSlide].forEach(el => {
        el.classList.add('active')
    })

    updateNav()
    updateImage()

}
function updateImage() {

    if (prevSlide !== 0) {
        slideImage[prevSlide].forEach(el => {
            el.classList.add('right')
        })
        setTimeout(() => {
            slideImage[prevSlide].forEach(el => {
                el.classList.remove('active')

            })

            slideImage[prevSlide].forEach(el => {
                el.classList.remove('right')
                el.classList.add('left')

            })

        }, 1000)
    }

    slideImage[currentSlide].forEach(el => {
        el.classList.add('active')
        el.classList.remove('left')

    })
}

init()

nextButton.addEventListener('click', () => {
    prevSlide = currentSlide
    currentSlide++
    updateSlide()
})
prevButton.addEventListener('click', () => {
    if (currentSlide === 1) return
    prevSlide = currentSlide
    currentSlide--
    updateSlide()
})


function updateNav() {
    for (let i = 1; i <= 5; i++) {
        console.log(i)
        console.log(slideNav[i])
        slideNav[i].classList.toggle('active', i <= currentSlide)
    }
}

