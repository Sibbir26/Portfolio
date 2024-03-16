$(document).ready(function () {
    showFrontEndSkills();
    showBackEndSkills();
    showFrameworkSkills();
});

function showFrontEndSkills() {
    showSkills(frontEndSkills, "front-end-skills-container");
}

function showBackEndSkills() {
    showSkills(backEndSkills, "back-end-skills-container");
}

function showFrameworkSkills() {
    showSkills(dotNetFrameworkSkills, "framework-skills-container");
}

function showSkills(skills, skillsContainerId) {
    skills.forEach(function (skill, index) {
        let html = `<span class="flex-item" style="animation-delay: ${index * 0.2}s">${skill}</span>`;
        $(`#${skillsContainerId}`).append(html);
    });
}