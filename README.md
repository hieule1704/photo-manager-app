Photo Manager App

Overview

Photo Manager is a web-based application built with React and Tailwind CSS, allowing users to upload, view, and delete photos. It features a responsive photo grid, a lightbox for full-screen image viewing, and a simple upload form.

Features

Photo Grid: Displays uploaded photos in a responsive grid layout.

Lightbox: View individual photos in a full-screen modal with navigation.

Upload Photos: Upload images (JPEG, PNG) via a drag-and-drop or file selection interface.

Delete Photos: Remove photos from the grid with a delete button.

Responsive Design: Optimized for both desktop and mobile devices using Tailwind CSS.

Tech Stack

React: Frontend library for building the UI.

Tailwind CSS: Utility-first CSS framework for styling.

JavaScript (ES6+): Core programming language.

CDN Dependencies: React, ReactDOM, and Tailwind CSS via CDN.

Setup Instructions

Clone or Download the Project

If using a repository, clone it: git clone <repository-url>.

Alternatively, use the index.html file provided in the project.

Serve the Application

No build step is required as the app uses CDN-hosted dependencies.

Open index.html in a modern web browser (Chrome, Firefox, etc.).

Alternatively, use a local server (e.g., npx serve or python -m http.server) to serve the index.html file for a better development experience.

Dependencies

No npm or yarn installation is needed since dependencies are loaded via CDN:

React and ReactDOM from cdn.jsdelivr.net.

Tailwind CSS via <script> tag in index.html.

File Structure

photo-manager/
├── index.html # Main HTML file with React app
├── README.md # This file

Usage

Uploading Photos:

Click the "Choose File" button or drag and drop images into the upload area.

Supported formats: JPEG, PNG.

Uploaded photos appear in the grid immediately.

Viewing Photos:

Click any photo in the grid to open it in a lightbox.

Use arrow buttons (or keyboard arrows) to navigate between photos.

Click the close button or press Esc to exit the lightbox.

Deleting Photos:

Hover over a photo in the grid to reveal the delete button.

Click the delete button to remove the photo from the grid.

Notes

The app stores photos in memory (React state) and does not persist data across page refreshes.

For production use, consider adding a backend (e.g., Node.js, Firebase) for persistent storage.

The app is sandboxed and does not use <form> for uploads due to browser restrictions.

Limitations

No server-side storage; photos are lost on page refresh.

File size and type validation is basic; enhance as needed for production.

Lightbox navigation assumes sequential photo access.

Future Improvements

Add persistent storage with a backend API.

Implement photo categorization or tagging.

Add bulk upload/delete functionality.

Enhance accessibility (e.g., ARIA labels, keyboard navigation).

License

This project is unlicensed and free to use. Feel free to modify and distribute as needed.
