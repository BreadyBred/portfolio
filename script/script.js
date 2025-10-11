function initialize_option_checkbox() {
    const optional_checkbox = document.querySelector(".optional-checkbox");
    const optional_content = document.querySelector(".optional");
    if (!optional_checkbox || !optional_content) {
        return;
    }
    optional_checkbox.addEventListener("change", () => {
        const input_file = optional_content.querySelector(".input_file");
        if (!input_file) {
            return;
        }
        if (optional_checkbox.checked) {
            optional_content.classList.remove("hide");
            input_file.setAttribute("required", "true");
        }
        else {
            optional_content.classList.add("hide");
            input_file.removeAttribute("required");
        }
    });
}
function attribute_titles_to_panels() {
    const functions_titles = document.querySelectorAll(".function-title");
    const functions_panels = document.querySelectorAll(".functions-panel");
    if (!functions_titles.length) {
        return;
    }
    functions_titles.forEach((functions_title) => {
        functions_title.addEventListener("click", () => {
            // Reset style
            const currently_selected = document.querySelector(".function-title.selected");
            if (currently_selected) {
                currently_selected.classList.remove("selected");
            }
            functions_panels.forEach((panel) => {
                panel.classList.add("hide");
            });
            // Update style on the selected one
            const data_id = functions_title.getAttribute("data-id");
            if (data_id) {
                const target_panel = document.getElementById(data_id);
                if (target_panel) {
                    target_panel.classList.remove("hide");
                }
                functions_title.classList.add("selected");
            }
        });
    });
}
function attribute_update_inputs_to_panels() {
    const update_panel = document.querySelector(".open-update-panel");
    if (!update_panel) {
        return;
    }
    const radio_inputs = update_panel.querySelectorAll(".input_radio");
    const project_infos_panels = document.querySelectorAll(".project-infos");
    radio_inputs.forEach((radio_input) => {
        radio_input.addEventListener("change", () => {
            project_infos_panels.forEach((project_infos_panel) => {
                project_infos_panel.classList.add("hide");
                const panel_data_id = project_infos_panel.getAttribute("data-id");
                if (panel_data_id && panel_data_id === radio_input.id) {
                    project_infos_panel.classList.remove("hide");
                }
            });
        });
    });
}
function activate_popup_fade_out() {
    const popup = document.querySelector(".popup");
    if (!popup) {
        return;
    }
    setTimeout(() => {
        popup.classList.add("fade-out");
    }, 5000);
}
function initialize_customs_input_file() {
    const inputs_file = document.querySelectorAll(".input_file");
    if (!inputs_file.length) {
        return;
    }
    inputs_file.forEach((input_file) => {
        input_file.addEventListener("change", (event) => {
            const target = event.target;
            if (target.files && target.files.length > 0) {
                const new_filename = target.files[0].name;
                const fake_input = input_file.nextElementSibling;
                if (fake_input) {
                    fake_input.innerHTML = new_filename;
                }
            }
        });
    });
}
function update_competence_category_on_delete() {
    const competence_choice = document.querySelector(".competence_list");
    if (!competence_choice) {
        return;
    }
    competence_choice.addEventListener("change", () => {
        const selected_option = competence_choice.options[competence_choice.selectedIndex];
        const optgroup = selected_option.parentElement;
        const category_input = document.getElementById("category");
        if (!category_input || !optgroup) {
            return;
        }
        category_input.value = optgroup.label;
    });
}
function toggle_irrelevant_content(event) {
    const target = event.currentTarget;
    const class_list = Array.from(target.classList);
    const category = class_list.find((class_name) => class_name !== 'relevance-button');
    if (!category) {
        return;
    }
    const elements = document.querySelectorAll(`.irrelevant.${category}`);
    if (!elements.length) {
        return;
    }
    const are_currently_visible = Array.from(elements).some((element) => element.style.display !== "none");
    elements.forEach((element) => {
        element.style.display = are_currently_visible ? "none" : "flex";
    });
    target.textContent = are_currently_visible ? t("Voir tout") : t("Réduire");
}
function get_current_language() {
    const match = document.cookie.match(/(?:^|;\s*)lang=([^;]+)/);
    const lang = match === null || match === void 0 ? void 0 : match[1];
    return lang;
}
function t(str) {
    const translations = {
        "Voir tout": "See all",
        "Réduire": "Reduce"
    };
    if (get_current_language() === "fr") {
        return str;
    }
    return translations[str] || str;
}
function update_language() {
    const current_cookie = document.cookie.includes("lang=fr") ? "fr" : "en";
    const new_cookie = (current_cookie === "en") ? "fr" : "en";
    document.cookie = `lang=${new_cookie}; path=/; max-age=${60 * 60 * 24 * 365 * 10}`;
    location.reload();
}
document.addEventListener("DOMContentLoaded", () => {
    initialize_option_checkbox();
    attribute_titles_to_panels();
    attribute_update_inputs_to_panels();
    activate_popup_fade_out();
    initialize_customs_input_file();
    update_competence_category_on_delete();
    document.querySelectorAll(".language-trigger").forEach((trigger) => {
        trigger.addEventListener("click", update_language);
    });
    document.querySelectorAll('.relevance-button').forEach((button) => {
        button.addEventListener('click', toggle_irrelevant_content);
    });
});
function get_site_root(secured = true) {
    if (window.location.hostname === "localhost") {
        return "http://localhost/travail/portfolio";
    }
    if (!secured) {
        return "http://romain-gerard.com";
    }
    return "https://romain-gerard.com";
}
function get_images_folder() {
    return `${get_site_root()}/medias/images`;
}
