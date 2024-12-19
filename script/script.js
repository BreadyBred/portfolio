document.addEventListener('DOMContentLoaded', () => {
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

	document.querySelectorAll('.palette').forEach(palette => {
		palette.addEventListener('click', () => {
			choose_palette(palette.getAttribute('data-id'));
		});
	});
});

function hide_panels(event = {}) {
    const is_trigger = event.target?.classList.contains('palette-trigger');
    document.querySelectorAll('.palette').forEach(element => {
        element.style.display = is_trigger && element.style.display !== 'block' ? 'block' : 'none';
    });
}