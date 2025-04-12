function initialize_option_checkbox(): void {
    const optional_checkbox: HTMLInputElement | null = document.querySelector('.optional-checkbox');
    const optional_content: HTMLInputElement | null = document.querySelector('.optional');

    if (!optional_checkbox || !optional_content) {
        return;
    }

    optional_checkbox.addEventListener('change', () => {
        const input_file: HTMLInputElement | null = optional_content.querySelector('.input_file');
        
        if (!input_file) {
            return;
        }

        if (optional_checkbox.checked) {
            optional_content.classList.remove('hide');
            input_file.setAttribute('required', 'true');
        } else {
            optional_content.classList.add('hide');
            input_file.removeAttribute('required');
        }
    });
}

function attribute_titles_to_panels(): void {
    const functions_titles: NodeListOf<Element> = document.querySelectorAll('.function-title');
    const functions_panels: NodeListOf<Element> = document.querySelectorAll('.functions-panel');

    if (!functions_titles.length) {
        return;
    }

    functions_titles.forEach((functions_title: Element) => {
        functions_title.addEventListener('click', () => {
            // Reset style
            const currently_selected: HTMLElement | null = document.querySelector('.function-title.selected');
            if (currently_selected) {
                currently_selected.classList.remove('selected');
            }

            functions_panels.forEach((panel: Element) => {
                panel.classList.add('hide');
            });

            // Update style on the selected one
            const data_id: string |null = functions_title.getAttribute('data-id');

            if (data_id) {
                const target_panel: HTMLElement | null = document.getElementById(data_id);

                if (target_panel) {
                    target_panel.classList.remove('hide');
                }

                functions_title.classList.add('selected');
            }
        });
    });
}

function attribute_update_inputs_to_panels(): void {
    const update_panel: HTMLElement | null = document.querySelector('.open-update-panel');

    if (!update_panel) {
        return;
    }

    const radio_inputs: NodeListOf<HTMLInputElement> = update_panel.querySelectorAll('.input_radio');
    const project_infos_panels: NodeListOf<Element> = document.querySelectorAll('.project-infos');

    radio_inputs.forEach((radio_input: HTMLInputElement) => {
        radio_input.addEventListener('change', () => {
            project_infos_panels.forEach((project_infos_panel: Element) => {
                project_infos_panel.classList.add('hide');
                const panel_data_id: string | null = project_infos_panel.getAttribute('data-id');

                if (panel_data_id && panel_data_id === radio_input.id) {
                    project_infos_panel.classList.remove('hide');
                }
            });
        });
    });
}

function activate_popup_fade_out(): void {
    const popup: HTMLElement | null = document.querySelector('.popup');

    if (!popup) {
        return;
    }

    setTimeout(() => {
        popup.classList.add('fade-out');
    }, 5000);
}

function initialize_customs_input_file(): void {
    const inputs_file: NodeListOf<HTMLInputElement> = document.querySelectorAll('.input_file');

    if (!inputs_file.length) {
        return;
    }
    
    inputs_file.forEach((input_file: HTMLInputElement) => {
        input_file.addEventListener('change', (event: Event) => {
            const target = event.target as HTMLInputElement;
            
            if (target.files && target.files.length > 0) {
                const new_filename: string = target.files[0].name;
                const fake_input = input_file.nextElementSibling as HTMLElement | null;
                
                if (fake_input) {
                    fake_input.innerHTML = new_filename;
                }
            }
        });
    });
}

function update_competence_category_on_delete(): void {
    const competence_choice: HTMLSelectElement | null = document.querySelector('.competence_list');

    if (!competence_choice) {
        return;
    }
    
    competence_choice.addEventListener('change', () => {
        const selected_option: HTMLOptionElement = competence_choice.options[competence_choice.selectedIndex];
        const optgroup = selected_option.parentElement as HTMLOptGroupElement | null;
        const category_input = document.getElementById('category') as HTMLInputElement | null;
        
        if (!category_input || !optgroup) {
			return;
		}
		
		category_input.value = optgroup.label;
    });
}
