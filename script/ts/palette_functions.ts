interface PaletteData {
	palettes: string[];
	[key: string]: any;
}
  
let palettes: string[] = [];

// Retrieve the available palettes
function get_palette(): string {
	const cookie_row: string | undefined = document.cookie
	  .split('; ')
	  .find(row => row.startsWith('color_palette='));
	
	if (!cookie_row) {
	  throw new Error('Color palette cookie not found');
	}
	
	return cookie_row.split('=')[1];
}

function get_active_palettes_amount(): number {
	return palettes.length;
}

function choose_palette(palette_id: string): void {
	const expiration_date: Date = new Date();
	expiration_date.setFullYear(expiration_date.getFullYear() + 10);
	const expiring_time = expiration_date.toUTCString();
  
	// Clear existing cookie first
	document.cookie = "color_palette=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; SameSite=None; Secure";
	
	// Set new cookie
	document.cookie = `color_palette=${palette_id}; expires=${expiring_time}; path=/; SameSite=None; Secure`;
	
	initialize_palette(get_palette(), false);
}

async function load_palettes(): Promise<void> {
	const response: Response = await fetch(`${get_site_root()}data/utilities.json`);
	const data: PaletteData = await response.json();
	palettes = data.palettes || [];
}

function initialize_palette(set_palette: string, landing: boolean = true): void {
    /*
    element - color_type
    element - color_type - palette

    elements:
        a: accent
        ac: accent-seethrough
        aux: auxiliary
        bg: background
        s: secondary
        
    color_types:
        ac: accent-color
        bg: background
        bc: border-color
        bs: box-shadow
        fc: font-color
        tdc: text-decoration-color
    */
    const elements: string[] = ['a', 'as', 'aux', 'bg', 's'];
    const color_types: string[] = ['ac', 'bc', 'bg', 'bs', 'fc', 'tdc'];

    // Elements généraux
    elements.forEach((element: string) => {
        color_types.forEach((color_type: string) => {
            const elements_on_page: NodeListOf<Element> = document.querySelectorAll('.' + element + '-' + color_type);
            elements_on_page.forEach((element_on_page: Element) => {
                const class_name: string = element + '-' + color_type + '-';
                remove_classes_from_element(element_on_page as HTMLElement, class_name);

                element_on_page.classList.add(class_name + set_palette);
            });
            
            const elements_on_page_hover: NodeListOf<Element> = document.querySelectorAll('.' + element + '-' + color_type + '-hv');
            elements_on_page_hover.forEach((element_on_page_hover: Element) => {
                const class_name: string = element + '-' + color_type + '-';
                remove_classes_from_element(element_on_page_hover as HTMLElement, class_name, 'hover');

                element_on_page_hover.classList.add(class_name + '-hv-' + set_palette);
            });
        });
    });

    // Boutons
    const button_class_name: string = 'button-';
    const buttons: NodeListOf<Element> = document.querySelectorAll('.button');
    buttons.forEach((button: Element) => {
        remove_classes_from_element(button as HTMLElement, button_class_name);
        button.classList.add(button_class_name + set_palette);
    });

    if (landing) {
        return;
    }
    
    // Changement dynamique de palette
    // Favicon
    const favicon: Element | null = document.querySelector('link[rel="shortcut icon"]');
    if (favicon) {
        change_source(favicon as HTMLElement, 'href', set_palette);
    }

    // Logo
    const main_logo: HTMLElement | null = document.getElementById('main-logo');
    if (main_logo) {
        (main_logo as HTMLImageElement).src = `${get_images_folder()}logo/${set_palette}/logo_256.png`;
    }

    // Compétences
    document.querySelectorAll('.competence').forEach((competence: Element) => {
        let previous_src: string = (competence as HTMLImageElement).src;
        palettes.forEach((palette: string) => {
            // auxiliary color
            previous_src = previous_src.replace(palette[0], palettes[parseInt(set_palette)][0]);

            // accent color
            previous_src = previous_src.replace(palette[1], palettes[parseInt(set_palette)][1]);

            (competence as HTMLImageElement).src = previous_src;
        });
    });

    // Logo contact
    document.querySelectorAll('.contact-logo').forEach((contact_logo: Element) => {
        change_source(contact_logo as HTMLElement, 'src', set_palette);
    });
}

// Modify sources depending on the Palette
function change_source(target: HTMLElement, type: string, new_palette: string): void {
    const previous_source: string = (type === 'href') 
        ? (target as HTMLAnchorElement).href 
        : (target as HTMLImageElement).src;

    for (let i: number = 0; i <= get_active_palettes_amount(); i++) {
        if (previous_source.includes(i.toString())) {
            if (type === 'href') {
                (target as HTMLAnchorElement).href = previous_source.split(i.toString()).join(new_palette);
            } else {
                (target as HTMLImageElement).src = previous_source.split(i.toString()).join(new_palette);
            }
        }
    }
}

function remove_classes_from_element(element: HTMLElement, class_name: string, type: string | null = null): void {
    let additional_parameter: string;
    switch(type) {
        case 'hover':
            additional_parameter = 'hv-';
            break;
        default:
            additional_parameter = '';
            break;
    }

    for (let i: number = 0; i < get_active_palettes_amount(); i++) {
        element.classList.remove(class_name + additional_parameter + i);
    }
}

function hide_panels(event: Event = {} as Event): void {
    const target: HTMLElement | null = event.target as HTMLElement;
    const is_trigger: boolean = target?.classList?.contains('palette-trigger');
    
    document.querySelectorAll('.palette').forEach((element: Element) => {
        (element as HTMLElement).style.display = is_trigger && 
            (element as HTMLElement).style.display !== 'block' ? 'block' : 'none';
    });
}
