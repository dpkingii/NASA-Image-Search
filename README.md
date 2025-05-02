# 🚀 NASA Image Search App

The NASA Image Search App is a React and TypeScript web application I built to explore images from NASA’s public Image and Video Library. I was inspired to create this project because of my interest in space exploration and my curiosity about how open government data can be made more accessible to everyday users.

The application allows users to enter a keyword and select a year range (from 1920 to 2025) to search for related NASA images. The results are displayed one at a time in a gallery format, with each image card showing its title, description, and creation date. Users can navigate between results using left and right buttons, and return to the search page at any time.

I designed the app with a clean, space-themed aesthetic and implemented routing using `react-router-dom` to handle page transitions between the landing page and the display page. The search page includes input validation to ensure that users only enter valid year ranges, and the app gracefully handles edge cases like empty results by showing an appropriate error message.

Data is fetched from the NASA Images API using Axios, and the app makes use of modular React components to organize functionality—such as a `GalleryCard` component that displays each image and its details.

## Technologies Used

- React (with Vite)
- TypeScript
- Axios
- NASA Image and Video Library API
- React Router DOM
- Custom CSS
