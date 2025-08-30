[English](./README.md) | [Українська](./README.uk.md)
# Knowledge Base 📚

This repository contains a highly interactive and visually appealing personal knowledge base. It's designed as a single-page application that runs entirely in the browser, requiring no backend or build process for viewing.

The project serves as a dynamic and customizable container for notes, references, and frequently asked questions, enhanced with smooth animations and user-friendly features. This project is presented in both English and Ukrainian.


## Demo

👉 [View the live version on GitHub Pages](https://niarosss.github.io/knowledge-base/)


## Features

-   **Responsive Design:** A fluid layout that adapts seamlessly to desktop, tablet, and mobile screens.
-   **Dynamic Hero Section:** A welcoming intro section that displays a randomly selected background image and an inspirational quote on each visit.
-   **Interactive UI:**
    -   Smooth, animated FAQ accordion for concisely displaying information.
    -   Parallax scrolling effects on the hero background, powered by Rellax.js.
    -   Subtle on-scroll reveal animations for content blocks using anime.js.
    -   An optional and festive falling snow animation for visual flair.
-   **User Settings & Theming:**
    -   **Dark/Light Mode:** Automatically detects system theme preferences and allows manual toggling. The user's choice is saved in local storage for persistence.
    -   **Hide Intro:** Users can opt to hide the hero section for quicker access to the main content.
-   **Productivity Tools:**
    -   **Advanced Copy-Paste:** Selecting any `[data-selectable]` text block opens a custom context menu with options to "Copy" or "Copy with signature", and a toggle to add a "Hi!" greeting.
    -   **Feedback Form:** A modal with a contact form that sends submissions directly to a Telegram chat via the Telegram Bot API.
    -   **Percentage Calculator:** A simple pop-up utility for quick daily vs. yearly percentage calculations.
## Technologies Used

-   **Languages:** HTML, SCSS, JavaScript (ES6)
-   **Libraries & Tools:**
    -   **anime.js:** For orchestrating complex, timeline-based UI animations.
    -   **Rellax.js:** To create smooth parallax scrolling effects.
    -   **MoveTo.js:** For handling smooth scrolling to anchor links.
    -   **Snowy.js:** Provides the optional falling snow effect.
    -   **axios:** Used in the feedback form to make POST requests to the Telegram API.
## Project Structure

The codebase is organized for clarity and ease of maintenance:

```
/
├── index.html            # The main HTML file containing all content and structure.
├── css/                  # Compiled CSS files.
├── scss/                 # Source SCSS files organized by function.
│   ├── components/       # Styles for reusable UI elements (buttons, inputs, etc.).
│   ├── layouts/          # Styles for major page sections (header, footer, intro).
│   └── utils/            # SCSS variables, mixins, animations, and fonts.
├── js/                   # JavaScript files.
│   ├── main.js           # Core application logic, event handling, and animations.
│   ├── plugins.js        # Bundled and minified third-party libraries.
│   └── snowy.js          # The falling snow effect script.
├── img/                  # Background images, logos, and other assets.
└── fonts/                # Custom icon fonts.
```
