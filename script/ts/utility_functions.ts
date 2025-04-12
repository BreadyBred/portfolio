function get_site_root(secured: boolean = true): string {
    if (window.location.hostname === "localhost") {
        return "http://localhost/travail/portfolio";
    }

    if (!secured) {
        return "http://romain-gerard.com";
    }

    return "https://romain-gerard.com";
}

function get_images_folder(): string {
    return `${get_site_root()}/medias/images`;
}
