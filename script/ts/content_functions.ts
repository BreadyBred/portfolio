function toggle_irrelevant_content(event: Event): void {
    const target = event.currentTarget as HTMLElement;
    const class_list: string[] = Array.from(target.classList);
    
    const category: string = class_list.find((class_name: string) => class_name !== 'relevance-button');
    if (!category) {
        return;
    }

    const elements: NodeListOf<HTMLElement> = document.querySelectorAll(`.irrelevant.${category}`);
    if (!elements.length) {
        return;
    }

    const are_currently_visible: boolean = Array.from(elements).some((element: HTMLElement) => element.style.display !== "none");

    elements.forEach((element: HTMLElement) => {
        element.style.display = are_currently_visible ? "none" : "flex";
    });

    target.textContent = are_currently_visible ? t("Voir tout") : t("Réduire");
}

function get_current_language() {
	const path = window.location.pathname;
	return path.startsWith("/en") ? "en" : "fr";
}

function t(str: string): string {
    const translations = {
		"Voir tout": "See all",
		"Réduire": "Reduce"
	};

	if (get_current_language() === "fr") {
        return str;
    }

	return translations[str] || str;
}
