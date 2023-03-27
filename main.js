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
const sliderBCRLeft = document.getElementById('slider').getBoundingClientRect().left;
const slides = Array.prototype.slice.call( document.getElementsByClassName('slide') )

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

// const illuminateIconsAtIndeces = {
//     0: [],
//     1: [0, 1, 2, 4, 5],
//     2: [],
//     3: [],
//     4: [],
//     5: [],
//     6: [],
// }

slider.addEventListener('scroll', function(){
    const currentSlide = checkAllSliderBCRLefts()
    if (currentSlide === undefined) {
        sliderIcons.forEach(icon => icon.classList.add('hidden'))
    } else {
        sliderIcons[`${currentSlide}`].classList.add('hidden')
    }
})