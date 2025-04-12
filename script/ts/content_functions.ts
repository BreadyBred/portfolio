function toggle_irrelevant_content(): void {
    const elements: NodeListOf<HTMLElement> = document.querySelectorAll(".irrelevant");
    const button: HTMLButtonElement = document.querySelector(".update-relevance");

    if (!elements.length || !button) {
		return;
	}

    const are_currently_visible = Array.from(elements).some((element: HTMLElement) => element.style.display !== "none");

    elements.forEach((are_currently_visible: HTMLElement) => {
        are_currently_visible.style.display = are_currently_visible ? "none" : "flex";
    });

    button.textContent = are_currently_visible ? "Show Irrelevant Content" : "Hide Irrelevant Content";
}
