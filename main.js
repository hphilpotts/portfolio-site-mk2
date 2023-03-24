const projectsLink = document.getElementById('projects-link');
const projectsScreen = document.getElementById('projects-screen');

function scrollToProjects(event) {
    event.preventDefault()
    projectsScreen.scrollIntoView({ behavior: "smooth" })
};

projectsLink.addEventListener('click', scrollToProjects, false)