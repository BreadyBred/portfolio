function e(){let t=document.querySelector(".optional-checkbox"),n=document.querySelector(".optional");t&&t.addEventListener("change",()=>{var e=n.querySelector(".input_file");t.checked?(n.classList.remove("hide"),e.setAttribute("required",!0)):(n.classList.add("hide"),e.removeAttribute("required"))})}function t(){let n=document.querySelectorAll(".function-title"),c=document.querySelectorAll(".functions-panel");n&&n.forEach(t=>{t.addEventListener("click",()=>{n.forEach(e=>{e.classList.remove("selected")}),c.forEach(e=>{e.classList.add("hide")});var e=t.attributes["data-id"].nodeValue;document.getElementById(e).classList.remove("hide"),t.classList.add("selected")})})}function n(){var t=document.querySelector(".open-update-panel");if(t){t=t.querySelectorAll(".input_radio");let e=document.querySelectorAll(".project-infos");t.forEach(t=>{t.addEventListener("change",()=>{e.forEach(e=>{e.classList.add("hide"),e.attributes["data-id"].nodeValue==t.id&&e.classList.remove("hide")})})})}}function c(){var e=document.querySelector(".popup");e&&setTimeout(function(){e.classList.add("fade-out")},5e3)}function o(){var e=document.querySelectorAll(".input_file");e&&e.forEach(n=>{n.addEventListener("change",e=>{var e=e.target.files[0].name,t=n.nextElementSibling;console.log(e),t.innerHTML=e})})}function l(){let t=document.querySelector(".competence_list");t&&t.addEventListener("change",()=>{var e=t.options[t.selectedIndex].parentElement;document.getElementById("category").value=e.label})}