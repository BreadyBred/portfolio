document.addEventListener("DOMContentLoaded", (): void => {
    initialize_option_checkbox();
    attribute_titles_to_panels();
    attribute_update_inputs_to_panels();
    activate_popup_fade_out();
    initialize_customs_input_file();
    update_competence_category_on_delete();
    
    document.querySelectorAll(".language-trigger").forEach((trigger: HTMLElement) => {
        trigger.addEventListener("click", update_language);
    })

    document.querySelectorAll('.relevance-button').forEach((button: HTMLElement) => {
        button.addEventListener('click', toggle_irrelevant_content);
    });
});
