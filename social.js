const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
const modeDisplay = document.querySelector(".modeDisplay");

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'light');
        modeDisplay.textContent = "Dark Mode";
    }
    else {        
        document.documentElement.setAttribute('data-theme', 'dark');
        modeDisplay.textContent = "Light Mode";
    }    
}

toggleSwitch.addEventListener('change', switchTheme, false);