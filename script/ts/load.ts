document.addEventListener("DOMContentLoaded", (): void => {
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
    
    document.querySelectorAll(".language-trigger").forEach((trigger: HTMLElement) => {
        trigger.addEventListener("click", update_language);
    })

    document.querySelectorAll('.relevance-button').forEach((button: HTMLElement) => {
        button.addEventListener('click', toggle_irrelevant_content);
    });
    
    document.querySelectorAll(".palette").forEach((palette: Element) => {
        palette.addEventListener("click", () => {
            const palette_id: string | null = palette.getAttribute("data-id");
            if (palette_id) {
                choose_palette(palette_id);
            }
        });
    });
});
