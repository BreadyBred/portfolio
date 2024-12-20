# My Portfolio Website

This repository contains the source code for my personal portfolio website. It's built with PHP, LESS, and JavaScript, and features a custom back-end for easy content management. A key architectural decision was to use JSON files for data storage instead of a traditional database like MySQL. This choice simplifies deployment and reduces server-side dependencies for this particular project.

## Key Features

*   **Dynamic Content (JSON-based):** All website content is stored in JSON files, allowing for easy updates without modifying code. This approach simplifies deployment and eliminates the need for a database server.
*   **Custom Back-end:** A password-protected back-end interface provides full control over website content, including adding, editing, and deleting entries in the JSON files.
*   **Key Sections:** The portfolio is divided into clear sections:
    *   About Me
    *   Skills
    *   Projects
    *   Work Experience & Education
    *   Contact
*   **Dynamic Color Palette:** Users can dynamically change the website's color scheme for a personalized experience.
*   **Responsive Design:** The website is designed to be responsive and adapt to different screen sizes.

## Technologies Used

*   PHP
*   LESS
*   JavaScript
*   JSON

## Why JSON instead of a Database?

For this project, using JSON files offered several advantages:

*   **Simplified Deployment:** No database server setup is required. The website can be deployed on any web server that supports PHP.
*   **Reduced Server-Side Dependencies:** This reduces complexity and potential points of failure.
*   **Easy Data Management for Small Projects:** For a portfolio website with a relatively small amount of data, JSON provides a simple and efficient way to store and manage content.
*   **Version Control Friendly:** JSON files are easily tracked by version control systems like Git.

While a database like MySQL might be more suitable for larger, more complex applications with relational data, JSON provided an ideal solution for the scope of this project.

## Screenshots
![image](https://github.com/user-attachments/assets/060f8f0c-dd93-4456-a4bf-36287d1b0050)
![image](https://github.com/user-attachments/assets/aae24ee2-1f86-4aeb-bced-3863608dd662)
