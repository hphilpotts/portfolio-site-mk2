// Navigation

const scrollToTargetElement = targetElement => targetElement.scrollIntoView({ behavior: "smooth" });

const navLogoLink = document.getElementById('navbar-logo')
const downArrow = document.getElementById('down-arrow')
const introScreen = document.getElementById('intro-screen')
navLogoLink.addEventListener('click', function () { scrollToTargetElement(introScreen) })
downArrow.addEventListener('click', function () { scrollToTargetElement(introScreen) })

const projectsLink = document.getElementById('projects-link')
const projectsSpan = document.getElementById('projects-span')
const projectsScreen = document.getElementById('projects-screen')
projectsLink.addEventListener('click', function () { scrollToTargetElement(projectsScreen) })
projectsSpan.addEventListener('click', function () { scrollToTargetElement(projectsScreen) })

const aboutLink = document.getElementById('about-link')
const aboutSpan = document.getElementById('about-span')
const aboutScreen = document.getElementById('about-screen')
aboutLink.addEventListener('click', function () { scrollToTargetElement(aboutScreen) })
aboutSpan.addEventListener('click', function () { scrollToTargetElement(aboutScreen) })

// Project Slider Behaviour

const sliderIcons = Array.prototype.slice.call( document.getElementsByClassName('icon-img') )
const slides = Array.prototype.slice.call( document.getElementsByClassName('slide') )

let sliderBCRLeft = 0
const getSliderBCRLeft = () => sliderBCRLeft = document.getElementById('slider').getBoundingClientRect().left
getSliderBCRLeft()
window.onresize = getSliderBCRLeft

const checkAllSliderBCRLefts = () => {
    for (let i = 0; i < 7; i++) {
        if (checkSliderBCRLeft(i, sliderBCRLeft)) {
            return i
        }
    }
}

const checkSliderBCRLeft = (index, checkpoint) => {
    const proximityBetweenElements = (slides[`${index}`].getBoundingClientRect().left / checkpoint)
    return (proximityBetweenElements > 0.9 && proximityBetweenElements < 1.1)
}

const illuminateIconsAtIndeces = {
    0: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
    1: [0, 1, 2, 4, 5, 6, 7, 12, 13, 14],
    2: [0, 1, 2, 3],
    3: [0, 1, 2, 4, 5, 6, 7, 12, 13, 14],
    4: [0, 1, 8, 9, 10, 12],
    5: [0, 1, 2, 4, 5, 7, 11, 15],
    6: [0, 1, 2, 15],
}

slider.addEventListener('scroll', function(){
    const currentSlide = checkAllSliderBCRLefts()
    const currentIlluminations = illuminateIconsAtIndeces[currentSlide]
    if (currentSlide === undefined) {
        $(".icon-img").fadeOut(250)
    } else {
        currentIlluminations.forEach(index => {
            $(`[index=${index}]`).fadeIn(250)
        })
    }
})
