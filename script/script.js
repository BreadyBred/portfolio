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
    load_palettes().then(() => {
        initialize_palette(get_palette());
    });
    document.addEventListener("click", hide_panels);
    document.querySelectorAll(".language-trigger").forEach((trigger) => {
        trigger.addEventListener("click", update_language);
    });
    document.querySelectorAll('.relevance-button').forEach((button) => {
        button.addEventListener('click', toggle_irrelevant_content);
    });
    document.querySelectorAll(".palette").forEach((palette) => {
        palette.addEventListener("click", () => {
            const palette_id = palette.getAttribute("data-id");
            if (palette_id) {
                choose_palette(palette_id);
            }
        });
    });
});
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let palettes = [];
// Retrieve the available palettes
function get_palette() {
    const cookie_row = document.cookie
        .split("; ")
        .find(row => row.startsWith("color_palette="));
    if (!cookie_row) {
        throw new Error("Color palette cookie not found");
    }
    return cookie_row.split("=")[1];
}
function get_active_palettes_amount() {
    return palettes.length;
}
function choose_palette(palette_id) {
    const expiration_date = new Date();
    expiration_date.setFullYear(expiration_date.getFullYear() + 10);
    const expiring_time = expiration_date.toUTCString();
    // Clear existing cookie first
    document.cookie = "color_palette=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; SameSite=None; Secure";
    // Set new cookie
    document.cookie = `color_palette=${palette_id}; expires=${expiring_time}; path=/; SameSite=None; Secure`;
    initialize_palette(get_palette(), false);
}
function load_palettes() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`${get_site_root()}/data/utilities.json`);
        const data = yield response.json();
        palettes = data.palettes || [];
    });
}
function initialize_palette(set_palette, landing = true) {
    const elements = ["a", "as", "aux", "bg", "s"];
    const color_types = ["ac", "bc", "bg", "bs", "fc", "tdc"];
    const all_elements = document.querySelectorAll("[class]");
    all_elements.forEach((element) => {
        const class_list = Array.from(element.classList);
        class_list.forEach((class_name) => {
            for (const el of elements) {
                for (const color_type of color_types) {
                    const base = `${el}-${color_type}`;
                    const hover = `${el}-${color_type}-hv`;
                    if (class_name === base) {
                        remove_classes_from_element(element, `${base}-`);
                        element.classList.add(`${base}-${set_palette}`);
                    }
                    else if (class_name === hover) {
                        remove_classes_from_element(element, `${base}-`, "hover");
                        element.classList.add(`${base}-hv-${set_palette}`);
                    }
                }
            }
        });
    });
    // Boutons
    const buttons = document.querySelectorAll(".button");
    buttons.forEach((button) => {
        remove_classes_from_element(button, "button-");
        button.classList.add(`button-${set_palette}`);
    });
    if (landing)
        return;
    // Favicon
    const favicon = document.querySelector("link[rel='shortcut icon']");
    if (favicon) {
        change_source(favicon, "href", set_palette);
    }
    // Logo principal
    const main_logo = document.getElementById("main-logo");
    if (main_logo) {
        main_logo.src = `${get_images_folder()}/logo/${set_palette}/logo_256.png`;
    }
    // Compétences
    const new_palette = palettes[parseInt(set_palette)];
    document.querySelectorAll(".competence").forEach((comp) => {
        const img = comp;
        let src = img.src;
        for (const palette of palettes) {
            src = src.replace(palette[0], new_palette[0]).replace(palette[1], new_palette[1]);
        }
        img.src = src;
    });
    // Logos contact
    document.querySelectorAll(".contact-logo").forEach((logo) => {
        change_source(logo, "src", set_palette);
    });
}
// Modify sources depending on the Palette
function change_source(target, type, new_palette) {
    const previous_source = (type === "href")
        ? target.href
        : target.src;
    for (let i = 0; i <= get_active_palettes_amount(); i++) {
        if (previous_source.includes(i.toString())) {
            if (type === "href") {
                target.href = previous_source.split(i.toString()).join(new_palette);
            }
            else {
                target.src = previous_source.split(i.toString()).join(new_palette);
            }
        }
    }
}
function remove_classes_from_element(element, class_name, type = null) {
    let additional_parameter;
    switch (type) {
        case "hover":
            additional_parameter = "hv-";
            break;
        default:
            additional_parameter = "";
            break;
    }
    for (let i = 0; i < get_active_palettes_amount(); i++) {
        element.classList.remove(class_name + additional_parameter + i);
    }
}
function hide_panels(event = {}) {
    var _a;
    const target = event.target;
    const is_trigger = (_a = target === null || target === void 0 ? void 0 : target.classList) === null || _a === void 0 ? void 0 : _a.contains("palette-trigger");
    document.querySelectorAll(".palette").forEach((element) => {
        element.style.display = is_trigger &&
            element.style.display !== "block" ? "block" : "none";
    });
}
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
