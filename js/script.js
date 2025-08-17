document.addEventListener("DOMContentLoaded", function() {
    const menuIcon = document.querySelector(".nav_mobile");
    const navLinks = document.querySelector(".nav_list");

    menuIcon.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
});
const customizeBtn = document.getElementById("customizeBtn");
const customizeSidebar = document.getElementById("customizeSidebar");
const closeSidebarBtn = document.getElementById("closeSidebar");


customizeSidebar.style.display = "none";

customizeBtn.addEventListener("click", () => {
    customizeBtn.style.display = "none";
    customizeSidebar.style.display = "block"; 
});

closeSidebarBtn.addEventListener("click", () => {
    customizeSidebar.style.display = "none";
    customizeBtn.style.display = "flex"; 
});

function updateColorVariable(variable, value) {
    document.documentElement.style.setProperty(variable, value);
}

document.getElementById('primaryColor').addEventListener('input', (e) => {
    updateColorVariable('--primary-color', e.target.value);
});
document.getElementById('secondaryColor').addEventListener('input', (e) => {
    updateColorVariable('--secondary-color', e.target.value);
});
document.getElementById('textColor').addEventListener('input', (e) => {
    updateColorVariable('--text-color', e.target.value);
});
document.getElementById('textColor2').addEventListener('input', (e) => {
    updateColorVariable('--text2-color', e.target.value);
});
document.getElementById('backgroundColor').addEventListener('input', (e) => {
    updateColorVariable('--background-color', e.target.value);
});
document.getElementById('backgroundColor2').addEventListener('input', (e) => {
    updateColorVariable('--background-color2', e.target.value);
});

const toggleBtn = document.getElementById('themeToggle');
const icon = toggleBtn.querySelector("i");
let darkMode = false;

    toggleBtn.addEventListener('click', () => {
    darkMode = !darkMode;

    if (darkMode) {
        // Dark theme
        document.documentElement.style.setProperty('--primary-color', '#725727ff');
        document.documentElement.style.setProperty('--secondary-color', '#f8f9fa');
        document.documentElement.style.setProperty('--text-color', '#ffffff');
        document.documentElement.style.setProperty('--background-color', '#212529');

        icon.classList.remove("fa-moon", "fa-regular");
        icon.classList.add("fa-sun", "fa-solid"); 
    } else {
        
        document.documentElement.style.setProperty('--primary-color', '#F9C265');
        document.documentElement.style.setProperty('--secondary-color', '#212529');
        document.documentElement.style.setProperty('--text-color', '#1C1715');
        document.documentElement.style.setProperty('--background-color', '#ffffff');

        icon.classList.remove("fa-sun", "fa-solid");
        icon.classList.add("fa-moon", "fa-regular"); 
    }
    });

