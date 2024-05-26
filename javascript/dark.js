// No external minification tools are allowed in this assignment, so i manually minified this file.
// a formatting tool like prettier can easily make this readable in an ide.
function enableDarkMode(){document.body.classList.add("dark-mode"),localStorage.setItem("theme","dark")}function disableDarkMode(){document.body.classList.remove("dark-mode"),localStorage.setItem("theme","light")}function detectColorScheme(){let e="light";localStorage.getItem("theme")?e=localStorage.getItem("theme"):window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches&&(e="dark"),"dark"===e?enableDarkMode():disableDarkMode()}detectColorScheme(),enableDarkMode(),document.getElementById("dark-mode-toggle").addEventListener("click",()=>{"light"===localStorage.getItem("theme")?enableDarkMode():disableDarkMode()});