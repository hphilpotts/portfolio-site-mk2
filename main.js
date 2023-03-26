const scrollToTargetElement = targetElement => targetElement.scrollIntoView({ behavior: "smooth" });

const navLogoLink = document.getElementById('navbar-logo')
const downArrow = document.getElementById('down-arrow')
const introScreen = document.getElementById('intro-screen')
navLogoLink.addEventListener('click', function () { scrollToTargetElement(introScreen) })
downArrow.addEventListener('click', function () { scrollToTargetElement(introScreen) })

const projectsLink = document.getElementById('projects-link');
const projectsScreen = document.getElementById('projects-screen');
projectsLink.addEventListener('click', function () { scrollToTargetElement(projectsScreen) })

const aboutLink = document.getElementById('about-link')
const aboutScreen = document.getElementById('about-screen')
aboutLink.addEventListener('click', function () { scrollToTargetElement(aboutScreen) })