interface PaletteData {
	palettes: string[];
	[key: string]: any;
}
  
let palettes: string[] = [];

// Retrieve the available palettes
function get_palette(): string {
	const cookie_row: string | undefined = document.cookie
	  .split("; ")
	  .find(row => row.startsWith("color_palette="));
	
	if (!cookie_row) {
	  throw new Error("Color palette cookie not found");
	}
	
	return cookie_row.split("=")[1];
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
	const response: Response = await fetch(`${get_site_root()}/data/utilities.json`);
	const data: PaletteData = await response.json();
	palettes = data.palettes || [];
}

function initialize_palette(set_palette: string, landing: boolean = true): void {
    const elements: string[] = ["a", "as", "aux", "bg", "s"];
    const color_types: string[] = ["ac", "bc", "bg", "bs", "fc", "tdc"];

    const all_elements: NodeListOf<Element> = document.querySelectorAll("[class]");

    all_elements.forEach((element: Element) => {
        const class_list: string[] = Array.from(element.classList);

        class_list.forEach((class_name: string) => {
            for (const el of elements) {
                for (const color_type of color_types) {
                    const base = `${el}-${color_type}`;
                    const hover = `${el}-${color_type}-hv`;

                    if (class_name === base) {
                        remove_classes_from_element(element as HTMLElement, `${base}-`);
                        element.classList.add(`${base}-${set_palette}`);
                    } else if (class_name === hover) {
                        remove_classes_from_element(element as HTMLElement, `${base}-`, "hover");
                        element.classList.add(`${base}-hv-${set_palette}`);
                    }
                }
            }
        });
    });

    // Boutons
    const buttons = document.querySelectorAll(".button");
    buttons.forEach((button: Element) => {
        remove_classes_from_element(button as HTMLElement, "button-");
        button.classList.add(`button-${set_palette}`);
    });

    if (landing) return;

    // Favicon
    const favicon = document.querySelector("link[rel='shortcut icon']") as HTMLLinkElement | null;
    if (favicon) {
        change_source(favicon, "href", set_palette);
    }

    // Logo principal
    const main_logo = document.getElementById("main-logo") as HTMLImageElement | null;
    if (main_logo) {
        main_logo.src = `${get_images_folder()}/logo/${set_palette}/logo_256.png`;
    }

    // Compétences
    const new_palette = palettes[parseInt(set_palette)];
    document.querySelectorAll(".competence").forEach((comp: Element) => {
        const img = comp as HTMLImageElement;
        let src = img.src;
        for (const palette of palettes) {
            src = src.replace(palette[0], new_palette[0]).replace(palette[1], new_palette[1]);
        }
        img.src = src;
    });

    // Logos contact
    document.querySelectorAll(".contact-logo").forEach((logo: Element) => {
        change_source(logo as HTMLElement, "src", set_palette);
    });
}

// Modify sources depending on the Palette
function change_source(target: HTMLElement, type: string, new_palette: string): void {
    const previous_source: string = (type === "href") 
        ? (target as HTMLAnchorElement).href 
        : (target as HTMLImageElement).src;

    for (let i: number = 0; i <= get_active_palettes_amount(); i++) {
        if (previous_source.includes(i.toString())) {
            if (type === "href") {
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
        case "hover":
            additional_parameter = "hv-";
            break;
        default:
            additional_parameter = "";
            break;
    }

    for (let i: number = 0; i < get_active_palettes_amount(); i++) {
        element.classList.remove(class_name + additional_parameter + i);
    }
}

function hide_panels(event: Event = {} as Event): void {
    const target: HTMLElement | null = event.target as HTMLElement;
    const is_trigger: boolean = target?.classList?.contains("palette-trigger");
    
    document.querySelectorAll(".palette").forEach((element: Element) => {
        (element as HTMLElement).style.display = is_trigger && 
            (element as HTMLElement).style.display !== "block" ? "block" : "none";
    });
}
