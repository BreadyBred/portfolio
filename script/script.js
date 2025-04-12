function initialize_option_checkbox(){let t=document.querySelector(".optional-checkbox"),o=document.querySelector(".optional");t&&o&&t.addEventListener("change",()=>{var e=o.querySelector(".input_file");e&&(t.checked?(o.classList.remove("hide"),e.setAttribute("required","true")):(o.classList.add("hide"),e.removeAttribute("required")))})}function attribute_titles_to_panels(){var e=document.querySelectorAll(".function-title");let o=document.querySelectorAll(".functions-panel");e.length&&e.forEach(t=>{t.addEventListener("click",()=>{var e=document.querySelector(".function-title.selected"),e=(e&&e.classList.remove("selected"),o.forEach(e=>{e.classList.add("hide")}),t.getAttribute("data-id"));e&&((e=document.getElementById(e))&&e.classList.remove("hide"),t.classList.add("selected"))})})}function attribute_update_inputs_to_panels(){var t=document.querySelector(".open-update-panel");if(t){t=t.querySelectorAll(".input_radio");let e=document.querySelectorAll(".project-infos");t.forEach(o=>{o.addEventListener("change",()=>{e.forEach(e=>{e.classList.add("hide");var t=e.getAttribute("data-id");t&&t===o.id&&e.classList.remove("hide")})})})}}function activate_popup_fade_out(){let e=document.querySelector(".popup");e&&setTimeout(()=>{e.classList.add("fade-out")},5e3)}function initialize_customs_input_file(){var e=document.querySelectorAll(".input_file");e.length&&e.forEach(o=>{o.addEventListener("change",e=>{var t,e=e.target;e.files&&0<e.files.length&&(e=e.files[0].name,t=o.nextElementSibling)&&(t.innerHTML=e)})})}function update_competence_category_on_delete(){let o=document.querySelector(".competence_list");o&&o.addEventListener("change",()=>{var e=o.options[o.selectedIndex].parentElement,t=document.getElementById("category");t&&e&&(t.value=e.label)})}document.addEventListener("DOMContentLoaded",()=>{initialize_option_checkbox(),attribute_titles_to_panels(),attribute_update_inputs_to_panels(),activate_popup_fade_out(),initialize_customs_input_file(),update_competence_category_on_delete(),load_palettes().then(()=>{initialize_palette(get_palette())}),document.addEventListener("click",hide_panels),document.querySelectorAll(".palette").forEach(t=>{t.addEventListener("click",()=>{var e=t.getAttribute("data-id");e&&choose_palette(e)})})});var __awaiter=this&&this.__awaiter||function(e,i,r,c){return new(r=r||Promise)(function(o,t){function n(e){try{l(c.next(e))}catch(e){t(e)}}function a(e){try{l(c.throw(e))}catch(e){t(e)}}function l(e){var t;e.done?o(e.value):((t=e.value)instanceof r?t:new r(function(e){e(t)})).then(n,a)}l((c=c.apply(e,i||[])).next())})};let palettes=[];function get_palette(){var e=document.cookie.split("; ").find(e=>e.startsWith("color_palette="));if(e)return e.split("=")[1];throw new Error("Color palette cookie not found")}function get_active_palettes_amount(){return palettes.length}function choose_palette(e){var t=new Date,t=(t.setFullYear(t.getFullYear()+10),t.toUTCString());document.cookie="color_palette=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; SameSite=None; Secure",document.cookie=`color_palette=${e}; expires=${t}; path=/; SameSite=None; Secure`,initialize_palette(get_palette(),!1)}function load_palettes(){return __awaiter(this,void 0,void 0,function*(){var e=yield(yield fetch(get_site_root()+"data/utilities.json")).json();palettes=e.palettes||[]})}function initialize_palette(a,e=!0){let t=["ac","bc","bg","bs","fc","tdc"],o=(["a","as","aux","bg","s"].forEach(n=>{t.forEach(o=>{document.querySelectorAll("."+n+"-"+o).forEach(e=>{var t=n+"-"+o+"-";remove_classes_from_element(e,t),e.classList.add(t+a)}),document.querySelectorAll("."+n+"-"+o+"-hv").forEach(e=>{var t=n+"-"+o+"-";remove_classes_from_element(e,t,"hover"),e.classList.add(t+"-hv-"+a)})})}),"button-");document.querySelectorAll(".button").forEach(e=>{remove_classes_from_element(e,o),e.classList.add(o+a)}),e||((e=document.querySelector('link[rel="shortcut icon"]'))&&change_source(e,"href",a),(e=document.getElementById("main-logo"))&&(e.src=get_images_folder()+`logo/${a}/logo_256.png`),document.querySelectorAll(".competence").forEach(t=>{let o=t.src;palettes.forEach(e=>{o=(o=o.replace(e[0],palettes[parseInt(a)][0])).replace(e[1],palettes[parseInt(a)][1]),t.src=o})}),document.querySelectorAll(".contact-logo").forEach(e=>{change_source(e,"src",a)}))}function change_source(t,o,n){var a="href"===o?t.href:t.src;for(let e=0;e<=get_active_palettes_amount();e++)a.includes(e.toString())&&("href"===o?t.href=a.split(e.toString()).join(n):t.src=a.split(e.toString()).join(n))}function remove_classes_from_element(t,o,e=null){let n;n="hover"===e?"hv-":"";for(let e=0;e<get_active_palettes_amount();e++)t.classList.remove(o+n+e)}function hide_panels(e={}){var e=e.target;let t=null==(e=null==e?void 0:e.classList)?void 0:e.contains("palette-trigger");document.querySelectorAll(".palette").forEach(e=>{e.style.display=t&&"block"!==e.style.display?"block":"none"})}function get_site_root(e=!0){return"localhost"===window.location.hostname?"http://localhost/travail/portfolio/":e?"https://romain-gerard.com/":"http://romain-gerard.com/"}function get_images_folder(){return get_site_root()+"medias/images/"}
