const scrollToTargetElement = targetElement => targetElement.scrollIntoView({ behavior: "smooth" });

const projectsLink = document.getElementById('projects-link');
const projectsScreen = document.getElementById('projects-screen');
projectsLink.addEventListener('click', function () { scrollToTargetElement(projectsScreen) })

const aboutLink = document.getElementById('about-link')
const aboutScreen = document.getElementById('about-screen')
aboutLink.addEventListener('click', function () { scrollToTargetElement(aboutScreen) })

const navLogoLink = document.getElementById('navbar-logo')
const introScreen = document.getElementById('intro-screen')
navLogoLink.addEventListener('click', function () { scrollToTargetElement(introScreen) })