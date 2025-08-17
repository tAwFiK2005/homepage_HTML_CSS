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
